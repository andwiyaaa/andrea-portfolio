-- 1. Total rows
SELECT COUNT(*) AS total_rows
FROM posts;

-- 2. Duplicate post IDs
SELECT COUNT(*) AS duplicate_ids
FROM (
    SELECT id
    FROM posts
    GROUP BY id
    HAVING COUNT(*) > 1
) duplicates;

-- 3. Missing required values
SELECT COUNT(*) AS rows_with_missing_values
FROM posts
WHERE id IS NULL
   OR user_id IS NULL
   OR title IS NULL
   OR body IS NULL;

-- 4. Invalid post IDs
SELECT COUNT(*) AS invalid_post_ids
FROM posts
WHERE id <= 0;

-- 5. Invalid user IDs
SELECT COUNT(*) AS invalid_user_ids
FROM posts
WHERE user_id <= 0;

-- 6. Empty titles
SELECT COUNT(*) AS empty_titles
FROM posts
WHERE TRIM(title) = '';

-- 7. Empty post bodies
SELECT COUNT(*) AS empty_bodies
FROM posts
WHERE TRIM(body) = '';

-- 8. Incorrect title lengths
SELECT COUNT(*) AS incorrect_title_lengths
FROM posts
WHERE title_length <> LENGTH(title);

-- 9. Incorrect body lengths
SELECT COUNT(*) AS incorrect_body_lengths
FROM posts
WHERE body_length <> LENGTH(body);

-- 10. Row-count by user
SELECT
    user_id,
    COUNT(*) AS post_count
FROM posts
GROUP BY user_id
ORDER BY user_id;