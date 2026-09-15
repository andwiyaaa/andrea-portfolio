-- ============================================================
-- E-COMMERCE DATA PIPELINE
-- SQL ANALYTICS
-- ============================================================

-- 1. Overall business metrics
SELECT
    COUNT(*) AS total_orders,
    COUNT(DISTINCT customer_id) AS unique_customers,
    SUM(quantity) AS total_items_sold,
    ROUND(SUM(net_amount), 2) AS total_revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM orders;


-- 2. Orders by status
SELECT
    order_status,
    COUNT(*) AS order_count,
    ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (),
        2
    ) AS percentage_of_orders
FROM orders
GROUP BY order_status
ORDER BY order_count DESC;


-- 3. Monthly performance
SELECT
    DATE_TRUNC('month', order_date)::date AS month,
    COUNT(*) AS total_orders,
    SUM(quantity) AS items_sold,
    ROUND(SUM(net_amount), 2) AS revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;

-- ============================================================
-- PRODUCT & CUSTOMER ANALYSIS
-- ============================================================

-- 4. Revenue by product category
SELECT
    product_category,
    COUNT(*) AS total_orders,
    SUM(quantity) AS items_sold,
    ROUND(SUM(net_amount), 2) AS revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM orders
WHERE order_status = 'Completed'
GROUP BY product_category
ORDER BY revenue DESC;


-- 5. Top 10 products by revenue
SELECT
    product_id,
    COUNT(*) AS total_orders,
    SUM(quantity) AS units_sold,
    ROUND(SUM(net_amount), 2) AS revenue
FROM orders
WHERE order_status = 'Completed'
GROUP BY product_id
ORDER BY revenue DESC
LIMIT 10;


-- 6. Payment method performance
SELECT
    payment_method,
    COUNT(*) AS total_orders,
    ROUND(SUM(net_amount), 2) AS revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM orders
WHERE order_status = 'Completed'
GROUP BY payment_method
ORDER BY revenue DESC;


-- 7. Customer purchasing behavior
SELECT
    customer_id,
    COUNT(*) AS total_orders,
    SUM(quantity) AS items_purchased,
    ROUND(SUM(net_amount), 2) AS total_spent
FROM orders
WHERE order_status = 'Completed'
GROUP BY customer_id
ORDER BY total_spent DESC
LIMIT 10;


-- 8. Order status by product category
SELECT
    product_category,
    order_status,
    COUNT(*) AS order_count
FROM orders
GROUP BY product_category, order_status
ORDER BY product_category, order_count DESC;