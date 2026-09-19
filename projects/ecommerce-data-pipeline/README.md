# E-commerce Data Pipeline

A reproducible end-to-end data pipeline that generates, extracts, transforms, validates, and loads e-commerce order data into PostgreSQL for analytics.

## Overview

This project demonstrates a complete data engineering workflow using Python, Pandas, PostgreSQL, and SQL.

The pipeline takes raw e-commerce order data through a series of processing and quality checks before loading the cleaned dataset into PostgreSQL for analytical querying.

## Pipeline

```text
Generate Data
     │
     ▼
Extract
     │
     ▼
Transform
     │
     ├── Standardize columns
     ├── Remove duplicates
     ├── Clean text values
     ├── Convert data types
     ├── Handle missing customer IDs
     └── Calculate order metrics
     │
     ▼
Validate
     │
     ▼
Create PostgreSQL Schema
     │
     ▼
Load Data
     │
     ▼
SQL Analytics