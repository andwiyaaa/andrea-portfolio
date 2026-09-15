DROP TABLE IF EXISTS service_desk_tickets;

CREATE TABLE service_desk_tickets (
    ticket_id VARCHAR(20) PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    created_date DATE NOT NULL,
    created_month VARCHAR(7) NOT NULL,
    created_day VARCHAR(15) NOT NULL,
    resolved_at TIMESTAMP,

    category VARCHAR(50) NOT NULL,
    issue_type VARCHAR(100) NOT NULL,
    priority VARCHAR(20) NOT NULL,
    status VARCHAR(30) NOT NULL,
    channel VARCHAR(30) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    assigned_agent VARCHAR(50) NOT NULL,

    response_time_minutes NUMERIC(10, 2) NOT NULL,
    resolution_time_hours NUMERIC(10, 2),

    resolution_sla_hours NUMERIC(10, 2) NOT NULL DEFAULT 24,

    within_resolution_sla BOOLEAN,

    satisfaction_score NUMERIC(3, 0),

    reopened BOOLEAN NOT NULL DEFAULT FALSE,

    is_resolved BOOLEAN NOT NULL
);

CREATE INDEX idx_service_desk_created_at
    ON service_desk_tickets(created_at);

CREATE INDEX idx_service_desk_category
    ON service_desk_tickets(category);

CREATE INDEX idx_service_desk_priority
    ON service_desk_tickets(priority);

CREATE INDEX idx_service_desk_status
    ON service_desk_tickets(status);

CREATE INDEX idx_service_desk_agent
    ON service_desk_tickets(assigned_agent);