# API → Data Pipeline

An end-to-end data pipeline that extracts data from a public REST API, transforms and validates the dataset with Python, loads it into PostgreSQL, and runs SQL-based analytics and data-quality checks.

## Overview

This project demonstrates a complete data engineering workflow:

**REST API → Raw JSON → Python Transformation → Data Validation → PostgreSQL → SQL Analytics**

The pipeline uses JSONPlaceholder, a public mock REST API, as the source. The project focuses on demonstrating practical data pipeline design, data cleaning, validation, database loading, and analytical SQL.

## Pipeline Architecture

```text
┌──────────────────────────────┐
│ JSONPlaceholder REST API     │
│ /posts                       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Extract                      │
│ Python                       │
│ urllib / JSON                │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Raw Data                     │
│ data/raw/posts.json          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Transform                    │
│ Python + Pandas              │
│ - Standardize columns        │
│ - Remove duplicates          │
│ - Handle missing values      │
│ - Calculate length metrics   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Data Validation              │
│ Python                       │
│ 10 automated checks          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ PostgreSQL                   │
│ api_pipeline_db              │
│ posts table                  │
└──────────────┬───────────────┘
               │
               ├─────────────────────┐
               ▼                     ▼
┌────────────────────────┐  ┌────────────────────────┐
│ SQL Analytics          │  │ PostgreSQL Data        │
│ analytics.sql          │  │ Quality Checks         │
│                        │  │ data_quality.sql       │
└────────────────────────┘  └────────────────────────┘