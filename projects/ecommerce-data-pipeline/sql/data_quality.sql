-- ============================================================
-- E-COMMERCE DATA PIPELINE
-- DATA QUALITY CHECKS
-- ============================================================

-- 1. Total rows
SELECT
    COUNT(*) AS total_rows
FROM orders;


-- 2. Duplicate order IDs
SELECT
    order_id,
    COUNT(*) AS duplicate_count
FROM orders
GROUP BY order_id
HAVING COUNT(*) > 1;


-- 3. Missing required values
SELECT
    COUNT(*) AS rows_with_missing_values
FROM orders
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
   OR net_amount IS NULL;


-- 4. Invalid quantities
SELECT
    COUNT(*) AS invalid_quantity_rows
FROM orders
WHERE quantity <= 0;


-- 5. Invalid prices
SELECT
    COUNT(*) AS invalid_price_rows
FROM orders
WHERE unit_price <= 0;


-- 6. Invalid discount values
SELECT
    COUNT(*) AS invalid_discount_rows
FROM orders
WHERE discount < 0
   OR discount > 1;


-- 7. Invalid order statuses
SELECT
    order_status,
    COUNT(*) AS order_count
FROM orders
WHERE order_status NOT IN (
    'Completed',
    'Cancelled',
    'Pending'
)
GROUP BY order_status;


-- 8. Validate gross amount
SELECT
    COUNT(*) AS incorrect_gross_amounts
FROM orders
WHERE ABS(
    gross_amount - (quantity * unit_price)
) > 0.01;


-- 9. Validate discount amount
SELECT
    COUNT(*) AS incorrect_discount_amounts
FROM orders
WHERE ABS(
    discount_amount - (gross_amount * discount)
) > 0.01;


-- 10. Validate net amount
SELECT
    COUNT(*) AS incorrect_net_amounts
FROM orders
WHERE ABS(
    net_amount - (gross_amount - discount_amount)
) > 0.01;