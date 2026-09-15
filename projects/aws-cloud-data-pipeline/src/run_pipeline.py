import os
import subprocess
import sys
from pathlib import Path

from dotenv import load_dotenv
from s3_utils import upload_processed_data

PROJECT_ROOT = Path(__file__).resolve().parents[1]
REPO_ROOT = PROJECT_ROOT.parents[1]
SRC_DIR = PROJECT_ROOT / "src"

SCHEMA_PATH = PROJECT_ROOT / "sql" / "schema.sql"
PROCESSED_DATA_PATH = (
    PROJECT_ROOT
    / "data"
    / "processed"
    / "cloud_orders_clean.csv"
)

load_dotenv(PROJECT_ROOT / ".env")


def run_command(
    command: list[str],
    description: str,
    env: dict[str, str] | None = None,
) -> None:
    print("\n" + "=" * 60)
    print(description)
    print("=" * 60)

    result = subprocess.run(
        command,
        cwd=REPO_ROOT,
        env=env,
    )

    if result.returncode != 0:
        raise RuntimeError(f"Pipeline failed during: {description}")


def get_database_environment() -> dict[str, str]:
    required_vars = [
        "POSTGRES_USER",
        "POSTGRES_PASSWORD",
        "POSTGRES_HOST",
        "POSTGRES_PORT",
        "POSTGRES_DB",
    ]

    missing = [var for var in required_vars if not os.getenv(var)]

    if missing:
        raise RuntimeError(
            "Missing PostgreSQL environment variables: "
            + ", ".join(missing)
        )

    env = os.environ.copy()
    env["PGPASSWORD"] = os.environ["POSTGRES_PASSWORD"]

    return env


def main() -> None:
    print("\nStarting AWS cloud data pipeline...")

    run_command(
        [sys.executable, str(SRC_DIR / "extract.py")],
        "Step 1: Extracting raw data from S3",
    )

    run_command(
        [sys.executable, str(SRC_DIR / "transform.py")],
        "Step 2: Transforming data",
    )

    run_command(
        [sys.executable, str(SRC_DIR / "validate.py")],
        "Step 3: Validating data",
    )

    db_env = get_database_environment()

    run_command(
        [
            "psql",
            "-h",
            os.environ["POSTGRES_HOST"],
            "-U",
            os.environ["POSTGRES_USER"],
            "-d",
            os.environ["POSTGRES_DB"],
            "-f",
            str(SCHEMA_PATH),
        ],
        "Step 4: Creating database schema",
        env=db_env,
    )

    run_command(
        [sys.executable, str(SRC_DIR / "load.py")],
        "Step 5: Loading data into PostgreSQL",
    )

    print("\n" + "=" * 60)
    print("Step 6: Uploading processed data to S3")
    print("=" * 60)

    upload_processed_data(
        PROCESSED_DATA_PATH,
        "processed/cloud_orders_clean.csv",
    )

    print("\n" + "=" * 60)
    print("AWS cloud data pipeline completed successfully.")
    print("=" * 60)


if __name__ == "__main__":
    main()
