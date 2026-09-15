from pathlib import Path

import pandas as pd


BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_PATH = (
    BASE_DIR
    / "data"
    / "processed"
    / "service_desk_tickets_clean.csv"
)


def check(name, condition):
    status = "PASS" if condition else "FAIL"
    symbol = "✓" if condition else "✗"
    print(f"{symbol} {name}: {status}")
    return condition


def main():
    print("=" * 60)
    print("SERVICE DESK DATA VALIDATION")
    print("=" * 60)

    df = pd.read_csv(INPUT_PATH)

    print(f"Rows: {len(df):,}")
    print(f"Columns: {len(df.columns)}")
    print()

    results = []

    # ---------------------------------------------------------
    # 1. Row count
    # ---------------------------------------------------------
    results.append(
        check(
            "Expected row count",
            len(df) == 1500,
        )
    )

    # ---------------------------------------------------------
    # 2. Required columns
    # ---------------------------------------------------------
    required_columns = [
        "ticket_id",
        "created_at",
        "category",
        "issue_type",
        "priority",
        "status",
        "assigned_agent",
        "response_time_minutes",
    ]

    results.append(
        check(
            "Required columns present",
            all(column in df.columns for column in required_columns),
        )
    )

    # ---------------------------------------------------------
    # 3. Duplicate ticket IDs
    # ---------------------------------------------------------
    duplicate_ids = df["ticket_id"].duplicated().sum()

    results.append(
        check(
            "No duplicate ticket IDs",
            duplicate_ids == 0,
        )
    )

    # ---------------------------------------------------------
    # 4. Missing ticket IDs
    # ---------------------------------------------------------
    missing_ticket_ids = df["ticket_id"].isna().sum()

    results.append(
        check(
            "No missing ticket IDs",
            missing_ticket_ids == 0,
        )
    )

    # ---------------------------------------------------------
    # 5. Missing categories
    # ---------------------------------------------------------
    missing_categories = df["category"].isna().sum()

    results.append(
        check(
            "No missing categories",
            missing_categories == 0,
        )
    )

    # ---------------------------------------------------------
    # 6. Missing assigned agents
    # ---------------------------------------------------------
    missing_agents = df["assigned_agent"].isna().sum()

    results.append(
        check(
            "No missing assigned agents",
            missing_agents == 0,
        )
    )

    # ---------------------------------------------------------
    # 7. Valid response times
    # ---------------------------------------------------------
    invalid_response_times = (
        df["response_time_minutes"] < 0
    ).sum()

    results.append(
        check(
            "Response times are non-negative",
            invalid_response_times == 0,
        )
    )

    # ---------------------------------------------------------
    # 8. Valid resolution times
    # ---------------------------------------------------------
    invalid_resolution_times = (
        df["resolution_time_hours"].notna()
        & (df["resolution_time_hours"] < 0)
    ).sum()

    results.append(
        check(
            "Resolution times are non-negative",
            invalid_resolution_times == 0,
        )
    )

    # ---------------------------------------------------------
    # 9. Valid satisfaction scores
    # ---------------------------------------------------------
    invalid_satisfaction = (
        df["satisfaction_score"].notna()
        & ~df["satisfaction_score"].between(1, 5)
    ).sum()

    results.append(
        check(
            "Satisfaction scores are between 1 and 5",
            invalid_satisfaction == 0,
        )
    )

    # ---------------------------------------------------------
    # 10. Valid priorities
    # ---------------------------------------------------------
    valid_priorities = {
        "Low",
        "Medium",
        "High",
        "Critical",
    }

    invalid_priorities = (
        ~df["priority"].isin(valid_priorities)
    ).sum()

    results.append(
        check(
            "Priority values are valid",
            invalid_priorities == 0,
        )
    )

    # ---------------------------------------------------------
    # 11. Valid ticket statuses
    # ---------------------------------------------------------
    valid_statuses = {
        "Resolved",
        "Closed",
        "In Progress",
        "Open",
    }

    invalid_statuses = (
        ~df["status"].isin(valid_statuses)
    ).sum()

    results.append(
        check(
            "Status values are valid",
            invalid_statuses == 0,
        )
    )

    # ---------------------------------------------------------
    # 12. Resolved tickets have resolution times
    # ---------------------------------------------------------
    resolved_without_time = (
        df["is_resolved"]
        & df["resolution_time_hours"].isna()
    ).sum()

    results.append(
        check(
            "Resolved tickets have resolution times",
            resolved_without_time == 0,
        )
    )

    # ---------------------------------------------------------
    # 13. SLA flag is logically correct
    # ---------------------------------------------------------
    expected_sla = (
        df["resolution_time_hours"].notna()
        & (
            df["resolution_time_hours"]
            <= df["resolution_sla_hours"]
        )
    )

    results.append(
        check(
            "SLA flag matches resolution time",
            df["within_resolution_sla"].equals(expected_sla),
        )
    )

    # ---------------------------------------------------------
    # Final result
    # ---------------------------------------------------------
    passed = sum(results)
    failed = len(results) - passed

    print()
    print("=" * 60)
    print("VALIDATION SUMMARY")
    print("=" * 60)
    print(f"Checks passed: {passed}")
    print(f"Checks failed: {failed}")

    if failed == 0:
        print()
        print("✓ ALL VALIDATION CHECKS PASSED")
    else:
        print()
        print("✗ VALIDATION FAILED")
        raise SystemExit(1)


if __name__ == "__main__":
    main()