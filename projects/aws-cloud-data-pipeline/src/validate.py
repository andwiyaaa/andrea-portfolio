from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]

PROCESSED_DATA_PATH = (
    PROJECT_ROOT
    / "data"
    / "processed"
    / "cloud_orders_clean.csv"
)


REQUIRED_COLUMNS = [
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
    "gross_amount",
    "discount_amount",
    "net_amount",
    "order_month",
    "order_day",
]


def load_data() -> pd.DataFrame:
    print("Loading processed dataset...")

    if not PROCESSED_DATA_PATH.exists():
        raise FileNotFoundError(
            f"Processed dataset not found: {PROCESSED_DATA_PATH}"
        )

    df = pd.read_csv(PROCESSED_DATA_PATH)

    print(f"Records loaded: {len(df)}")

    return df


def run_validation(df: pd.DataFrame) -> None:
    print("\nRunning data quality checks...")

    checks = []

    # 1. Dataset is not empty
    checks.append(
        (
            "Dataset is not empty",
            len(df) > 0,
        )
    )

    # 2. Required columns exist
    checks.append(
        (
            "Required columns exist",
            all(column in df.columns for column in REQUIRED_COLUMNS),
        )
    )

    # 3. No duplicate order IDs
    checks.append(
        (
            "No duplicate order IDs",
            df["order_id"].duplicated().sum() == 0,
        )
    )

    # 4. No missing required values
    required_for_null_check = REQUIRED_COLUMNS

    checks.append(
        (
            "No missing required values",
            df[required_for_null_check].isnull().sum().sum() == 0,
        )
    )

    # 5. Valid quantities
    checks.append(
        (
            "All quantities are greater than zero",
            (df["quantity"] > 0).all(),
        )
    )

    # 6. Valid unit prices
    checks.append(
        (
            "All unit prices are greater than zero",
            (df["unit_price"] > 0).all(),
        )
    )

    # 7. Valid discounts
    checks.append(
        (
            "All discounts are between 0 and 1",
            df["discount"].between(0, 1).all(),
        )
    )

    # 8. Valid order statuses
    valid_statuses = {
        "Completed",
        "Pending",
        "Cancelled",
    }

    checks.append(
        (
            "All order statuses are valid",
            df["order_status"].isin(valid_statuses).all(),
        )
    )

    # 9. Gross amount calculation
    expected_gross = (
        df["quantity"] * df["unit_price"]
    ).round(2)

    checks.append(
        (
            "Gross amounts are correctly calculated",
            df["gross_amount"].round(2).equals(expected_gross),
        )
    )

    # 10. Discount amount calculation
    expected_discount = (
        df["gross_amount"] * df["discount"]
    ).round(2)

    checks.append(
        (
            "Discount amounts are correctly calculated",
            df["discount_amount"]
            .round(2)
            .equals(expected_discount),
        )
    )

    # 11. Net amount calculation
    expected_net = (
        df["gross_amount"] - df["discount_amount"]
    ).round(2)

    checks.append(
        (
            "Net amounts are correctly calculated",
            df["net_amount"].round(2).equals(expected_net),
        )
    )

    # 12. Valid dates
    parsed_dates = pd.to_datetime(
        df["order_date"],
        errors="coerce",
    )

    checks.append(
        (
            "All order dates are valid",
            parsed_dates.notna().all(),
        )
    )

    passed = 0
    failed = 0

    print()

    for check_name, result in checks:
        if result:
            print(f"✓ {check_name}")
            passed += 1
        else:
            print(f"✗ {check_name}")
            failed += 1

    print("\n" + "=" * 60)
    print("DATA QUALITY SUMMARY")
    print("=" * 60)

    print(f"Checks executed: {len(checks)}")
    print(f"Checks passed:   {passed}")
    print(f"Checks failed:   {failed}")

    if failed > 0:
        raise RuntimeError(
            "Data validation failed. "
            "Review the failed checks above."
        )

    print("\nAll data quality checks passed.")


def main() -> None:
    df = load_data()

    run_validation(df)

    print("\nData validation completed successfully.")


if __name__ == "__main__":
    main()