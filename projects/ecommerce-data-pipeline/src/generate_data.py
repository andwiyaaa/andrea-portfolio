import random
from datetime import datetime, timedelta
from pathlib import Path

import numpy as np
import pandas as pd


random.seed(42)
np.random.seed(42)


OUTPUT_PATH = Path("projects/ecommerce-data-pipeline/data/raw/ecommerce_orders.csv")


def generate_orders(num_orders=1000):
    categories = [
        "Electronics",
        "Home",
        "Beauty",
        "Sports",
        "Fashion",
    ]

    payment_methods = [
        "GCash",
        "Maya",
        "Credit Card",
        "Debit Card",
        "Bank Transfer",
    ]

    statuses = [
        "Completed",
        "Completed",
        "Completed",
        "Pending",
        "Cancelled",
    ]

    start_date = datetime(2026, 1, 1)

    rows = []

    for i in range(num_orders):
        order_id = f"ORD-{10000 + i}"
        customer_id = f"CUST-{random.randint(1, 250):03d}"
        product_id = f"PROD-{random.randint(1, 100):03d}"

        order_date = start_date + timedelta(
            days=random.randint(0, 89)
        )

        category = random.choice(categories)
        quantity = random.randint(1, 5)
        unit_price = round(random.uniform(100, 5000), 2)
        discount = random.choice([0, 0.05, 0.10, 0.15, 0.20])

        payment_method = random.choice(payment_methods)
        order_status = random.choice(statuses)

        rows.append(
            {
                "order_id": order_id,
                "order_date": order_date.strftime("%Y-%m-%d"),
                "customer_id": customer_id,
                "product_id": product_id,
                "product_category": category,
                "quantity": quantity,
                "unit_price": unit_price,
                "discount": discount,
                "payment_method": payment_method,
                "order_status": order_status,
            }
        )

    df = pd.DataFrame(rows)

    # Introduce realistic data-quality issues.

    # Missing customer IDs
    missing_customer_idx = np.random.choice(
        df.index,
        size=15,
        replace=False,
    )

    df.loc[missing_customer_idx, "customer_id"] = np.nan

    # Missing unit prices
    missing_price_idx = np.random.choice(
        df.index,
        size=10,
        replace=False,
    )

    df.loc[missing_price_idx, "unit_price"] = np.nan

    # Invalid quantities
    invalid_quantity_idx = np.random.choice(
        df.index,
        size=8,
        replace=False,
    )

    df.loc[invalid_quantity_idx, "quantity"] = 0

    # Inconsistent category names
    category_idx = np.random.choice(
        df.index,
        size=12,
        replace=False,
    )

    df.loc[category_idx, "product_category"] = (
        df.loc[category_idx, "product_category"]
        .str.lower()
    )

    # Inconsistent payment method
    payment_idx = np.random.choice(
        df.index,
        size=10,
        replace=False,
    )

    df.loc[payment_idx, "payment_method"] = (
        df.loc[payment_idx, "payment_method"]
        .str.lower()
    )

    # Duplicate records
    duplicates = df.sample(
        10,
        random_state=42,
    )

    df = pd.concat(
        [df, duplicates],
        ignore_index=True,
    )

    OUTPUT_PATH.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    df.to_csv(
        OUTPUT_PATH,
        index=False,
    )

    print(
        f"Generated {len(df)} rows at {OUTPUT_PATH}"
    )


if __name__ == "__main__":
    generate_orders()