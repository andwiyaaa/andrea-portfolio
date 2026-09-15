from pathlib import Path

import pandas as pd


RAW_DATA_PATH = Path(
    "projects/ecommerce-data-pipeline/data/raw/ecommerce_orders.csv"
)


def extract_data(file_path: Path) -> pd.DataFrame:
    """Load raw e-commerce order data into a DataFrame."""

    if not file_path.exists():
        raise FileNotFoundError(
            f"Raw data file not found: {file_path}"
        )

    df = pd.read_csv(file_path)

    print("Data extraction completed.")
    print(f"Rows loaded: {len(df)}")
    print(f"Columns loaded: {len(df.columns)}")

    return df


if __name__ == "__main__":
    df = extract_data(RAW_DATA_PATH)

    print("\nFirst 5 rows:")
    print(df.head())

    print("\nColumn names:")
    print(df.columns.tolist())