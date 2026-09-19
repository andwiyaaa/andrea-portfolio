# Service Desk Analytics

A hands-on service desk analytics project that uses Python, PostgreSQL, and SQL to evaluate ticket workload, resolution performance, SLA compliance, support quality, and operational patterns.

The project follows:

**CSV → Python ETL & Validation → PostgreSQL → SQL Analytics → Dashboard-ready Outputs**

> **Project type:** Hands-on learning / portfolio project  
> **Dataset:** Synthetic service desk ticket data  
> **Data period:** January–June 2026  
> **Note:** This project does not contain real NBI, customer, employee, or confidential data.

## Overview

This project transforms ticket-level service desk records into structured operational insights.

The analysis focuses on:

- Ticket volume and resolution performance
- Response and resolution times
- 24-hour resolution SLA compliance
- Priority-level workload
- Category workload
- Monthly performance
- Agent workload
- Department workload
- Issue types
- Support channels
- Customer satisfaction
- Reopened tickets
- Open and in-progress backlog
- Resolution time vs satisfaction

The project demonstrates how raw support data can be cleaned, validated, loaded into a relational database, analyzed with SQL, and exported into dashboard-ready datasets.

## Dataset

The project generates **1,500 synthetic service desk tickets** using a reproducible random seed.

The dataset includes:

- 5 ticket categories
  - Hardware
  - Software
  - Network
  - Access
  - Security
- 4 priority levels
  - Low
  - Medium
  - High
  - Critical
- 4 support channels
  - Email
  - Portal
  - Phone
  - Chat
- 7 departments
- 5 locations
- 8 support agents
- Ticket statuses
  - Resolved
  - Closed
  - In Progress
  - Open
- Response time
- Resolution time
- Satisfaction score
- Reopened-ticket indicator

The raw dataset intentionally contains a small number of data-quality issues so the ETL and validation stages can demonstrate how those problems are handled.

## Project Workflow

```text
Raw CSV
   │
   ▼
Python Transformation
   │
   ├── Standardize columns and text
   ├── Convert timestamps
   ├── Handle missing values
   ├── Remove duplicate tickets
   ├── Clean invalid response times
   ├── Validate resolution times
   ├── Validate satisfaction scores
   └── Create analytics fields
   │
   ▼
Data Validation
   │
   ├── Row-count checks
   ├── Required-column checks
   ├── Duplicate-ID checks
   ├── Missing-value checks
   ├── Range validation
   ├── Status and priority validation
   ├── Resolution-time checks
   └── SLA consistency checks
   │
   ▼
PostgreSQL
   │
   ▼
SQL Analytics
   │
   ├── Overall performance
   ├── Category analysis
   ├── Priority analysis
   ├── Monthly performance
   ├── Agent workload
   ├── Department workload
   ├── Issue analysis
   ├── Channel performance
   ├── Resolution vs satisfaction
   └── Reopened tickets
   │
   ▼
Dashboard-ready CSV Outputs
