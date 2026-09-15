from pathlib import Path

import pandas as pd


BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_PATH = (
    BASE_DIR
    / "data"
    / "processed"
    / "service_desk_tickets_clean.csv"
)

OUTPUT_DIR = BASE_DIR / "outputs"


def main():
    print("=" * 70)
    print("SERVICE DESK ANALYTICS")
    print("=" * 70)

    df = pd.read_csv(INPUT_PATH)

    df["created_at"] = pd.to_datetime(df["created_at"])
    df["resolved_at"] = pd.to_datetime(df["resolved_at"])

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # =========================================================
    # 1. Overall ticket performance
    # =========================================================

    total_tickets = len(df)

    resolved_tickets = df["is_resolved"].sum()

    open_tickets = df["status"].isin(
        ["Open", "In Progress"]
    ).sum()

    resolution_rate = (
        resolved_tickets / total_tickets * 100
    )

    avg_response = df["response_time_minutes"].mean()

    resolved_df = df[df["is_resolved"]].copy()

    avg_resolution = (
        resolved_df["resolution_time_hours"].mean()
    )

    avg_satisfaction = (
        resolved_df["satisfaction_score"].mean()
    )

    sla_rate = (
        resolved_df["within_resolution_sla"].mean() * 100
    )

    reopened_rate = (
        df["reopened"].mean() * 100
    )

    print()
    print("OVERALL PERFORMANCE")
    print("-" * 70)
    print(f"Total tickets: {total_tickets:,}")
    print(f"Resolved / closed: {resolved_tickets:,}")
    print(f"Open / in progress: {open_tickets:,}")
    print(f"Resolution rate: {resolution_rate:.2f}%")
    print(f"Average response time: {avg_response:.2f} minutes")
    print(f"Average resolution time: {avg_resolution:.2f} hours")
    print(f"Average satisfaction: {avg_satisfaction:.2f} / 5")
    print(f"Within 24-hour SLA: {sla_rate:.2f}%")
    print(f"Reopened ticket rate: {reopened_rate:.2f}%")

    overall = pd.DataFrame(
        [
            {
                "total_tickets": total_tickets,
                "resolved_tickets": resolved_tickets,
                "open_or_in_progress": open_tickets,
                "resolution_rate_pct": round(resolution_rate, 2),
                "avg_response_minutes": round(avg_response, 2),
                "avg_resolution_hours": round(avg_resolution, 2),
                "avg_satisfaction": round(avg_satisfaction, 2),
                "within_24h_sla_pct": round(sla_rate, 2),
                "reopened_rate_pct": round(reopened_rate, 2),
            }
        ]
    )

    overall.to_csv(
        OUTPUT_DIR / "overall_performance.csv",
        index=False,
    )

    # =========================================================
    # 2. Tickets by category
    # =========================================================

    category_analysis = (
        df.groupby("category")
        .agg(
            tickets=("ticket_id", "count"),
            avg_response_minutes=(
                "response_time_minutes",
                "mean",
            ),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
            reopened_tickets=("reopened", "sum"),
        )
        .reset_index()
    )

    category_analysis["reopened_rate_pct"] = (
        category_analysis["reopened_tickets"]
        / category_analysis["tickets"]
        * 100
    )

    category_analysis = category_analysis.sort_values(
        "tickets",
        ascending=False,
    )

    print()
    print("TICKETS BY CATEGORY")
    print("-" * 70)
    print(
        category_analysis[
            [
                "category",
                "tickets",
                "avg_response_minutes",
                "avg_resolution_hours",
                "avg_satisfaction",
                "reopened_rate_pct",
            ]
        ].to_string(index=False)
    )

    category_analysis.to_csv(
        OUTPUT_DIR / "category_analysis.csv",
        index=False,
    )

    # =========================================================
    # 3. Tickets by priority
    # =========================================================

    priority_order = {
        "Critical": 1,
        "High": 2,
        "Medium": 3,
        "Low": 4,
    }

    priority_analysis = (
        df.groupby("priority")
        .agg(
            tickets=("ticket_id", "count"),
            avg_response_minutes=(
                "response_time_minutes",
                "mean",
            ),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            sla_rate_pct=(
                "within_resolution_sla",
                lambda x: x.mean() * 100,
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
        )
        .reset_index()
    )

    priority_analysis["sort_order"] = (
        priority_analysis["priority"]
        .map(priority_order)
    )

    priority_analysis = priority_analysis.sort_values(
        "sort_order"
    ).drop(columns="sort_order")

    print()
    print("TICKETS BY PRIORITY")
    print("-" * 70)
    print(priority_analysis.to_string(index=False))

    priority_analysis.to_csv(
        OUTPUT_DIR / "priority_analysis.csv",
        index=False,
    )

    # =========================================================
    # 4. Tickets by month
    # =========================================================

    monthly_analysis = (
        df.groupby("created_month")
        .agg(
            tickets=("ticket_id", "count"),
            resolved_tickets=("is_resolved", "sum"),
            avg_response_minutes=(
                "response_time_minutes",
                "mean",
            ),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
        )
        .reset_index()
    )

    monthly_analysis["resolution_rate_pct"] = (
        monthly_analysis["resolved_tickets"]
        / monthly_analysis["tickets"]
        * 100
    )

    print()
    print("MONTHLY PERFORMANCE")
    print("-" * 70)
    print(monthly_analysis.to_string(index=False))

    monthly_analysis.to_csv(
        OUTPUT_DIR / "monthly_analysis.csv",
        index=False,
    )

    # =========================================================
    # 5. Agent workload
    # =========================================================

    agent_analysis = (
        df.groupby("assigned_agent")
        .agg(
            tickets=("ticket_id", "count"),
            resolved_tickets=("is_resolved", "sum"),
            avg_response_minutes=(
                "response_time_minutes",
                "mean",
            ),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
            reopened_tickets=("reopened", "sum"),
        )
        .reset_index()
    )

    agent_analysis["resolution_rate_pct"] = (
        agent_analysis["resolved_tickets"]
        / agent_analysis["tickets"]
        * 100
    )

    agent_analysis["reopened_rate_pct"] = (
        agent_analysis["reopened_tickets"]
        / agent_analysis["tickets"]
        * 100
    )

    agent_analysis = agent_analysis.sort_values(
        "tickets",
        ascending=False,
    )

    print()
    print("AGENT WORKLOAD")
    print("-" * 70)
    print(agent_analysis.to_string(index=False))

    agent_analysis.to_csv(
        OUTPUT_DIR / "agent_analysis.csv",
        index=False,
    )

    # =========================================================
    # 6. Department workload
    # =========================================================

    department_analysis = (
        df.groupby("department")
        .agg(
            tickets=("ticket_id", "count"),
            avg_response_minutes=(
                "response_time_minutes",
                "mean",
            ),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
        )
        .reset_index()
        .sort_values("tickets", ascending=False)
    )

    print()
    print("DEPARTMENT WORKLOAD")
    print("-" * 70)
    print(department_analysis.to_string(index=False))

    department_analysis.to_csv(
        OUTPUT_DIR / "department_analysis.csv",
        index=False,
    )

    # =========================================================
    # 7. Issue type analysis
    # =========================================================

    issue_analysis = (
        df.groupby(["category", "issue_type"])
        .agg(
            tickets=("ticket_id", "count"),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
        )
        .reset_index()
        .sort_values("tickets", ascending=False)
    )

    print()
    print("TOP ISSUE TYPES")
    print("-" * 70)
    print(issue_analysis.head(10).to_string(index=False))

    issue_analysis.to_csv(
        OUTPUT_DIR / "issue_analysis.csv",
        index=False,
    )

    # =========================================================
    # 8. Channel performance
    # =========================================================

    channel_analysis = (
        df.groupby("channel")
        .agg(
            tickets=("ticket_id", "count"),
            avg_response_minutes=(
                "response_time_minutes",
                "mean",
            ),
            avg_resolution_hours=(
                "resolution_time_hours",
                "mean",
            ),
            avg_satisfaction=(
                "satisfaction_score",
                "mean",
            ),
        )
        .reset_index()
        .sort_values("tickets", ascending=False)
    )

    print()
    print("CHANNEL PERFORMANCE")
    print("-" * 70)
    print(channel_analysis.to_string(index=False))

    channel_analysis.to_csv(
        OUTPUT_DIR / "channel_analysis.csv",
        index=False,
    )

    # =========================================================
    # 9. Resolution time vs satisfaction
    # =========================================================

    correlation_data = resolved_df[
        [
            "resolution_time_hours",
            "satisfaction_score",
        ]
    ].dropna()

    resolution_satisfaction_correlation = (
        correlation_data[
            "resolution_time_hours"
        ].corr(
            correlation_data[
                "satisfaction_score"
            ]
        )
    )

    print()
    print("RESOLUTION TIME VS SATISFACTION")
    print("-" * 70)
    print(
        "Correlation: "
        f"{resolution_satisfaction_correlation:.3f}"
    )

    correlation_result = pd.DataFrame(
        [
            {
                "metric": (
                    "resolution_time_vs_satisfaction"
                ),
                "correlation": round(
                    resolution_satisfaction_correlation,
                    3,
                ),
            }
        ]
    )

    correlation_result.to_csv(
        OUTPUT_DIR / "correlation_analysis.csv",
        index=False,
    )

    # =========================================================
    # 10. Summary
    # =========================================================

    print()
    print("=" * 70)
    print("ANALYSIS COMPLETED")
    print("=" * 70)

    print(f"Output directory: {OUTPUT_DIR}")
    print()
    print("Generated analysis files:")

    for file in sorted(OUTPUT_DIR.glob("*.csv")):
        print(f"  - {file.name}")


if __name__ == "__main__":
    main()