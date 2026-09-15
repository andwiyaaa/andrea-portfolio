from pathlib import Path

import pandas as pd


BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_PATH = BASE_DIR / "data" / "raw" / "service_desk_tickets.csv"
OUTPUT_PATH = BASE_DIR / "data" / "processed" / "service_desk_tickets_clean.csv"


REQUIRED_COLUMNS = [
    "ticket_id",
    "created_at",
    "category",
    "issue_type",
    "priority",
    "status",
    "channel",
    "department",
    "location",
    "assigned_agent",
    "response_time_minutes",
]


def main():
    print("=" * 60)
    print("SERVICE DESK DATA TRANSFORMATION")
    print("=" * 60)

    df = pd.read_csv(INPUT_PATH)

    print(f"Raw rows: {len(df):,}")
    print(f"Raw columns: {len(df.columns)}")

    # ---------------------------------------------------------
    # 1. Standardize column names
    # ---------------------------------------------------------
    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(" ", "_")
    )

    # ---------------------------------------------------------
    # 2. Convert timestamps
    # ---------------------------------------------------------
    df["created_at"] = pd.to_datetime(
        df["created_at"],
        errors="coerce",
    )

    df["resolved_at"] = pd.to_datetime(
        df["resolved_at"],
        errors="coerce",
    )

    # ---------------------------------------------------------
    # 3. Standardize text fields
    # ---------------------------------------------------------
    text_columns = [
        "category",
        "issue_type",
        "priority",
        "status",
        "channel",
        "department",
        "location",
        "assigned_agent",
    ]

    for column in text_columns:
        df[column] = (
            df[column]
            .astype("string")
            .str.strip()
        )

    # ---------------------------------------------------------
    # 4. Handle missing categorical values
    # ---------------------------------------------------------
    df["category"] = df["category"].fillna("Unknown")
    df["assigned_agent"] = df["assigned_agent"].fillna("Unassigned")

    # ---------------------------------------------------------
    # 5. Remove duplicate tickets
    # ---------------------------------------------------------
    before_duplicates = len(df)

    df = df.drop_duplicates(
        subset=["ticket_id"],
        keep="first",
    )

    duplicates_removed = before_duplicates - len(df)

    # ---------------------------------------------------------
    # 6. Clean response time
    # ---------------------------------------------------------
    df["response_time_minutes"] = pd.to_numeric(
        df["response_time_minutes"],
        errors="coerce",
    )

    invalid_response_mask = (
        df["response_time_minutes"].isna()
        | (df["response_time_minutes"] < 0)
    )

    invalid_response_count = invalid_response_mask.sum()

    # Replace invalid response times with the median
    # response time of valid records.
    valid_response_median = df.loc[
        ~invalid_response_mask,
        "response_time_minutes",
    ].median()

    df.loc[
        invalid_response_mask,
        "response_time_minutes",
    ] = valid_response_median

    # ---------------------------------------------------------
    # 7. Clean resolution time
    # ---------------------------------------------------------
    df["resolution_time_hours"] = pd.to_numeric(
        df["resolution_time_hours"],
        errors="coerce",
    )

    # Resolution time should not be negative.
    invalid_resolution_mask = (
        df["resolution_time_hours"].notna()
        & (df["resolution_time_hours"] < 0)
    )

    df.loc[
        invalid_resolution_mask,
        "resolution_time_hours",
    ] = pd.NA

    # ---------------------------------------------------------
    # 8. Clean satisfaction score
    # ---------------------------------------------------------
    df["satisfaction_score"] = pd.to_numeric(
        df["satisfaction_score"],
        errors="coerce",
    )

    invalid_satisfaction_mask = (
        df["satisfaction_score"].notna()
        & ~df["satisfaction_score"].between(1, 5)
    )

    df.loc[
        invalid_satisfaction_mask,
        "satisfaction_score",
    ] = pd.NA

    # ---------------------------------------------------------
    # 9. Convert reopened flag
    # ---------------------------------------------------------
    df["reopened"] = df["reopened"].astype(bool)

    # ---------------------------------------------------------
    # 10. Add analytics-friendly fields
    # ---------------------------------------------------------
    df["created_date"] = df["created_at"].dt.date
    df["created_month"] = df["created_at"].dt.to_period("M").astype(str)
    df["created_day"] = df["created_at"].dt.day_name()

    df["is_resolved"] = df["status"].isin(
        ["Resolved", "Closed"]
    )

    df["resolution_sla_hours"] = 24

    df["within_resolution_sla"] = (
        df["resolution_time_hours"].notna()
        & (
            df["resolution_time_hours"]
            <= df["resolution_sla_hours"]
        )
    )

    # ---------------------------------------------------------
    # 11. Round numeric fields
    # ---------------------------------------------------------
    df["response_time_minutes"] = df[
        "response_time_minutes"
    ].round(2)

    df["resolution_time_hours"] = df[
        "resolution_time_hours"
    ].round(2)

    df["satisfaction_score"] = df[
        "satisfaction_score"
    ].round(0)

    # ---------------------------------------------------------
    # 12. Keep a consistent column order
    # ---------------------------------------------------------
    final_columns = [
        "ticket_id",
        "created_at",
        "created_date",
        "created_month",
        "created_day",
        "resolved_at",
        "category",
        "issue_type",
        "priority",
        "status",
        "channel",
        "department",
        "location",
        "assigned_agent",
        "response_time_minutes",
        "resolution_time_hours",
        "resolution_sla_hours",
        "within_resolution_sla",
        "satisfaction_score",
        "reopened",
        "is_resolved",
    ]

    df = df[final_columns]

    # ---------------------------------------------------------
    # 13. Save processed dataset
    # ---------------------------------------------------------
    OUTPUT_PATH.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    df.to_csv(
        OUTPUT_PATH,
        index=False,
    )

    # ---------------------------------------------------------
    # Summary
    # ---------------------------------------------------------
    print()
    print("Transformation summary:")
    print(f"  Duplicate tickets removed: {duplicates_removed}")
    print(f"  Invalid response times fixed: {invalid_response_count}")
    print(f"  Missing categories handled: Unknown")
    print(f"  Missing agents handled: Unassigned")
    print(f"  Final rows: {len(df):,}")
    print(f"  Final columns: {len(df.columns)}")
    print()
    print(f"Processed dataset:")
    print(f"  {OUTPUT_PATH}")
    print()
    print("Transformation completed successfully.")


if __name__ == "__main__":
    main()