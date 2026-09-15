import os
from pathlib import Path

import boto3
from dotenv import load_dotenv


PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_DATA_PATH = PROJECT_ROOT / "data" / "raw" / "cloud_orders.csv"

load_dotenv()

AWS_REGION = os.getenv("AWS_REGION")
S3_BUCKET = os.getenv("S3_BUCKET")
S3_RAW_KEY = "raw/cloud_orders.csv"


def download_from_s3() -> None:
    print("\nDownloading raw dataset from S3...")

    if not S3_BUCKET:
        raise RuntimeError("S3_BUCKET is not configured.")

    s3 = boto3.client(
        "s3",
        region_name=AWS_REGION,
    )

    RAW_DATA_PATH.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    s3.download_file(
        S3_BUCKET,
        S3_RAW_KEY,
        str(RAW_DATA_PATH),
    )

    print(
        f"Downloaded: s3://{S3_BUCKET}/{S3_RAW_KEY}"
    )


def inspect_data() -> None:
    import pandas as pd

    df = pd.read_csv(RAW_DATA_PATH)

    print(f"Records extracted: {len(df)}")
    print(f"Columns: {len(df.columns)}")
    print("\nFirst 5 rows:")
    print(df.head())

    print("\nData types:")
    print(df.dtypes)


def main() -> None:
    print("Starting S3 extraction...")
    download_from_s3()
    inspect_data()
    print("\nS3 extraction completed successfully.")


if __name__ == "__main__":
    main()