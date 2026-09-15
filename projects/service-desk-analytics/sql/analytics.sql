-- ============================================================
-- SERVICE DESK ANALYTICS
-- ============================================================


-- 1. OVERALL PERFORMANCE
SELECT
    COUNT(*) AS total_tickets,

    COUNT(*) FILTER (
        WHERE is_resolved = TRUE
    ) AS resolved_tickets,

    ROUND(
        COUNT(*) FILTER (WHERE is_resolved = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS resolution_rate,

    ROUND(AVG(response_time_minutes), 2)
        AS avg_response_time_minutes,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_time_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction_score,

    ROUND(
        COUNT(*) FILTER (WHERE reopened = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS reopen_rate

FROM service_desk_tickets;


-- 2. SLA PERFORMANCE
SELECT
    COUNT(*) FILTER (
        WHERE resolution_time_hours IS NOT NULL
    ) AS resolved_with_resolution_time,

    COUNT(*) FILTER (
        WHERE within_resolution_sla = TRUE
    ) AS within_sla,

    ROUND(
        COUNT(*) FILTER (WHERE within_resolution_sla = TRUE) * 100.0
        / NULLIF(
            COUNT(*) FILTER (
                WHERE resolution_time_hours IS NOT NULL
            ),
            0
        ),
        2
    ) AS sla_compliance_rate

FROM service_desk_tickets;


-- 3. CATEGORY PERFORMANCE
SELECT
    category,
    COUNT(*) AS ticket_count,

    ROUND(AVG(response_time_minutes), 2)
        AS avg_response_minutes,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction,

    ROUND(
        COUNT(*) FILTER (WHERE reopened = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS reopen_rate

FROM service_desk_tickets
GROUP BY category
ORDER BY ticket_count DESC;


-- 4. PRIORITY PERFORMANCE
SELECT
    priority,
    COUNT(*) AS ticket_count,

    ROUND(AVG(response_time_minutes), 2)
        AS avg_response_minutes,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction,

    ROUND(
        COUNT(*) FILTER (WHERE within_resolution_sla = TRUE) * 100.0
        / NULLIF(
            COUNT(*) FILTER (
                WHERE resolution_time_hours IS NOT NULL
            ),
            0
        ),
        2
    ) AS sla_compliance_rate

FROM service_desk_tickets
GROUP BY priority
ORDER BY
    CASE priority
        WHEN 'Critical' THEN 1
        WHEN 'High' THEN 2
        WHEN 'Medium' THEN 3
        WHEN 'Low' THEN 4
    END;


-- 5. MONTHLY PERFORMANCE
SELECT
    created_month,
    COUNT(*) AS ticket_count,

    COUNT(*) FILTER (
        WHERE is_resolved = TRUE
    ) AS resolved_tickets,

    ROUND(
        COUNT(*) FILTER (WHERE is_resolved = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS resolution_rate,

    ROUND(AVG(response_time_minutes), 2)
        AS avg_response_minutes,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction

FROM service_desk_tickets
GROUP BY created_month
ORDER BY created_month;


-- 6. CHANNEL PERFORMANCE
SELECT
    channel,
    COUNT(*) AS ticket_count,

    ROUND(AVG(response_time_minutes), 2)
        AS avg_response_minutes,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction

FROM service_desk_tickets
GROUP BY channel
ORDER BY ticket_count DESC;


-- 7. DEPARTMENT PERFORMANCE
SELECT
    department,
    COUNT(*) AS ticket_count,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction,

    ROUND(
        COUNT(*) FILTER (WHERE reopened = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS reopen_rate

FROM service_desk_tickets
GROUP BY department
ORDER BY ticket_count DESC;


-- 8. ISSUE TYPE PERFORMANCE
SELECT
    issue_type,
    COUNT(*) AS ticket_count,

    ROUND(AVG(response_time_minutes), 2)
        AS avg_response_minutes,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction

FROM service_desk_tickets
GROUP BY issue_type
ORDER BY ticket_count DESC;


-- 9. AGENT PERFORMANCE
SELECT
    assigned_agent,
    COUNT(*) AS ticket_count,

    COUNT(*) FILTER (
        WHERE is_resolved = TRUE
    ) AS resolved_tickets,

    ROUND(
        COUNT(*) FILTER (WHERE is_resolved = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS resolution_rate,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction,

    ROUND(
        COUNT(*) FILTER (WHERE reopened = TRUE) * 100.0
        / COUNT(*),
        2
    ) AS reopen_rate

FROM service_desk_tickets
GROUP BY assigned_agent
ORDER BY ticket_count DESC;


-- 10. RESOLUTION TIME VS SATISFACTION
WITH resolution_buckets AS (
    SELECT
        CASE
            WHEN resolution_time_hours < 4
                THEN 'Under 4 hours'
            WHEN resolution_time_hours < 8
                THEN '4–8 hours'
            WHEN resolution_time_hours < 24
                THEN '8–24 hours'
            ELSE '24+ hours'
        END AS resolution_bucket,
        satisfaction_score
    FROM service_desk_tickets
    WHERE resolution_time_hours IS NOT NULL
)

SELECT
    resolution_bucket,
    COUNT(*) AS ticket_count,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction

FROM resolution_buckets

GROUP BY resolution_bucket

ORDER BY
    CASE resolution_bucket
        WHEN 'Under 4 hours' THEN 1
        WHEN '4–8 hours' THEN 2
        WHEN '8–24 hours' THEN 3
        WHEN '24+ hours' THEN 4
    END;


-- 11. REOPENED TICKET ANALYSIS
SELECT
    reopened,
    COUNT(*) AS ticket_count,

    ROUND(
        AVG(resolution_time_hours)
        FILTER (WHERE resolution_time_hours IS NOT NULL),
        2
    ) AS avg_resolution_hours,

    ROUND(
        AVG(satisfaction_score)
        FILTER (WHERE satisfaction_score IS NOT NULL),
        2
    ) AS avg_satisfaction

FROM service_desk_tickets
GROUP BY reopened
ORDER BY reopened;


-- 12. OPEN / ACTIVE BACKLOG
SELECT
    status,
    COUNT(*) AS ticket_count
FROM service_desk_tickets
WHERE status IN ('Open', 'In Progress')
GROUP BY status
ORDER BY ticket_count DESC;