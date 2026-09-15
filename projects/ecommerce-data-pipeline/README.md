# E-commerce Data Pipeline

A reproducible end-to-end data pipeline that generates, extracts, transforms, validates, and loads e-commerce order data into PostgreSQL for analytics.

## Overview

This project demonstrates a complete data engineering workflow using Python, Pandas, PostgreSQL, and SQL.

The pipeline starts with raw e-commerce order data, applies cleaning and transformation rules, validates data quality, creates the PostgreSQL schema, and loads the final dataset for analytical querying.

## Pipeline Architecture

```text
Raw E-commerce Data
        │
        ▼
Generate Data
generate_data.py
        │
        ▼
Extract
extract.py
        │
        ▼
Transform
transform.py
        │
        ├── Standardize columns
        ├── Remove duplicates
        ├── Clean text values
        ├── Convert data types
        ├── Handle missing customer IDs
        └── Calculate order amounts
        │
        ▼
Validate
validate.py
        │
        ▼
PostgreSQL
schema.sql + load.py
        │
        ▼
SQL Analytics
analytics.sql