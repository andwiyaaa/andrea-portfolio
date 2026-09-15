import subprocess
import sys
from pathlib import Path

from s3_utils import upload_processed_data


PROJECT_ROOT = Path(__file__).resolve().parents[1]
REPO_ROOT = PROJECT_ROOT.parents[1]
SRC_DIR = PROJECT_ROOT / "src"

PROCESSED_DATA_PATH = (
    PROJECT_ROOT
    / "data"
    / "processed"
    / "cloud_orders_clean.csv"
)


def run_command(
    command: list[str],
    description: str,
) -> None:
    print("\n" + "=" * 60)
    print(description)
    print("=" * 60)

    result = subprocess.run(
        command,
        cwd=REPO_ROOT,
    )

    if result.returncode != 0:
        raise RuntimeError(
            f"Pipeline failed during: {description}"
        )


def main() -> None:
    print("\nStarting AWS cloud data pipeline...")

    run_command(
        [
            sys.executable,
            str(SRC_DIR / "extract.py"),
        ],
        "Step 1: Extracting raw data from S3",
    )

    run_command(
        [
            sys.executable,
            str(SRC_DIR / "transform.py"),
        ],
        "Step 2: Transforming data",
    )

    run_command(
        [
            sys.executable,
            str(SRC_DIR / "validate.py"),
        ],
        "Step 3: Validating data",
    )

    run_command(
        [
            sys.executable,
            str(SRC_DIR / "load.py"),
        ],
        "Step 4: Loading data into PostgreSQL",
    )

    print("\n" + "=" * 60)
    print("Step 5: Uploading processed data to S3")
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