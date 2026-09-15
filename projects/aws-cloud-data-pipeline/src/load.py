import os
from pathlib import Path

import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine, text


PROJECT_ROOT = Path(__file__).resolve().parents[1]

PROCESSED_DATA_PATH = (
    PROJECT_ROOT
    / "data"
    / "processed"
    / "cloud_orders_clean.csv"
)

load_dotenv()


DATABASE_URL = (
    "postgresql+psycopg2://"
    f"{os.getenv('POSTGRES_USER')}:"
    f"{os.getenv('POSTGRES_PASSWORD')}@"
    f"{os.getenv('POSTGRES_HOST')}:"
    f"{os.getenv('POSTGRES_PORT')}/"
    f"{os.getenv('POSTGRES_DB')}"
)


def load_data() -> None:
    print("Loading processed dataset...")

    if not PROCESSED_DATA_PATH.exists():
        raise FileNotFoundError(
            f"Processed dataset not found: {PROCESSED_DATA_PATH}"
        )

    df = pd.read_csv(PROCESSED_DATA_PATH)

    print(f"Records to load: {len(df)}")

    engine = create_engine(DATABASE_URL)

    with engine.begin() as connection:
        connection.execute(
            text("TRUNCATE TABLE cloud_orders")
        )

        df.to_sql(
            "cloud_orders",
            connection,
            if_exists="append",
            index=False,
            method="multi",
        )

    print("Data loaded into PostgreSQL successfully.")

    with engine.connect() as connection:
        result = connection.execute(
            text("SELECT COUNT(*) FROM cloud_orders")
        )

        row_count = result.scalar()

    print(f"Records in PostgreSQL: {row_count}")

    if row_count != len(df):
        raise RuntimeError(
            "Row-count validation failed after loading."
        )

    print("PostgreSQL row-count validation passed.")


if __name__ == "__main__":
    load_data()