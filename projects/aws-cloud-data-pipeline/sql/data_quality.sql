-- AWS Cloud Data Pipeline
-- SQL data quality checks for the PostgreSQL dataset

-- 1. Total rows
SELECT
    COUNT(*) AS total_rows
FROM cloud_orders;

-- 2. Duplicate order IDs
SELECT
    COUNT(*) - COUNT(DISTINCT order_id) AS duplicate_order_ids
FROM cloud_orders;

-- 3. Rows with missing required values
SELECT
    COUNT(*) AS rows_with_missing_values
FROM cloud_orders
WHERE order_id IS NULL
   OR order_date IS NULL
   OR customer_id IS NULL
   OR product_id IS NULL
   OR product_category IS NULL
   OR quantity IS NULL
   OR unit_price IS NULL
   OR discount IS NULL
   OR payment_method IS NULL
   OR order_status IS NULL
   OR gross_amount IS NULL
   OR discount_amount IS NULL
   OR net_amount IS NULL
   OR order_month IS NULL
   OR order_day IS NULL;

-- 4. Invalid quantities
SELECT
    COUNT(*) AS invalid_quantities
FROM cloud_orders
WHERE quantity <= 0;

-- 5. Invalid unit prices
SELECT
    COUNT(*) AS invalid_unit_prices
FROM cloud_orders
WHERE unit_price <= 0;

-- 6. Invalid discounts
SELECT
    COUNT(*) AS invalid_discounts
FROM cloud_orders
WHERE discount < 0
   OR discount > 1;

-- 7. Invalid order statuses
SELECT
    COUNT(*) AS invalid_statuses
FROM cloud_orders
WHERE order_status NOT IN ('Completed', 'Cancelled', 'Pending');

-- 8. Incorrect gross amounts
SELECT
    COUNT(*) AS incorrect_gross_amounts
FROM cloud_orders
WHERE ABS(gross_amount - (quantity * unit_price)) > 0.01;

-- 9. Incorrect discount amounts
SELECT
    COUNT(*) AS incorrect_discount_amounts
FROM cloud_orders
WHERE ABS(
    discount_amount - (gross_amount * discount)
) > 0.01;

-- 10. Incorrect net amounts
SELECT
    COUNT(*) AS incorrect_net_amounts
FROM cloud_orders
WHERE ABS(
    net_amount - (gross_amount - discount_amount)
) > 0.01;

-- 11. Invalid order dates
SELECT
    COUNT(*) AS invalid_order_dates
FROM cloud_orders
WHERE order_date IS NULL;
