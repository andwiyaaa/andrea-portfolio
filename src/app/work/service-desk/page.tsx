"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  Clock3,
  Database,
  Headphones,
  ShieldCheck,
  Ticket,
  TrendingDown,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "motion/react";

const monthlyData = [
  { month: "Jan", tickets: 245, resolution: 85.31 },
  { month: "Feb", tickets: 236, resolution: 80.51 },
  { month: "Mar", tickets: 254, resolution: 79.92 },
  { month: "Apr", tickets: 264, resolution: 80.3 },
  { month: "May", tickets: 248, resolution: 79.84 },
  { month: "Jun", tickets: 253, resolution: 78.66 },
];

const priorityData = [
  {
    priority: "Critical",
    resolution: 4.64,
    sla: 83.72,
  },
  {
    priority: "High",
    resolution: 11.28,
    sla: 81.82,
  },
  {
    priority: "Medium",
    resolution: 19.62,
    sla: 52.42,
  },
  {
    priority: "Low",
    resolution: 30.51,
    sla: 30.85,
  },
];

const categoryData = [
  { category: "Software", tickets: 399, reopen: 15.29 },
  { category: "Network", tickets: 333, reopen: 8.41 },
  { category: "Hardware", tickets: 327, reopen: 10.09 },
  { category: "Access", tickets: 290, reopen: 17.59 },
  { category: "Security", tickets: 147, reopen: 8.16 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServiceDeskAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#f4f4f0]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/work"
          className="group flex items-center gap-2 text-sm text-[#9699a3] transition hover:text-[#f4f4f0]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to work
        </Link>

        <Link
          href="https://github.com/andwiyaaa/andrea-portfolio/tree/main/projects/service-desk-analytics"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-sm text-[#c4c6ce] transition hover:text-[#66e7e1]"
        >
          GitHub
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#66e7e1]/[0.045] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
                <span className="h-px w-8 bg-[#66e7e1]/50" />
                Analytics · IT Operations
              </div>

              <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] md:text-7xl">
                Service Desk
                <br />
                <span className="text-[#9699a3]">Analytics.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#9699a3] md:text-lg">
                A service desk analytics workflow built to turn ticket data
                into clear operational signals around resolution, SLA
                performance, satisfaction, and recurring support issues.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Python",
                  "PostgreSQL",
                  "SQL",
                  "Data Validation",
                  "Analytics",
                  "IT Operations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-[#c4c6ce]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero metric */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl md:p-7"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#66e7e1]/10 text-[#66e7e1]">
                  <Headphones size={19} />
                </div>

                <span className="text-xs uppercase tracking-[0.16em] text-[#9699a3]">
                  Dataset overview
                </span>
              </div>

              <div className="text-5xl font-medium tracking-[-0.04em]">
                1,500
              </div>

              <p className="mt-2 text-sm text-[#9699a3]">
                cleaned service desk tickets
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <MiniMetric label="Resolved" value="80.73%" />
                <MiniMetric label="SLA" value="61.60%" />
                <MiniMetric label="Satisfaction" value="3.86 / 5" />
                <MiniMetric label="Reopened" value="12.33%" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPI strip */}
      <section className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Kpi
            icon={<Ticket size={17} />}
            value="1,500"
            label="Tickets analyzed"
          />
          <Kpi
            icon={<TrendingDown size={17} />}
            value="80.73%"
            label="Resolution rate"
          />
          <Kpi
            icon={<Clock3 size={17} />}
            value="22.0 hrs"
            label="Avg. resolution"
          />
          <Kpi
            icon={<ShieldCheck size={17} />}
            value="61.60%"
            label="Within 24h SLA"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="01" title="Overview" />

          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              From raw support tickets to operational visibility.
            </h2>

            <p className="mt-6 leading-7 text-[#9699a3]">
              This project simulates a service desk environment where support
              tickets are cleaned, validated, stored in PostgreSQL, analyzed
              with SQL, and translated into operational metrics.
            </p>

            <p className="mt-5 leading-7 text-[#9699a3]">
              The goal is not simply to count tickets. It is to identify where
              resolution performance slows down, where SLA compliance drops,
              which categories generate repeat work, and how support outcomes
              change over time.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ProcessCard
                icon={<Database size={17} />}
                title="Prepare"
                text="Clean and validate ticket records."
              />
              <ProcessCard
                icon={<BarChart3 size={17} />}
                title="Analyze"
                text="Use SQL to measure performance."
              />
              <ProcessCard
                icon={<TrendingDown size={17} />}
                title="Interpret"
                text="Turn metrics into operational signals."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly trend */}
      <section className="border-y border-white/[0.07] bg-white/[0.018] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="02"
            title="Resolution trend"
            description="Resolution performance gradually declined across the six-month dataset."
          />

          <div className="mt-10 rounded-3xl border border-white/10 bg-[#0b0d11] p-5 md:p-7">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-[#9699a3]">Monthly resolution rate</p>
                <p className="mt-1 text-2xl font-medium">85.31% → 78.66%</p>
              </div>

              <span className="rounded-full border border-[#66e7e1]/20 bg-[#66e7e1]/[0.06] px-3 py-1 text-xs text-[#66e7e1]">
                Jan–Jun 2026
              </span>
            </div>

            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9699a3", fontSize: 12 }}
                  />
                  <YAxis
                    domain={[70, 90]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9699a3", fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#101217",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      color: "#f4f4f0",
                    }}
                    formatter={(value) => [`${value}%`, "Resolution"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="resolution"
                    stroke="#66e7e1"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#66e7e1" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Priority */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="03"
            title="Priority performance"
            description="Lower-priority tickets show a substantial increase in resolution time and a sharp drop in SLA compliance."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-7">
              <div className="h-[330px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={priorityData} barGap={10}>
                    <CartesianGrid
                      stroke="rgba(255,255,255,0.06)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="priority"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9699a3", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9699a3", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#101217",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        color: "#f4f4f0",
                      }}
                      formatter={(value, name) => [
                        name === "resolution"
                          ? `${value} hrs`
                          : `${value}%`,
                        name === "resolution"
                          ? "Resolution time"
                          : "SLA rate",
                      ]}
                    />
                    <Bar
                      dataKey="resolution"
                      name="resolution"
                      fill="#66e7e1"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid gap-3">
              {priorityData.map((item) => (
                <div
                  key={item.priority}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div>
                    <p className="font-medium">{item.priority}</p>
                    <p className="mt-1 text-xs text-[#9699a3]">
                      Avg. resolution
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-medium">
                      {item.resolution} hrs
                    </p>
                    <p className="mt-1 text-xs text-[#66e7e1]">
                      {item.sla}% SLA
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#66e7e1]/10 bg-[#66e7e1]/[0.035] p-5 md:p-6">
            <p className="text-sm leading-6 text-[#c4c6ce]">
              <span className="text-[#66e7e1]">Key signal:</span> average
              resolution time increases from 4.64 hours for Critical tickets
              to 30.51 hours for Low-priority tickets, while SLA compliance
              falls from 83.72% to 30.85%.
            </p>
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="border-y border-white/[0.07] bg-white/[0.018] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="04"
            title="Category workload"
            description="Software, Network, and Hardware account for the largest ticket volumes, while Access has the highest reopen rate."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d11] p-5 md:p-7">
              <div className="h-[330px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData} layout="vertical">
                    <CartesianGrid
                      stroke="rgba(255,255,255,0.06)"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9699a3", fontSize: 12 }}
                    />
                    <YAxis
                      dataKey="category"
                      type="category"
                      width={75}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9699a3", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#101217",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        color: "#f4f4f0",
                      }}
                    />
                    <Bar
                      dataKey="tickets"
                      fill="#9d8cff"
                      radius={[0, 6, 6, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-3">
              {categoryData.map((item) => (
                <div
                  key={item.category}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"
                >
                  <div>
                    <p className="font-medium">{item.category}</p>
                    <p className="mt-1 text-xs text-[#9699a3]">
                      {item.tickets} tickets
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-[#c4c6ce]">
                      {item.reopen}% reopened
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#9d8cff]/10 bg-[#9d8cff]/[0.035] p-5 md:p-6">
            <p className="text-sm leading-6 text-[#c4c6ce]">
              <span className="text-[#9d8cff]">Key signal:</span> Access
              tickets have the highest reopen rate at 17.59%, suggesting an
              area worth monitoring for repeat support work.
            </p>
          </div>
        </div>
      </section>

      {/* Operational insights */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="05"
            title="Operational signals"
            description="The analysis highlights several areas that a support team could monitor."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Insight
              number="01"
              title="Resolution is trending down"
              text="The monthly resolution rate moves from 85.31% in January to 78.66% in June."
            />

            <Insight
              number="02"
              title="Low priority needs attention"
              text="Low-priority tickets average 30.51 hours to resolve and have the lowest SLA rate."
            />

            <Insight
              number="03"
              title="Access generates repeat work"
              text="Access has the highest category reopen rate at 17.59%."
            />
          </div>
        </div>
      </section>

      {/* Technical workflow */}
      <section className="border-y border-white/[0.07] bg-white/[0.018] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="06"
            title="Technical workflow"
            description="A complete analytics workflow from raw ticket records to dashboard-ready insights."
          />

          <div className="mt-10 grid gap-3 md:grid-cols-4">
            <WorkflowStep
              number="01"
              title="CSV"
              text="Raw service desk tickets"
            />
            <WorkflowStep
              number="02"
              title="Python"
              text="Clean, transform, validate"
            />
            <WorkflowStep
              number="03"
              title="PostgreSQL"
              text="Store structured records"
            />
            <WorkflowStep
              number="04"
              title="SQL + Dashboard"
              text="Analyze and communicate"
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <TechnicalCard
              icon={<Check size={18} />}
              title="Data quality"
              items={[
                "1,500 validated records",
                "0 duplicate ticket IDs",
                "0 invalid response times",
                "0 invalid satisfaction scores",
              ]}
            />

            <TechnicalCard
              icon={<Database size={18} />}
              title="Technology"
              items={[
                "Python + Pandas",
                "PostgreSQL 18",
                "SQL analytics",
                "Next.js + Recharts",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Project context */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9699a3]">
                  Project context
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
                  Built as a hands-on analytics project.
                </h2>

                <p className="mt-5 leading-7 text-[#9699a3]">
                  The dataset is synthetic and was created specifically to
                  demonstrate an end-to-end service desk analytics workflow.
                  The project focuses on data preparation, validation,
                  relational storage, SQL analysis, and communicating
                  operational findings.
                </p>
              </div>

              <Link
                href="https://github.com/andwiyaaa/andrea-portfolio/tree/main/projects/service-desk-analytics"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#66e7e1] px-5 py-3 text-sm font-medium"
                style={{ color: "#071014" }}
              >
                View project on GitHub
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#9699a3] md:flex-row">
          <Link
            href="/work"
            className="transition hover:text-[#f4f4f0]"
          >
            ← Back to selected work
          </Link>

          <span>Service Desk Analytics · Data · Systems</span>
        </div>
      </footer>
    </main>
  );
}

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#9699a3]">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

function Kpi({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="border-r border-white/[0.07] p-5 last:border-r-0 md:p-6">
      <div className="flex items-center gap-2 text-[#66e7e1]">
        {icon}
        <span className="text-xs uppercase tracking-[0.12em] text-[#9699a3]">
          {label}
        </span>
      </div>
      <p className="mt-3 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
        {value}
      </p>
    </div>
  );
}

function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-mono text-xs text-[#66e7e1]">{number}</span>
      <span className="text-xs uppercase tracking-[0.18em] text-[#9699a3]">
        {title}
      </span>
    </div>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel number={number} title={title} />
      <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-[#9699a3]">{description}</p>
    </div>
  );
}

function ProcessCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="text-[#66e7e1]">{icon}</div>
      <p className="mt-4 text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs leading-5 text-[#9699a3]">{text}</p>
    </div>
  );
}

function Insight({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
      <span className="font-mono text-xs text-[#66e7e1]">{number}</span>
      <h3 className="mt-8 text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#9699a3]">{text}</p>
    </div>
  );
}

function WorkflowStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <span className="font-mono text-xs text-[#66e7e1]">{number}</span>
      <h3 className="mt-5 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-[#9699a3]">{text}</p>
    </div>
  );
}

function TechnicalCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
      <div className="flex items-center gap-3">
        <div className="text-[#66e7e1]">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm text-[#c4c6ce]"
          >
            <Check size={14} className="shrink-0 text-[#66e7e1]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}