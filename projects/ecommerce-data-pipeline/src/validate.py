from pathlib import Path

import pandas as pd


PROCESSED_DATA_PATH = Path(
    "projects/ecommerce-data-pipeline/data/processed/ecommerce_orders_clean.csv"
)


def validate_data(df: pd.DataFrame) -> bool:
    """Run data-quality checks on the processed dataset."""

    print("Starting data validation...\n")

    validation_passed = True

    # ---------------------------------------------------------
    # 1. Required columns
    # ---------------------------------------------------------
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
        "gross_amount",
        "discount_amount",
        "net_amount",
    ]

    missing_columns = [
        column
        for column in required_columns
        if column not in df.columns
    ]

    if missing_columns:
        print(f"❌ Missing columns: {missing_columns}")
        validation_passed = False
    else:
        print("✅ Required columns check passed.")

    # ---------------------------------------------------------
    # 2. Duplicate order IDs
    # ---------------------------------------------------------
    duplicate_order_ids = df["order_id"].duplicated().sum()

    if duplicate_order_ids > 0:
        print(
            f"❌ Duplicate order IDs found: "
            f"{duplicate_order_ids}"
        )
        validation_passed = False
    else:
        print("✅ Duplicate order ID check passed.")

    # ---------------------------------------------------------
    # 3. Missing customer IDs
    # ---------------------------------------------------------
    missing_customer_ids = df["customer_id"].isna().sum()

    if missing_customer_ids > 0:
        print(
            f"❌ Missing customer IDs found: "
            f"{missing_customer_ids}"
        )
        validation_passed = False
    else:
        print("✅ Customer ID completeness check passed.")

    # ---------------------------------------------------------
    # 4. Valid quantities
    # ---------------------------------------------------------
    invalid_quantities = (
        df["quantity"] <= 0
    ).sum()

    if invalid_quantities > 0:
        print(
            f"❌ Invalid quantities found: "
            f"{invalid_quantities}"
        )
        validation_passed = False
    else:
        print("✅ Quantity validation passed.")

    # ---------------------------------------------------------
    # 5. Valid prices
    # ---------------------------------------------------------
    invalid_prices = (
        df["unit_price"] <= 0
    ).sum()

    if invalid_prices > 0:
        print(
            f"❌ Invalid unit prices found: "
            f"{invalid_prices}"
        )
        validation_passed = False
    else:
        print("✅ Unit price validation passed.")

    # ---------------------------------------------------------
    # 6. Valid discounts
    # ---------------------------------------------------------
    invalid_discounts = (
        (df["discount"] < 0)
        | (df["discount"] > 1)
    ).sum()

    if invalid_discounts > 0:
        print(
            f"❌ Invalid discounts found: "
            f"{invalid_discounts}"
        )
        validation_passed = False
    else:
        print("✅ Discount validation passed.")

    # ---------------------------------------------------------
    # 7. Validate calculated amounts
    # ---------------------------------------------------------
    expected_net_amount = (
        df["quantity"] * df["unit_price"]
        * (1 - df["discount"])
    )

    amount_difference = (
        df["net_amount"] - expected_net_amount
    ).abs()

    calculation_errors = (
        amount_difference > 0.01
    ).sum()

    if calculation_errors > 0:
        print(
            f"❌ Net amount calculation errors: "
            f"{calculation_errors}"
        )
        validation_passed = False
    else:
        print("✅ Amount calculation validation passed.")

    # ---------------------------------------------------------
    # Final result
    # ---------------------------------------------------------
    print("\n" + "=" * 50)

    if validation_passed:
        print("✅ DATA VALIDATION PASSED")
    else:
        print("❌ DATA VALIDATION FAILED")

    print("=" * 50)

    return validation_passed


if __name__ == "__main__":
    if not PROCESSED_DATA_PATH.exists():
        raise FileNotFoundError(
            f"Processed data not found: {PROCESSED_DATA_PATH}"
        )

    df = pd.read_csv(
        PROCESSED_DATA_PATH,
        parse_dates=["order_date"],
    )

    validate_data(df)