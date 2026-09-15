import random
from datetime import datetime, timedelta
from pathlib import Path

import numpy as np
import pandas as pd


SEED = 42
random.seed(SEED)
np.random.seed(SEED)

OUTPUT_PATH = (
    Path(__file__).resolve().parents[1]
    / "data"
    / "raw"
    / "service_desk_tickets.csv"
)

NUM_TICKETS = 1500

CATEGORIES = {
    "Hardware": ["Laptop", "Desktop", "Printer", "Monitor"],
    "Software": ["Microsoft 365", "Browser", "Application", "Operating System"],
    "Network": ["Internet", "VPN", "Wi-Fi", "Network Access"],
    "Access": ["Password Reset", "Account Lockout", "Permission", "System Access"],
    "Security": ["Phishing", "Malware Alert", "Suspicious Login", "Security Policy"],
}

PRIORITIES = ["Low", "Medium", "High", "Critical"]
PRIORITY_WEIGHTS = [0.35, 0.45, 0.17, 0.03]

CHANNELS = ["Email", "Portal", "Phone", "Chat"]
CHANNEL_WEIGHTS = [0.30, 0.40, 0.15, 0.15]

DEPARTMENTS = [
    "Finance",
    "Human Resources",
    "Operations",
    "Sales",
    "Marketing",
    "IT",
    "Administration",
]

LOCATIONS = [
    "Manila",
    "Makati",
    "Cavite",
    "Laguna",
    "Quezon City",
]

AGENTS = [
    "Agent 01",
    "Agent 02",
    "Agent 03",
    "Agent 04",
    "Agent 05",
    "Agent 06",
    "Agent 07",
    "Agent 08",
]

STATUS_VALUES = ["Resolved", "Closed", "In Progress", "Open"]
STATUS_WEIGHTS = [0.52, 0.30, 0.10, 0.08]

SATISFACTION_VALUES = [1, 2, 3, 4, 5]


def random_datetime(start_date, end_date):
    delta = end_date - start_date
    random_days = random.randint(0, delta.days)
    random_minutes = random.randint(0, 23 * 60 + 59)

    return start_date + timedelta(
        days=random_days,
        minutes=random_minutes,
    )


def main():
    start_date = datetime(2026, 1, 1)
    end_date = datetime(2026, 6, 30)

    rows = []

    for number in range(1, NUM_TICKETS + 1):
        category = random.choices(
            list(CATEGORIES.keys()),
            weights=[0.23, 0.27, 0.22, 0.20, 0.08],
            k=1,
        )[0]

        issue_type = random.choice(CATEGORIES[category])

        priority = random.choices(
            PRIORITIES,
            weights=PRIORITY_WEIGHTS,
            k=1,
        )[0]

        channel = random.choices(
            CHANNELS,
            weights=CHANNEL_WEIGHTS,
            k=1,
        )[0]

        department = random.choice(DEPARTMENTS)
        location = random.choice(LOCATIONS)
        agent = random.choice(AGENTS)

        created_at = random_datetime(start_date, end_date)

        status = random.choices(
            STATUS_VALUES,
            weights=STATUS_WEIGHTS,
            k=1,
        )[0]

        # Higher-priority tickets generally receive faster response.
        response_minutes = {
            "Low": random.randint(30, 720),
            "Medium": random.randint(20, 480),
            "High": random.randint(10, 240),
            "Critical": random.randint(5, 90),
        }[priority]

        response_at = created_at + timedelta(minutes=response_minutes)

        if status in ["Resolved", "Closed"]:
            resolution_hours = {
                "Low": random.uniform(2, 48),
                "Medium": random.uniform(1, 30),
                "High": random.uniform(0.5, 18),
                "Critical": random.uniform(0.25, 8),
            }[priority]

            resolved_at = response_at + timedelta(hours=resolution_hours)

            if resolved_at > end_date:
                resolved_at = response_at + timedelta(
                    hours=random.uniform(1, 24)
                )

            resolution_time_hours = round(
                (resolved_at - created_at).total_seconds() / 3600,
                2,
            )
        else:
            resolved_at = pd.NaT
            resolution_time_hours = np.nan

        # Satisfaction is only recorded for resolved/closed tickets.
        if status in ["Resolved", "Closed"]:
            satisfaction = random.choices(
                SATISFACTION_VALUES,
                weights=[0.04, 0.08, 0.18, 0.38, 0.32],
                k=1,
            )[0]
        else:
            satisfaction = np.nan

        reopened = random.random() < (
            0.16 if category in ["Software", "Access"] else 0.09
        )

        ticket_id = f"INC-{number:05d}"

        rows.append(
            {
                "ticket_id": ticket_id,
                "created_at": created_at,
                "resolved_at": resolved_at,
                "category": category,
                "issue_type": issue_type,
                "priority": priority,
                "status": status,
                "channel": channel,
                "department": department,
                "location": location,
                "assigned_agent": agent,
                "response_time_minutes": response_minutes,
                "resolution_time_hours": resolution_time_hours,
                "satisfaction_score": satisfaction,
                "reopened": reopened,
            }
        )

    df = pd.DataFrame(rows)

    # Intentionally introduce a small number of data-quality issues.
    # These will be handled later by the transformation and validation steps.
    duplicate_rows = df.sample(8, random_state=SEED)
    df = pd.concat([df, duplicate_rows], ignore_index=True)

    missing_agent_indices = df.sample(
        10,
        random_state=SEED + 1,
    ).index
    df.loc[missing_agent_indices, "assigned_agent"] = None

    invalid_response_indices = df.sample(
        5,
        random_state=SEED + 2,
    ).index
    df.loc[invalid_response_indices, "response_time_minutes"] = -10

    missing_category_indices = df.sample(
        4,
        random_state=SEED + 3,
    ).index
    df.loc[missing_category_indices, "category"] = None

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    df.to_csv(OUTPUT_PATH, index=False)

    print("=" * 60)
    print("SERVICE DESK DATASET GENERATED")
    print("=" * 60)
    print(f"Output: {OUTPUT_PATH}")
    print(f"Rows generated: {len(df):,}")
    print(f"Columns: {len(df.columns)}")
    print()
    print("Columns:")
    for column in df.columns:
        print(f"  - {column}")
    print()
    print("Raw category distribution:")
    print(df["category"].value_counts(dropna=False))
    print()
    print("Raw status distribution:")
    print(df["status"].value_counts(dropna=False))


if __name__ == "__main__":
    main()