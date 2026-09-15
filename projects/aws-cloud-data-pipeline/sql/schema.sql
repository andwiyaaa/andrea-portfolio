DROP TABLE IF EXISTS cloud_orders;

CREATE TABLE cloud_orders (
    order_id VARCHAR(20) PRIMARY KEY,
    order_date TIMESTAMP NOT NULL,
    customer_id VARCHAR(20) NOT NULL,
    product_id VARCHAR(20) NOT NULL,
    product_category VARCHAR(50) NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price NUMERIC(12, 2) NOT NULL,
    discount NUMERIC(5, 4) NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    order_status VARCHAR(30) NOT NULL,
    gross_amount NUMERIC(14, 2) NOT NULL,
    discount_amount NUMERIC(14, 2) NOT NULL,
    net_amount NUMERIC(14, 2) NOT NULL,
    order_month VARCHAR(7) NOT NULL,
    order_day VARCHAR(15) NOT NULL
);