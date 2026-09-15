-- 1. Overall dataset metrics
SELECT
    COUNT(*) AS total_posts,
    COUNT(DISTINCT user_id) AS unique_users,
    ROUND(AVG(title_length), 2) AS avg_title_length,
    ROUND(AVG(body_length), 2) AS avg_body_length
FROM posts;


-- 2. Content volume by user
SELECT
    user_id,
    COUNT(*) AS post_count,
    ROUND(AVG(title_length), 2) AS avg_title_length,
    ROUND(AVG(body_length), 2) AS avg_body_length,
    SUM(body_length) AS total_body_characters
FROM posts
GROUP BY user_id
ORDER BY total_body_characters DESC;


-- 3. Users with the longest average post bodies
SELECT
    user_id,
    COUNT(*) AS post_count,
    ROUND(AVG(body_length), 2) AS avg_body_length,
    MAX(body_length) AS longest_post
FROM posts
GROUP BY user_id
ORDER BY avg_body_length DESC
LIMIT 5;


-- 4. Average content length by user
SELECT
    user_id,
    COUNT(*) AS post_count,
    ROUND(AVG(title_length), 2) AS avg_title_length,
    ROUND(AVG(body_length), 2) AS avg_body_length
FROM posts
GROUP BY user_id
ORDER BY avg_body_length DESC;


-- 5. Longest posts
SELECT
    id,
    user_id,
    title_length,
    body_length,
    title
FROM posts
ORDER BY body_length DESC
LIMIT 10;


-- 6. Shortest posts
SELECT
    id,
    user_id,
    title_length,
    body_length,
    title
FROM posts
ORDER BY body_length ASC
LIMIT 10;


-- 7. Posts by title-length bucket
SELECT
    CASE
        WHEN title_length < 20 THEN 'Short'
        WHEN title_length < 40 THEN 'Medium'
        ELSE 'Long'
    END AS title_length_bucket,
    COUNT(*) AS post_count
FROM posts
GROUP BY title_length_bucket
ORDER BY post_count DESC;


-- 8. Posts by body-length bucket
SELECT
    CASE
        WHEN body_length < 100 THEN 'Short'
        WHEN body_length < 200 THEN 'Medium'
        ELSE 'Long'
    END AS body_length_bucket,
    COUNT(*) AS post_count
FROM posts
GROUP BY body_length_bucket
ORDER BY post_count DESC;


-- 10. Content-length relationship
SELECT
    ROUND(
        CORR(title_length, body_length)::numeric,
        3
    ) AS title_body_length_correlation
FROM posts;