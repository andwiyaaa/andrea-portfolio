import os
from pathlib import Path

import boto3
from dotenv import load_dotenv


PROJECT_ROOT = Path(__file__).resolve().parents[1]

load_dotenv()

AWS_REGION = os.getenv("AWS_REGION")
S3_BUCKET = os.getenv("S3_BUCKET")

s3_client = boto3.client(
    "s3",
    region_name=AWS_REGION,
)


def download_raw_data(
    local_path: Path,
    s3_key: str,
) -> None:
    print("\nDownloading raw data from S3...")

    if not S3_BUCKET:
        raise RuntimeError("S3_BUCKET is not configured.")

    local_path.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    s3_client.download_file(
        S3_BUCKET,
        s3_key,
        str(local_path),
    )

    print(
        f"Downloaded: s3://{S3_BUCKET}/{s3_key}"
    )

    print(
        f"Saved locally to: {local_path}"
    )


def upload_processed_data(
    local_path: Path,
    s3_key: str,
) -> None:
    print("\nUploading processed data to S3...")

    if not S3_BUCKET:
        raise RuntimeError("S3_BUCKET is not configured.")

    if not local_path.exists():
        raise FileNotFoundError(
            f"Processed dataset not found: {local_path}"
        )

    s3_client.upload_file(
        str(local_path),
        S3_BUCKET,
        s3_key,
    )

    print(
        f"Uploaded: s3://{S3_BUCKET}/{s3_key}"
    )

    print(
        f"Source file: {local_path}"
    )


if __name__ == "__main__":
    print("S3 utility module loaded successfully.")