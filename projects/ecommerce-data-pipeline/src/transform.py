from pathlib import Path

import pandas as pd


RAW_DATA_PATH = Path(
    "projects/ecommerce-data-pipeline/data/raw/ecommerce_orders.csv"
)

PROCESSED_DATA_PATH = Path(
    "projects/ecommerce-data-pipeline/data/processed/ecommerce_orders_clean.csv"
)


def transform_data(df: pd.DataFrame) -> pd.DataFrame:
    """Clean and transform raw e-commerce order data."""

    df = df.copy()

    print("Starting transformation...")
    print(f"Initial rows: {len(df)}")

    # ---------------------------------------------------------
    # 1. Standardize column names
    # ---------------------------------------------------------
    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(" ", "_")
    )

    # ---------------------------------------------------------
    # 2. Remove exact duplicate records
    # ---------------------------------------------------------
    duplicates_removed = df.duplicated().sum()

    df = df.drop_duplicates()

    print(f"Duplicate rows removed: {duplicates_removed}")

    # ---------------------------------------------------------
    # 3. Clean text fields
    # ---------------------------------------------------------
    text_columns = [
        "order_id",
        "customer_id",
        "product_id",
        "product_category",
        "payment_method",
        "order_status",
    ]

    for column in text_columns:
        df[column] = df[column].astype("string").str.strip()

    # Standardize category capitalization
    df["product_category"] = (
        df["product_category"]
        .str.title()
    )

    # Standardize payment method capitalization
    df["payment_method"] = (
    df["payment_method"]
        .astype(str)
        .str.strip()
        .str.title()
        .replace({"Gcash": "GCash"})
    )

    # ---------------------------------------------------------
    # 4. Convert date column
    # ---------------------------------------------------------
    df["order_date"] = pd.to_datetime(
        df["order_date"],
        errors="coerce",
    )

    # ---------------------------------------------------------
    # 5. Convert numeric columns
    # ---------------------------------------------------------
    df["quantity"] = pd.to_numeric(
        df["quantity"],
        errors="coerce",
    )

    df["unit_price"] = pd.to_numeric(
        df["unit_price"],
        errors="coerce",
    )

    df["discount"] = pd.to_numeric(
        df["discount"],
        errors="coerce",
    )

    # ---------------------------------------------------------
    # 6. Remove records that cannot produce a valid order value
    # ---------------------------------------------------------
    before_numeric_filter = len(df)

    df = df[
        (df["quantity"] > 0)
        & (df["unit_price"].notna())
    ].copy()

    removed_numeric = (
        before_numeric_filter - len(df)
    )

    print(
        f"Rows removed for invalid quantity or missing price: "
        f"{removed_numeric}"
    )

    # ---------------------------------------------------------
    # 7. Fill missing customer IDs
    # ---------------------------------------------------------
    missing_customers = df["customer_id"].isna().sum()

    df["customer_id"] = (
        df["customer_id"]
        .fillna("UNKNOWN")
    )

    print(
        f"Missing customer IDs replaced with UNKNOWN: "
        f"{missing_customers}"
    )

    # ---------------------------------------------------------
    # 8. Calculate order-level metrics
    # ---------------------------------------------------------
    df["gross_amount"] = (
        df["quantity"] * df["unit_price"]
    )

    df["discount_amount"] = (
        df["gross_amount"] * df["discount"]
    )

    df["net_amount"] = (
        df["gross_amount"] - df["discount_amount"]
    )

    # ---------------------------------------------------------
    # 9. Sort the final dataset
    # ---------------------------------------------------------
    df = df.sort_values(
        by=["order_date", "order_id"]
    ).reset_index(drop=True)

    # ---------------------------------------------------------
    # 10. Save processed data
    # ---------------------------------------------------------
    PROCESSED_DATA_PATH.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    df.to_csv(
        PROCESSED_DATA_PATH,
        index=False,
    )

    print(f"Final rows: {len(df)}")
    print(
        f"Processed data saved to: "
        f"{PROCESSED_DATA_PATH}"
    )

    return df


if __name__ == "__main__":
    raw_df = pd.read_csv(RAW_DATA_PATH)

    clean_df = transform_data(raw_df)

    print("\nTransformed columns:")
    print(clean_df.columns.tolist())

    print("\nFirst 5 transformed rows:")
    print(clean_df.head())