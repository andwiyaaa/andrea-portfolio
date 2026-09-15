import subprocess
import sys
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
REPO_ROOT = PROJECT_ROOT.parents[1]

SRC_DIR = PROJECT_ROOT / "src"
SCHEMA_FILE = PROJECT_ROOT / "sql" / "schema.sql"


def run_command(command: list[str], description: str) -> None:
    """Run a pipeline step and stop if it fails."""

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
    print("\nStarting API data pipeline...")

    # Step 1: Extract
    run_command(
        [
            sys.executable,
            str(SRC_DIR / "extract.py"),
        ],
        "Step 1: Extracting data from API",
    )

    # Step 2: Transform
    run_command(
        [
            sys.executable,
            str(SRC_DIR / "transform.py"),
        ],
        "Step 2: Transforming data",
    )

    # Step 3: Validate
    run_command(
        [
            sys.executable,
            str(SRC_DIR / "validate.py"),
        ],
        "Step 3: Validating data",
    )

    # Step 4: Create PostgreSQL schema
    run_command(
        [
            "psql",
            "-U",
            "postgres",
            "-d",
            "api_pipeline_db",
            "-f",
            str(SCHEMA_FILE),
        ],
        "Step 4: Creating PostgreSQL schema",
    )

    # Step 5: Load
    run_command(
        [
            sys.executable,
            str(SRC_DIR / "load.py"),
        ],
        "Step 5: Loading data into PostgreSQL",
    )

    print("\n" + "=" * 60)
    print("API data pipeline completed successfully.")
    print("=" * 60)


if __name__ == "__main__":
    main()