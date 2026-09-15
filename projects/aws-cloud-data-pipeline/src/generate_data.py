import random
from datetime import datetime, timedelta
from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = PROJECT_ROOT / "data" / "raw" / "cloud_orders.csv"

random.seed(42)


PRODUCTS = [
    ("P001", "Laptop Accessories"),
    ("P002", "Mobile Accessories"),
    ("P003", "Home Appliances"),
    ("P004", "Gaming"),
    ("P005", "Office Supplies"),
    ("P006", "Smart Devices"),
    ("P007", "Audio"),
    ("P008", "Wearables"),
]

PAYMENT_METHODS = [
    "Credit Card",
    "Debit Card",
    "GCash",
    "Maya",
    "Bank Transfer",
]

ORDER_STATUSES = [
    "Completed",
    "Completed",
    "Completed",
    "Pending",
    "Cancelled",
]

CUSTOMER_COUNT = 250
ORDER_COUNT = 1000


def generate_orders() -> pd.DataFrame:
    start_date = datetime(2026, 1, 1)

    rows = []

    for order_number in range(1, ORDER_COUNT + 1):
        order_id = f"ORD-{order_number:05d}"

        order_date = start_date + timedelta(
            days=random.randint(0, 89),
            hours=random.randint(0, 23),
            minutes=random.randint(0, 59),
        )

        customer_id = f"CUST-{random.randint(1, CUSTOMER_COUNT):04d}"

        product_id, category = random.choice(PRODUCTS)

        quantity = random.randint(1, 5)

        unit_price = round(random.uniform(250, 15000), 2)

        discount = random.choice(
            [0, 0, 0, 0.05, 0.10, 0.15]
        )

        payment_method = random.choice(PAYMENT_METHODS)
        order_status = random.choice(ORDER_STATUSES)

        gross_amount = round(quantity * unit_price, 2)
        discount_amount = round(gross_amount * discount, 2)
        net_amount = round(gross_amount - discount_amount, 2)

        rows.append(
            {
                "order_id": order_id,
                "order_date": order_date,
                "customer_id": customer_id,
                "product_id": product_id,
                "product_category": category,
                "quantity": quantity,
                "unit_price": unit_price,
                "discount": discount,
                "payment_method": payment_method,
                "order_status": order_status,
                "gross_amount": gross_amount,
                "discount_amount": discount_amount,
                "net_amount": net_amount,
            }
        )

    return pd.DataFrame(rows)


def main() -> None:
    print("Generating AWS cloud pipeline dataset...")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    df = generate_orders()

    df.to_csv(OUTPUT_PATH, index=False)

    print(f"Raw dataset saved to: {OUTPUT_PATH}")
    print(f"Records generated: {len(df)}")
    print(f"Columns: {', '.join(df.columns)}")


if __name__ == "__main__":
    main()