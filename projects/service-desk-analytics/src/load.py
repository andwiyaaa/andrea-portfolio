from pathlib import Path

import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import os
from urllib.parse import quote_plus


BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_PATH = (
    BASE_DIR
    / "data"
    / "processed"
    / "service_desk_tickets_clean.csv"
)

ENV_PATH = BASE_DIR / ".env"

load_dotenv(ENV_PATH)


def main():
    print("=" * 60)
    print("SERVICE DESK DATABASE LOAD")
    print("=" * 60)

    print(f"Reading: {INPUT_PATH}")

    df = pd.read_csv(INPUT_PATH)

    print(f"Rows to load: {len(df):,}")
    print(f"Columns: {len(df.columns)}")
    print()

    # ---------------------------------------------------------
    # Database configuration
    # ---------------------------------------------------------

    postgres_user = os.getenv("POSTGRES_USER")
    postgres_password = os.getenv("POSTGRES_PASSWORD")
    postgres_host = os.getenv("POSTGRES_HOST", "localhost")
    postgres_port = os.getenv("POSTGRES_PORT", "5432")
    postgres_db = os.getenv("POSTGRES_DB")

    required_env = {
        "POSTGRES_USER": postgres_user,
        "POSTGRES_PASSWORD": postgres_password,
        "POSTGRES_DB": postgres_db,
    }

    missing_env = [
        key
        for key, value in required_env.items()
        if not value
    ]

    if missing_env:
        raise RuntimeError(
            "Missing environment variables: "
            + ", ".join(missing_env)
        )

    # URL-encode the password in case it contains
    # special characters such as @, :, /, or #.
    encoded_password = quote_plus(postgres_password)

    database_url = (
        f"postgresql+psycopg2://"
        f"{postgres_user}:{encoded_password}@"
        f"{postgres_host}:{postgres_port}/"
        f"{postgres_db}"
    )

    # ---------------------------------------------------------
    # Convert date/time columns
    # ---------------------------------------------------------

    df["created_at"] = pd.to_datetime(
        df["created_at"]
    )

    df["created_date"] = pd.to_datetime(
        df["created_date"]
    ).dt.date

    df["resolved_at"] = pd.to_datetime(
        df["resolved_at"],
        errors="coerce",
    )

    # ---------------------------------------------------------
    # Convert boolean columns
    # ---------------------------------------------------------

    df["within_resolution_sla"] = (
        df["within_resolution_sla"]
        .astype("boolean")
    )

    df["reopened"] = (
        df["reopened"]
        .astype("boolean")
    )

    df["is_resolved"] = (
        df["is_resolved"]
        .astype("boolean")
    )

    # Convert NaN values to None for PostgreSQL
    df = df.where(pd.notna(df), None)

    # ---------------------------------------------------------
    # Connect to PostgreSQL
    # ---------------------------------------------------------

    print("Connecting to PostgreSQL...")

    engine = create_engine(
        database_url,
        pool_pre_ping=True,
    )

    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    print("PostgreSQL connection successful.")
    print()

    # ---------------------------------------------------------
    # Clear existing data
    # ---------------------------------------------------------

    with engine.begin() as connection:
        connection.execute(
            text(
                "TRUNCATE TABLE service_desk_tickets"
            )
        )

    print("Existing table data cleared.")

    # ---------------------------------------------------------
    # Load data
    # ---------------------------------------------------------

    df.to_sql(
        "service_desk_tickets",
        engine,
        if_exists="append",
        index=False,
        method="multi",
        chunksize=500,
    )

    print("Data loaded successfully.")
    print()

    # ---------------------------------------------------------
    # Validate database row count
    # ---------------------------------------------------------

    with engine.connect() as connection:
        result = connection.execute(
            text(
                """
                SELECT COUNT(*)
                FROM service_desk_tickets
                """
            )
        )

        database_count = result.scalar()

    print("=" * 60)
    print("LOAD VALIDATION")
    print("=" * 60)
    print(f"CSV rows:      {len(df):,}")
    print(f"Database rows: {database_count:,}")

    if database_count != len(df):
        raise RuntimeError(
            "Row count mismatch between CSV and PostgreSQL."
        )

    print()
    print("✓ DATABASE LOAD VALIDATED")
    print("✓ SERVICE DESK DATA IS READY FOR SQL ANALYTICS")


if __name__ == "__main__":
    main()