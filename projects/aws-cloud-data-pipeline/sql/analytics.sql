-- AWS Cloud Data Pipeline
-- SQL analytics for the processed e-commerce dataset

-- 1. Overall pipeline dataset metrics
SELECT
    COUNT(*) AS total_orders,
    COUNT(DISTINCT customer_id) AS unique_customers,
    SUM(quantity) AS total_items,
    ROUND(SUM(net_amount), 2) AS total_revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM cloud_orders;


-- 2. Orders and revenue by status
SELECT
    order_status,
    COUNT(*) AS order_count,
    ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (),
        2
    ) AS order_percentage,
    ROUND(SUM(net_amount), 2) AS total_revenue
FROM cloud_orders
GROUP BY order_status
ORDER BY order_count DESC;


-- 3. Monthly order performance
SELECT
    order_month,
    COUNT(*) AS order_count,
    SUM(quantity) AS total_items,
    ROUND(SUM(net_amount), 2) AS total_revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM cloud_orders
GROUP BY order_month
ORDER BY order_month;


-- 4. Revenue by product category
SELECT
    product_category,
    COUNT(*) AS order_count,
    SUM(quantity) AS total_items,
    ROUND(SUM(net_amount), 2) AS total_revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM cloud_orders
WHERE order_status = 'Completed'
GROUP BY product_category
ORDER BY total_revenue DESC;


-- 5. Revenue by payment method
SELECT
    payment_method,
    COUNT(*) AS completed_orders,
    ROUND(SUM(net_amount), 2) AS total_revenue,
    ROUND(AVG(net_amount), 2) AS average_order_value
FROM cloud_orders
WHERE order_status = 'Completed'
GROUP BY payment_method
ORDER BY total_revenue DESC;


-- 6. Top customers by completed revenue
SELECT
    customer_id,
    COUNT(*) AS completed_orders,
    SUM(quantity) AS total_items,
    ROUND(SUM(net_amount), 2) AS total_revenue
FROM cloud_orders
WHERE order_status = 'Completed'
GROUP BY customer_id
ORDER BY total_revenue DESC
LIMIT 10;


-- 7. Top products by completed revenue
SELECT
    product_id,
    product_category,
    COUNT(*) AS completed_orders,
    SUM(quantity) AS total_items,
    ROUND(SUM(net_amount), 2) AS total_revenue
FROM cloud_orders
WHERE order_status = 'Completed'
GROUP BY product_id, product_category
ORDER BY total_revenue DESC
LIMIT 10;


-- 8. Discount analysis
SELECT
    ROUND(AVG(discount) * 100, 2) AS average_discount_percentage,
    ROUND(SUM(discount_amount), 2) AS total_discount_amount,
    ROUND(SUM(gross_amount), 2) AS gross_revenue,
    ROUND(SUM(net_amount), 2) AS net_revenue
FROM cloud_orders
WHERE order_status = 'Completed';


-- 9. Daily order volume
SELECT
    order_day,
    COUNT(*) AS order_count,
    ROUND(SUM(net_amount), 2) AS total_revenue
FROM cloud_orders
GROUP BY order_day
ORDER BY order_count DESC;