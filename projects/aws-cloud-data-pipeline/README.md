# AWS Cloud Data Pipeline

An end-to-end cloud data pipeline that moves e-commerce data through Amazon S3, Python ETL, PostgreSQL, and back to Amazon S3 for downstream use.

## Overview

This project demonstrates a repeatable data engineering workflow using AWS, Python, and PostgreSQL.

The pipeline follows:

**Amazon S3 → Python ETL → PostgreSQL → Amazon S3**

It covers:

- Cloud-based data ingestion
- S3 data extraction and publishing
- Python data transformation
- Automated data-quality validation
- PostgreSQL database loading
- SQL analytics
- Database-level quality checks
- Environment-based configuration
- End-to-end pipeline orchestration

> **Project type:** Hands-on learning / portfolio project  
> **Dataset:** Synthetic e-commerce order data  
> **AWS environment:** AWS training/sandbox environment

## Architecture

```text
                    Amazon S3
                       │
             raw/cloud_orders.csv
                       │
                       ▼
                  Python ETL
                       │
              ┌────────┴────────┐
              │                 │
           Extract          Transform
                                │
                              Validate
                                │
                                ▼
                         PostgreSQL
                         cloud_orders
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
               SQL Analytics        Data Quality Checks
                    │
                    ▼
              Processed Dataset
                    │
                    ▼
                Amazon S3
        processed/cloud_orders_clean.csv
