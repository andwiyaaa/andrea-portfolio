# AWS Cloud Data Pipeline

An end-to-end cloud data pipeline that extracts e-commerce data from Amazon S3, processes and validates it with Python, loads it into PostgreSQL, and publishes the processed dataset back to S3.

## Project Overview

This project demonstrates a complete data engineering workflow using AWS, Python, and PostgreSQL.

The pipeline is designed to move data through a repeatable workflow:

**Amazon S3 → EC2 / Python ETL → PostgreSQL → Amazon S3**

The project focuses on:

- Cloud-based data storage
- Data extraction from S3
- Data transformation and cleaning
- Automated data quality validation
- Relational database loading
- SQL-based analytics
- Processed-data publishing to S3
- Repeatable pipeline execution

> **Project type:** Hands-on learning / portfolio project  
> **Dataset:** Synthetic e-commerce order data  
> **AWS environment:** AWS training/sandbox environment

## Architecture

```text
                    ┌──────────────────────┐
                    │     Amazon S3        │
                    │                      │
                    │ raw/cloud_orders.csv │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Amazon EC2        │
                    │                      │
                    │ Python ETL Pipeline   │
                    │                      │
                    │ Extract              │
                    │ Transform            │
                    │ Validate             │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     PostgreSQL       │
                    │                      │
                    │    cloud_orders      │
                    └──────────┬───────────┘
                               │
                               │ SQL Analytics
                               ▼
                    ┌──────────────────────┐
                    │     Analytics        │
                    │                      │
                    │ Revenue              │
                    │ Orders               │
                    │ Customers            │
                    │ Categories           │
                    │ Payments             │
                    └──────────────────────┘

                               │
                               │ Processed dataset
                               ▼

                    ┌──────────────────────┐
                    │     Amazon S3        │
                    │                      │
                    │ processed/           │
                    │ cloud_orders_clean   │
                    └──────────────────────┘
