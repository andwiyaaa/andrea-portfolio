# Service Desk Analytics

A hands-on service desk analytics project that uses Python, PostgreSQL, and SQL to evaluate ticket workload, resolution performance, SLA compliance, support quality, and operational patterns.

The project follows a simple analytics workflow:

**CSV → Python ETL & Validation → PostgreSQL → SQL Analytics → Dashboard-ready Outputs**

> **Project context:** This project uses synthetic service desk ticket data created specifically for portfolio and learning purposes. It does not contain real NBI, customer, employee, or confidential data.

---

## Overview

Service desk teams generate large amounts of ticket data, but raw ticket records are not enough to understand how effectively support operations are performing.

This project turns ticket-level records into structured operational insights by analyzing:

- Ticket volume and resolution performance
- Response and resolution times
- 24-hour SLA compliance
- Priority-level workload
- Category workload
- Monthly performance
- Agent workload
- Department workload
- Issue types
- Support channels
- Customer satisfaction
- Reopened tickets
- Active ticket backlog

The goal is to demonstrate how service desk data can be cleaned, validated, stored, queried, and transformed into useful operational metrics.

---

## Project Workflow

```text
Raw Ticket Data
      │
      ▼
Python Data Transformation
      │
      ├── Standardize columns and text
      ├── Clean timestamps
      ├── Handle missing values
      ├── Remove duplicate tickets
      ├── Fix invalid response times
      └── Create derived metrics
      │
      ▼
Data Validation
      │
      ├── Duplicate checks
      ├── Missing-value checks
      ├── Range validation
      ├── SLA validation
      └── Business-rule checks
      │
      ▼
PostgreSQL
      │
      ▼
SQL Analytics
      │
      ├── Overall performance
      ├── SLA performance
      ├── Category analysis
      ├── Priority analysis
      ├── Monthly performance
      ├── Channel analysis
      ├── Department analysis
      ├── Issue analysis
      ├── Agent performance
      ├── Resolution vs satisfaction
      ├── Reopened tickets
      └── Active backlog
      │
      ▼
Dashboard-ready CSV Outputs