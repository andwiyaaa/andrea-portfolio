import subprocess
import sys
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
REPO_ROOT = PROJECT_ROOT.parents[1]
SRC_DIR = PROJECT_ROOT / "src"
SCHEMA_FILE = PROJECT_ROOT / "sql" / "schema.sql"


def run_command(command: list[str], description: str) -> None:
    """Run a pipeline command and stop if it fails."""
    print(f"\n{'=' * 60}")
    print(description)
    print(f"{'=' * 60}")

    result = subprocess.run(
        command,
        cwd=REPO_ROOT,
    )

    if result.returncode != 0:
        raise RuntimeError(f"Pipeline failed during: {description}")


def main() -> None:
    """Run the complete e-commerce data pipeline."""

    print("\nStarting e-commerce data pipeline...")

    # 1. Generate raw data
    run_command(
        [sys.executable, str(SRC_DIR / "generate_data.py")],
        "Step 1: Generating raw data",
    )

    # 2. Extract raw data
    run_command(
        [sys.executable, str(SRC_DIR / "extract.py")],
        "Step 2: Extracting data",
    )

    # 3. Transform data
    run_command(
        [sys.executable, str(SRC_DIR / "transform.py")],
        "Step 3: Transforming data",
    )

    # 4. Validate transformed data
    run_command(
        [sys.executable, str(SRC_DIR / "validate.py")],
        "Step 4: Validating data",
    )

    # 5. Create database schema
    run_command(
        [
            "psql",
            "-U",
            "postgres",
            "-d",
            "ecommerce_db",
            "-f",
            str(SCHEMA_FILE),
        ],
        "Step 5: Creating PostgreSQL schema",
    )

    # 6. Load data into PostgreSQL
    run_command(
        [sys.executable, str(SRC_DIR / "load.py")],
        "Step 6: Loading data into PostgreSQL",
    )

    print("\n" + "=" * 60)
    print("Pipeline completed successfully.")
    print("=" * 60)


if __name__ == "__main__":
    main()