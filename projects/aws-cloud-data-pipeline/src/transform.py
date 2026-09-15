from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]

RAW_DATA_PATH = PROJECT_ROOT / "data" / "raw" / "cloud_orders.csv"
PROCESSED_DATA_PATH = (
    PROJECT_ROOT / "data" / "processed" / "cloud_orders_clean.csv"
)


def load_raw_data() -> pd.DataFrame:
    print("Loading raw dataset...")

    df = pd.read_csv(RAW_DATA_PATH)

    print(f"Raw records loaded: {len(df)}")

    return df


def transform_data(df: pd.DataFrame) -> pd.DataFrame:
    print("\nStarting transformation...")

    # Standardize column names
    df.columns = [
        column.strip().lower().replace(" ", "_")
        for column in df.columns
    ]

    # Convert date column
    df["order_date"] = pd.to_datetime(
        df["order_date"],
        errors="coerce",
    )

    # Remove duplicate orders
    before_duplicates = len(df)

    df = df.drop_duplicates(subset=["order_id"])

    duplicates_removed = before_duplicates - len(df)

    print(f"Duplicate orders removed: {duplicates_removed}")

    # Remove rows missing required values
    before_missing = len(df)

    required_columns = [
        "order_id",
        "order_date",
        "customer_id",
        "product_id",
        "product_category",
        "quantity",
        "unit_price",
        "discount",
        "payment_method",
        "order_status",
    ]

    df = df.dropna(subset=required_columns)

    missing_removed = before_missing - len(df)

    print(f"Rows removed for missing required values: {missing_removed}")

    # Ensure numeric fields have valid values
    df = df[df["quantity"] > 0]
    df = df[df["unit_price"] > 0]
    df = df[df["discount"].between(0, 1)]

    # Recalculate financial values
    df["gross_amount"] = (
        df["quantity"] * df["unit_price"]
    ).round(2)

    df["discount_amount"] = (
        df["gross_amount"] * df["discount"]
    ).round(2)

    df["net_amount"] = (
        df["gross_amount"] - df["discount_amount"]
    ).round(2)

    # Add useful derived fields
    df["order_month"] = df["order_date"].dt.to_period("M").astype(str)

    df["order_day"] = df["order_date"].dt.day_name()

    print(f"Records after transformation: {len(df)}")

    return df


def save_processed_data(df: pd.DataFrame) -> None:
    PROCESSED_DATA_PATH.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    df.to_csv(
        PROCESSED_DATA_PATH,
        index=False,
    )

    print(
        f"\nProcessed dataset saved to: "
        f"{PROCESSED_DATA_PATH}"
    )

    print(f"Final records: {len(df)}")
    print(f"Final columns: {len(df.columns)}")


def main() -> None:
    df = load_raw_data()

    transformed_df = transform_data(df)

    save_processed_data(transformed_df)

    print("\nData transformation completed successfully.")


if __name__ == "__main__":
    main()