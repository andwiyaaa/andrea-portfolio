# API → Data Pipeline

An end-to-end data pipeline that extracts data from a public REST API, transforms and validates the dataset with Python, loads it into PostgreSQL, and runs SQL-based analytics and data-quality checks.

## Overview

This project demonstrates a complete data engineering workflow:

**REST API → Raw JSON → Python Transformation → Data Validation → PostgreSQL → SQL Analytics**

The pipeline uses JSONPlaceholder, a public mock REST API, as its data source. The project focuses on API data ingestion, data cleaning, validation, database loading, and analytical SQL.

## Pipeline

```text
JSONPlaceholder REST API
          │
          ▼
       Extract
          │
          ▼
     Raw JSON
   posts.json
          │
          ▼
      Transform
          │
          ├── Standardize columns
          ├── Rename API fields
          ├── Remove duplicates
          ├── Handle missing values
          ├── Clean text fields
          └── Calculate length metrics
          │
          ▼
      Validate
          │
          ├── Required columns
          ├── Duplicate IDs
          ├── Missing values
          ├── Valid IDs
          ├── Empty text fields
          └── Calculated field checks
          │
          ▼
     PostgreSQL
      posts table
          │
          ├───────────────┐
          ▼               ▼
   SQL Analytics    Data Quality
                         Checks