-- ============================================================
-- SERVICE DESK DATA QUALITY CHECKS
-- ============================================================

-- 1. Total rows
SELECT
    COUNT(*) AS total_rows
FROM service_desk_tickets;


-- 2. Duplicate ticket IDs
SELECT
    ticket_id,
    COUNT(*) AS duplicate_count
FROM service_desk_tickets
GROUP BY ticket_id
HAVING COUNT(*) > 1;


-- 3. Missing required values
SELECT
    COUNT(*) FILTER (WHERE ticket_id IS NULL) AS missing_ticket_id,
    COUNT(*) FILTER (WHERE category IS NULL) AS missing_category,
    COUNT(*) FILTER (WHERE assigned_agent IS NULL) AS missing_agent,
    COUNT(*) FILTER (WHERE priority IS NULL) AS missing_priority,
    COUNT(*) FILTER (WHERE status IS NULL) AS missing_status
FROM service_desk_tickets;


-- 4. Invalid response times
SELECT
    COUNT(*) AS invalid_response_times
FROM service_desk_tickets
WHERE response_time_minutes < 0;


-- 5. Invalid resolution times
SELECT
    COUNT(*) AS invalid_resolution_times
FROM service_desk_tickets
WHERE resolution_time_hours < 0;


-- 6. Satisfaction scores outside 1–5
SELECT
    COUNT(*) AS invalid_satisfaction_scores
FROM service_desk_tickets
WHERE satisfaction_score IS NOT NULL
  AND (satisfaction_score < 1 OR satisfaction_score > 5);


-- 7. Invalid priority values
SELECT
    priority,
    COUNT(*) AS ticket_count
FROM service_desk_tickets
GROUP BY priority
ORDER BY priority;


-- 8. Invalid status values
SELECT
    status,
    COUNT(*) AS ticket_count
FROM service_desk_tickets
GROUP BY status
ORDER BY status;


-- 9. Resolved tickets missing resolution time
SELECT
    COUNT(*) AS resolved_without_resolution_time
FROM service_desk_tickets
WHERE is_resolved = TRUE
  AND resolution_time_hours IS NULL;


-- 10. SLA flag consistency
SELECT
    COUNT(*) AS sla_flag_mismatches
FROM service_desk_tickets
WHERE within_resolution_sla IS DISTINCT FROM
      (resolution_time_hours IS NOT NULL
       AND resolution_time_hours <= resolution_sla_hours);


-- 11. Reopened tickets
SELECT
    reopened,
    COUNT(*) AS ticket_count
FROM service_desk_tickets
GROUP BY reopened
ORDER BY reopened;


-- 12. Overall status distribution
SELECT
    status,
    COUNT(*) AS ticket_count,
    ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (),
        2
    ) AS percentage
FROM service_desk_tickets
GROUP BY status
ORDER BY ticket_count DESC;