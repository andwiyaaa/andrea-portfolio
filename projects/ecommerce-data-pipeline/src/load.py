from pathlib import Path
import os

import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine, text

load_dotenv()

PROCESSED_DATA_PATH = Path(
    "projects/ecommerce-data-pipeline/data/processed/ecommerce_orders_clean.csv"
)

DATABASE_URL = (
    f"postgresql+psycopg2://"
    f"{os.getenv('POSTGRES_USER')}:"
    f"{os.getenv('POSTGRES_PASSWORD')}@"
    f"{os.getenv('POSTGRES_HOST')}:"
    f"{os.getenv('POSTGRES_PORT')}/"
    f"{os.getenv('POSTGRES_DB')}"
)

def load_data(file_path: Path) -> None:
    """Load processed e-commerce data into PostgreSQL."""

    if not file_path.exists():
        raise FileNotFoundError(
            f"Processed data file not found: {file_path}"
        )

    df = pd.read_csv(file_path)

    engine = create_engine(DATABASE_URL)

    with engine.begin() as connection:
        connection.execute(text("TRUNCATE TABLE orders"))

        df.to_sql(
            "orders",
            connection,
            if_exists="append",
            index=False,
            method="multi",
        )

    print("Data loading completed.")
    print(f"Rows loaded: {len(df)}")


if __name__ == "__main__":
    load_data(PROCESSED_DATA_PATH)