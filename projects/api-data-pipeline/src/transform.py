import json
from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]

RAW_DATA_PATH = PROJECT_ROOT / "data" / "raw" / "posts.json"
PROCESSED_DATA_PATH = (
    PROJECT_ROOT / "data" / "processed" / "posts_clean.csv"
)


def load_raw_data() -> pd.DataFrame:
    """Load raw API JSON into a DataFrame."""
    with RAW_DATA_PATH.open("r", encoding="utf-8") as file:
        data = json.load(file)

    return pd.DataFrame(data)


def transform_data(df: pd.DataFrame) -> pd.DataFrame:
    """Clean and standardize API data."""

    # Standardize column names
    df.columns = [
        column.strip().lower().replace(" ", "_")
        for column in df.columns
    ]

    # Rename API field to a consistent snake_case name
    df = df.rename(columns={"userid": "user_id"})

    # Remove duplicate records
    df = df.drop_duplicates()

    # Remove rows with missing required fields
    df = df.dropna(subset=["id", "user_id", "title"])

    # Convert ID fields to integers
    df["id"] = df["id"].astype(int)
    df["user_id"] = df["user_id"].astype(int)

    # Clean text fields
    df["title"] = df["title"].str.strip()
    df["body"] = df["body"].str.strip()

    # Add analytical fields
    df["title_length"] = df["title"].str.len()
    df["body_length"] = df["body"].str.len()

    return df


def save_processed_data(df: pd.DataFrame) -> None:
    """Save transformed data as CSV."""
    PROCESSED_DATA_PATH.parent.mkdir(parents=True, exist_ok=True)

    df.to_csv(PROCESSED_DATA_PATH, index=False)

    print(f"Processed data saved to: {PROCESSED_DATA_PATH}")
    print(f"Records after transformation: {len(df)}")
    print(f"Columns: {', '.join(df.columns)}")


def main() -> None:
    print("Starting data transformation...")

    df = load_raw_data()

    print(f"Raw records loaded: {len(df)}")

    transformed_df = transform_data(df)

    save_processed_data(transformed_df)

    print("Data transformation completed successfully.")


if __name__ == "__main__":
    main()