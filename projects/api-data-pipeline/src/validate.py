from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]

PROCESSED_DATA_PATH = (
    PROJECT_ROOT / "data" / "processed" / "posts_clean.csv"
)


def validate_data(df: pd.DataFrame) -> None:
    """Run data-quality checks on the processed dataset."""

    print("\nRunning data-quality checks...")
    print("=" * 60)

    checks_passed = True

    # 1. Row count
    if len(df) > 0:
        print("PASS: Dataset contains records.")
    else:
        print("FAIL: Dataset is empty.")
        checks_passed = False

    # 2. Required columns
    required_columns = {
        "id",
        "user_id",
        "title",
        "body",
        "title_length",
        "body_length",
    }

    missing_columns = required_columns - set(df.columns)

    if not missing_columns:
        print("PASS: All required columns are present.")
    else:
        print(f"FAIL: Missing columns: {missing_columns}")
        checks_passed = False

    # 3. Duplicate IDs
    duplicate_ids = df["id"].duplicated().sum()

    if duplicate_ids == 0:
        print("PASS: No duplicate post IDs.")
    else:
        print(f"FAIL: Found {duplicate_ids} duplicate post IDs.")
        checks_passed = False

    # 4. Missing values
    missing_values = df[
        ["id", "user_id", "title", "body"]
    ].isnull().sum().sum()

    if missing_values == 0:
        print("PASS: No missing required values.")
    else:
        print(
            f"FAIL: Found {missing_values} missing required values."
        )
        checks_passed = False

    # 5. Valid IDs
    invalid_ids = (df["id"] <= 0).sum()

    if invalid_ids == 0:
        print("PASS: All post IDs are valid.")
    else:
        print(f"FAIL: Found {invalid_ids} invalid post IDs.")
        checks_passed = False

    # 6. Valid user IDs
    invalid_user_ids = (df["user_id"] <= 0).sum()

    if invalid_user_ids == 0:
        print("PASS: All user IDs are valid.")
    else:
        print(f"FAIL: Found {invalid_user_ids} invalid user IDs.")
        checks_passed = False

    # 7. Empty titles
    empty_titles = (df["title"].str.strip() == "").sum()

    if empty_titles == 0:
        print("PASS: No empty titles.")
    else:
        print(f"FAIL: Found {empty_titles} empty titles.")
        checks_passed = False

    # 8. Empty bodies
    empty_bodies = (df["body"].str.strip() == "").sum()

    if empty_bodies == 0:
        print("PASS: No empty post bodies.")
    else:
        print(f"FAIL: Found {empty_bodies} empty post bodies.")
        checks_passed = False

    # 9. Validate title lengths
    incorrect_title_lengths = (
        df["title_length"] != df["title"].str.len()
    ).sum()

    if incorrect_title_lengths == 0:
        print("PASS: Title length calculations are correct.")
    else:
        print(
            f"FAIL: Found {incorrect_title_lengths} "
            "incorrect title lengths."
        )
        checks_passed = False

    # 10. Validate body lengths
    incorrect_body_lengths = (
        df["body_length"] != df["body"].str.len()
    ).sum()

    if incorrect_body_lengths == 0:
        print("PASS: Body length calculations are correct.")
    else:
        print(
            f"FAIL: Found {incorrect_body_lengths} "
            "incorrect body lengths."
        )
        checks_passed = False

    print("=" * 60)

    if not checks_passed:
        raise RuntimeError(
            "Data validation failed. Fix the issues before loading the data."
        )

    print("All data-quality checks passed.")


def main() -> None:
    print("Loading processed data...")

    df = pd.read_csv(PROCESSED_DATA_PATH)

    print(f"Records loaded for validation: {len(df)}")

    validate_data(df)


if __name__ == "__main__":
    main()