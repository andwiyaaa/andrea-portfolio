# Fit.ly Churn Analysis

An independent data analytics project analyzing customer churn at Fit.ly, a subscription-based fitness app.

> **Project type:** DataCamp Data Analyst Professional Practical Exam / independent learning project  
> **Focus:** Customer engagement, plan type, customer support, and churn  
> **Customers analyzed:** 400

## Overview

Fit.ly was experiencing increasing customer churn while the cost of acquiring new users was rising. The goal of this analysis was to identify patterns associated with churn and translate the findings into practical retention actions.

The analysis focused on three areas:

- Customer engagement
- Subscription plan
- Customer support activity

Data from three sources were combined at the customer level to examine these factors alongside churn.

## Data

The analysis used three datasets:

### Account information

- Customer ID
- Email
- State
- Plan
- Plan list price
- Churn status

### User activity

- Event timestamp
- User ID
- Event type

### Customer support

- Ticket timestamp
- User ID
- Channel
- Topic
- Resolution time
- Support state

## Data Preparation

Before analyzing churn, I validated and prepared the three datasets.

Key preparation steps included:

- Checking columns and data types
- Checking missing values and duplicates
- Validating dates and value ranges
- Standardizing inconsistent support-channel values
- Converting account customer IDs to numeric user IDs for joining
- Combining the three sources at the customer level
- Aggregating activity and support information per customer

The resulting dataset contained one record per customer.

## Key Findings

### 1. Customer engagement was low

Out of 400 customers:

- **154 customers (38.5%)** had zero recorded activity
- Average activity was **1.11 events per customer**
- Median activity was **1 event per customer**

A substantial portion of the customer base showed little or no recorded engagement.

### 2. Lower engagement was strongly associated with churn

Churn rates by activity level showed a clear pattern:

| Activity events | Churn rate |
|---|---:|
| 0 | 53.9% |
| 1 | 21.4% |
| 2 | 5.8% |
| 3 | 2.9% |

Customers with zero recorded activity had substantially higher churn than customers with recorded activity.

Higher-activity groups were smaller, so those rates should be interpreted cautiously.

### 3. Free customers had the highest churn rate

Customer distribution by plan:

| Plan | Customers |
|---|---:|
| Basic | 118 |
| Free | 105 |
| Enterprise | 92 |
| Pro | 85 |

Churn rates:

| Plan | Churn rate |
|---|---:|
| Free | 40.95% |
| Enterprise | 26.09% |
| Basic | 23.73% |
| Pro | 22.35% |

Free customers represented an important segment for further retention analysis.

### 4. Churned customers had longer support resolution times

Average support metrics:

| Customer status | Avg. resolution time | Avg. tickets |
|---|---:|---:|
| Not churned | 6.66 hrs | 2.23 |
| Churned | 18.69 hrs | 2.45 |

Customers who churned had an average support resolution time of **18.69 hours**, compared with **6.66 hours** for customers who did not churn.

That is approximately **2.8× longer**.

This is an observed association, not evidence that longer support resolution directly caused churn.

## Churn Metric

The dataset contained:

- **114 customers marked as churned**
- **400 total customers**
- **286 blank churn-status values**

Using the working assumption that blank churn statuses represented customers not marked as churned, the estimated baseline churn rate was:

**28.5%**

This should be treated as an estimate rather than a definitive business KPI because of the incomplete churn-status data.

## Recommendations

Based on the analysis, four practical actions were identified:

### 1. Improve customer activation

Help new customers reach their first meaningful activity through onboarding prompts, reminders, and guided actions.

### 2. Target inactive Free customers

Prioritize Free customers with zero or very low activity for targeted re-engagement.

### 3. Investigate support delays

Review long-resolution tickets to identify recurring causes of delays and opportunities to improve support workflows.

### 4. Improve churn monitoring

Track churn by:

- Activity level
- Subscription plan
- Time period

Improving the completeness of churn-status data would also make future reporting more reliable.

## Tools & Technologies

- Python
- DataLab
- Pandas
- Data validation
- Exploratory data analysis
- Data visualization

## Project Takeaway

The strongest observable pattern in the analysis was the relationship between customer engagement and churn.

Customers with zero recorded activity showed substantially higher churn, while Free customers and customers experiencing longer support resolution times represented additional areas for investigation.

The project demonstrates a complete data-analysis workflow: validating multiple datasets, preparing and joining customer-level data, identifying patterns, interpreting limitations, and translating findings into practical business recommendations.

## Project Materials

- Portfolio case study: [Fit.ly Churn Analysis](https://andrea-portfolio-andy-f738.vercel.app/work/fitly-churn)

## Note

This project was completed as an independent learning project for the DataCamp Data Analyst Professional Practical Exam. It is not client or production work.