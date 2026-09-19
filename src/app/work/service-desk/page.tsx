"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Headphones,
  ShieldCheck,
  Star,
  TicketCheck,
} from "lucide-react";
import { motion } from "motion/react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const pipeline = [
  {
    number: "01",
    title: "Raw tickets",
    value: "1,508",
    description: "1,500 original tickets plus 8 intentional duplicates.",
  },
  {
    number: "02",
    title: "Cleaned data",
    value: "1,500",
    description: "Duplicates removed and missing or invalid values handled.",
  },
  {
    number: "03",
    title: "Validation",
    value: "13",
    description: "Data-quality checks completed before database loading.",
  },
  {
    number: "04",
    title: "PostgreSQL",
    value: "1,500",
    description: "Validated tickets loaded into a structured database.",
  },
];

const priorities = [
  {
    label: "Critical",
    tickets: 43,
    response: 50.16,
    resolution: 4.64,
    sla: 83.72,
  },
  {
    label: "High",
    tickets: 231,
    response: 122.89,
    resolution: 11.28,
    sla: 81.82,
  },
  {
    label: "Medium",
    tickets: 662,
    response: 257,
    resolution: 19.62,
    sla: 52.42,
  },
  {
    label: "Low",
    tickets: 564,
    response: 368.85,
    resolution: 30.51,
    sla: 30.85,
  },
];

const categories = [
  {
    label: "Software",
    tickets: 399,
    response: 264.85,
    resolution: 21.79,
    satisfaction: 3.837,
    reopened: 15.29,
  },
  {
    label: "Network",
    tickets: 333,
    response: 266.13,
    resolution: 21.45,
    satisfaction: 3.808,
    reopened: 8.41,
  },
  {
    label: "Hardware",
    tickets: 327,
    response: 274.94,
    resolution: 22.74,
    satisfaction: 3.814,
    reopened: 10.09,
  },
  {
    label: "Access",
    tickets: 290,
    response: 285.91,
    resolution: 21.72,
    satisfaction: 3.945,
    reopened: 17.59,
  },
  {
    label: "Security",
    tickets: 147,
    response: 278.17,
    resolution: 22.88,
    satisfaction: 3.933,
    reopened: 8.16,
  },
  {
    label: "Unknown",
    tickets: 4,
    response: 175.25,
    resolution: 12.76,
    satisfaction: 4,
    reopened: 0,
  },
];

const monthly = [
  {
    month: "Jan",
    tickets: 245,
    resolved: 209,
    response: 265.66,
    resolution: 22.06,
    satisfaction: 3.823,
    sla: 85.31,
  },
  {
    month: "Feb",
    tickets: 236,
    resolved: 190,
    response: 261.25,
    resolution: 21.67,
    satisfaction: 3.805,
    sla: 80.51,
  },
  {
    month: "Mar",
    tickets: 254,
    resolved: 203,
    response: 275.06,
    resolution: 21.48,
    satisfaction: 3.936,
    sla: 79.92,
  },
  {
    month: "Apr",
    tickets: 264,
    resolved: 212,
    response: 287.2,
    resolution: 22.57,
    satisfaction: 3.877,
    sla: 80.3,
  },
  {
    month: "May",
    tickets: 248,
    resolved: 198,
    response: 276.02,
    resolution: 22.15,
    satisfaction: 3.803,
    sla: 79.84,
  },
  {
    month: "Jun",
    tickets: 253,
    resolved: 199,
    response: 268.09,
    resolution: 22.04,
    satisfaction: 3.889,
    sla: 78.66,
  },
];

const resolutionBuckets = [
  { label: "Under 4h", tickets: 38, satisfaction: 3.87 },
  { label: "4–8h", tickets: 127, satisfaction: 3.84 },
  { label: "8–24h", tickets: 580, satisfaction: 3.87 },
  { label: "24h+", tickets: 466, satisfaction: 3.85 },
];

export default function ServiceDeskPage() {
  return (
    <main className="site-shell">
      <SiteNav />

      <div className="relative z-10">
        {/* Hero */}
        <section className="site-container pb-24 pt-36 md:pb-32 md:pt-44">
          <Link
            href="/work"
            className="group mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-white/80"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to work
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--orange)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
                  Data analytics project
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="display-text mt-7"
              >
                Service Desk
                <br />
                <span className="orange-gradient">Analytics</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="body-copy max-w-xl"
            >
              A ticket analytics pipeline built to turn messy service-desk
              records into measurable insights around resolution, response
              time, SLA performance, satisfaction, and backlog.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-4">
            <Metric value="1,500" label="Final tickets" />
            <Metric value="80.73%" label="Resolution rate" />
            <Metric value="22h" label="Avg. resolution" />
            <Metric value="3.86" label="Avg. satisfaction" />
          </div>
        </section>

        {/* Pipeline */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="01" label="Data pipeline" />

          <h2 className="section-title mt-6 max-w-3xl">
            Clean the operational data before asking it questions.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="surface-card min-h-[245px] p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.16em] text-[var(--orange-light)]">
                    {item.number}
                  </span>

                  <span className="text-[9px] text-white/25">
                    {item.value}
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="body-copy mt-4 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.13em] text-white/30">
            <span>CSV</span>
            <ArrowUpRight size={11} />
            <span>Python</span>
            <ArrowUpRight size={11} />
            <span>Validation</span>
            <ArrowUpRight size={11} />
            <span>PostgreSQL</span>
            <ArrowUpRight size={11} />
            <span>SQL</span>
          </div>
        </section>

        {/* Data quality */}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionHeading number="02" label="Data quality" />

                <h2 className="section-title mt-6">
                  13 validation checks passed.
                </h2>

                <p className="body-copy mt-5 max-w-2xl text-sm">
                  The raw dataset intentionally included common operational
                  data problems so the pipeline could demonstrate cleaning and
                  validation rather than assuming perfect source data.
                </p>
              </div>

              <ShieldCheck
                size={28}
                strokeWidth={1.3}
                className="text-[var(--orange-light)]"
              />
            </div>

            <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "8 duplicate ticket IDs",
                "10 missing agents",
                "5 negative response times",
                "4 missing categories",
                "Duplicate removal",
                "Response-time correction",
                "Category handling",
                "Agent handling",
                "Date validation",
                "Status validation",
                "SLA validation",
                "Resolution fields",
                "Final row structure",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border border-[var(--line)] bg-[var(--surface-3)] px-4 py-4"
                >
                  <span className="text-[9px] text-[var(--orange-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-3 text-xs text-white/50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KPI overview */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="03" label="Service desk KPIs" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <KpiCard
              icon={<TicketCheck size={20} />}
              value="1,211"
              label="Resolved / closed"
              detail="80.73% of all tickets"
            />

            <KpiCard
              icon={<Clock3 size={20} />}
              value="272.47m"
              label="Average response"
              detail="Across the final dataset"
            />

            <KpiCard
              icon={<Headphones size={20} />}
              value="22h"
              label="Average resolution"
              detail="Across resolved tickets"
            />

            <KpiCard
              icon={<Star size={20} />}
              value="3.86"
              label="Average satisfaction"
              detail="Five-point scale"
            />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                SLA
              </p>

              <p className="mt-5 text-4xl font-medium tracking-[-0.05em]">
                61.6%
              </p>

              <p className="body-copy mt-4 text-sm">
                Tickets within the 24-hour SLA window using the Python
                calculation across the final dataset.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                Reopened
              </p>

              <p className="mt-5 text-4xl font-medium tracking-[-0.05em]">
                12.33%
              </p>

              <p className="body-copy mt-4 text-sm">
                185 tickets were reopened, compared with 1,315 tickets that
                were not reopened.
              </p>
            </div>
          </div>
        </section>

        {/* Priority */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="04" label="Priority analysis" />

          <div className="mt-10 overflow-x-auto overflow-y-hidden rounded-[var(--radius-lg)] border border-[var(--line)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="bg-[var(--surface-3)] text-left text-[9px] uppercase tracking-[0.14em] text-white/30">
                    <th className="px-5 py-4 font-normal">Priority</th>
                    <th className="px-5 py-4 font-normal">Tickets</th>
                    <th className="px-5 py-4 font-normal">
                      Avg. response
                    </th>
                    <th className="px-5 py-4 font-normal">
                      Avg. resolution
                    </th>
                    <th className="px-5 py-4 font-normal">
                      SLA
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {priorities.map((item) => (
                    <tr
                      key={item.label}
                      className="border-t border-[var(--line)] bg-[var(--surface-2)]"
                    >
                      <td className="px-5 py-5 text-sm text-white/70">
                        {item.label}
                      </td>

                      <td className="px-5 py-5 text-sm text-white/45">
                        {item.tickets}
                      </td>

                      <td className="px-5 py-5 text-sm text-white/55">
                        {item.response.toFixed(2)} min
                      </td>

                      <td className="px-5 py-5 text-sm text-white/55">
                        {item.resolution.toFixed(2)} h
                      </td>

                      <td className="px-5 py-5 text-sm text-white/65">
                        {item.sla.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-[9px] leading-5 text-white/25">
            These SLA percentages use the Python/CSV calculation, which
            evaluates tickets against the 24-hour SLA. The SQL analysis uses
            a different denominator for its priority-level SLA calculation,
            so those figures are kept separate.
          </p>
        </section>

        {/* Resolution */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionHeading number="05" label="Resolution time" />

              <h2 className="section-title mt-6">
                Most resolved tickets fell inside the 8–24 hour range.
              </h2>

              <p className="body-copy mt-5 max-w-md text-sm">
                Resolution buckets make the operational distribution easier to
                read than a single average.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-9">
              <div className="space-y-6">
                {resolutionBuckets.map((item) => {
                  const width = (item.tickets / 580) * 100;

                  return (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-[10px]">
                        <span className="text-white/50">{item.label}</span>

                        <span className="text-white/70">
                          {item.tickets} tickets
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${width}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
                        />
                      </div>

                      <p className="mt-2 text-[9px] text-white/25">
                        Satisfaction: {item.satisfaction.toFixed(2)} / 5
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Category */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="06" label="Category analysis" />

          <div className="mt-10 overflow-x-auto overflow-y-hidden rounded-[var(--radius-lg)] border border-[var(--line)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse">
                <thead>
                  <tr className="bg-[var(--surface-3)] text-left text-[9px] uppercase tracking-[0.14em] text-white/30">
                    <th className="px-5 py-4 font-normal">Category</th>
                    <th className="px-5 py-4 font-normal">Tickets</th>
                    <th className="px-5 py-4 font-normal">Response</th>
                    <th className="px-5 py-4 font-normal">Resolution</th>
                    <th className="px-5 py-4 font-normal">Satisfaction</th>
                    <th className="px-5 py-4 font-normal">Reopened</th>
                  </tr>
                </thead>

                <tbody>
                  {categories.map((item) => (
                    <tr
                      key={item.label}
                      className="border-t border-[var(--line)] bg-[var(--surface-2)]"
                    >
                      <td className="px-5 py-5 text-sm text-white/70">
                        {item.label}
                      </td>

                      <td className="px-5 py-5 text-sm text-white/45">
                        {item.tickets}
                      </td>

                      <td className="px-5 py-5 text-sm text-white/55">
                        {item.response.toFixed(2)} min
                      </td>

                      <td className="px-5 py-5 text-sm text-white/55">
                        {item.resolution.toFixed(2)} h
                      </td>

                      <td className="px-5 py-5 text-sm text-white/65">
                        {item.satisfaction.toFixed(2)}
                      </td>

                      <td className="px-5 py-5 text-sm text-white/65">
                        {item.reopened.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Monthly */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="07" label="Monthly trend" />

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {monthly.map((item, index) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="surface-card rounded-[var(--radius-md)] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--orange-light)]">
                    {item.month}
                  </span>

                  <span className="text-[9px] text-white/25">
                    {item.tickets} tickets
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6">
                  <SmallStat
                    value={item.resolved.toString()}
                    label="Resolved"
                  />

                  <SmallStat
                    value={`${item.sla.toFixed(1)}%`}
                    label="SLA"
                  />

                  <SmallStat
                    value={`${item.response.toFixed(0)}m`}
                    label="Response"
                  />

                  <SmallStat
                    value={`${item.resolution.toFixed(1)}h`}
                    label="Resolution"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Backlog */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
              <SectionHeading number="08" label="Active backlog" />

              <h2 className="section-title mt-7">
                289 tickets remained open or in progress.
              </h2>

              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="border border-[var(--line)] bg-[var(--surface-3)] p-5">
                  <p className="text-3xl font-medium tracking-[-0.05em]">
                    150
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.13em] text-white/30">
                    In progress
                  </p>
                </div>

                <div className="border border-[var(--line)] bg-[var(--surface-3)] p-5">
                  <p className="text-3xl font-medium tracking-[-0.05em]">
                    139
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.13em] text-white/30">
                    Open
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                Reopened tickets
              </p>

              <p className="mt-6 text-4xl font-medium tracking-[-0.05em]">
                185
              </p>

              <p className="body-copy mt-4 text-sm">
                Reopened tickets represented 12.33% of the final dataset.
              </p>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
                  style={{ width: "12.33%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Takeaway */}
        <section className="site-container pb-32" data-reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line-strong)] bg-[var(--surface-3)] px-7 py-14 md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--orange)]/15 blur-[110px]" />

            <span className="relative text-[10px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
              Takeaway
            </span>

            <h2 className="relative mt-6 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Turn support tickets into
              <span className="orange-gradient"> operational signals.</span>
            </h2>

            <p className="relative mt-7 max-w-2xl text-sm leading-7 text-white/45">
              The project connects data cleaning, validation, SQL analysis,
              and service-desk metrics to make response, resolution, SLA,
              satisfaction, and backlog patterns easier to investigate.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Technologies
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Python",
                "Pandas",
                "PostgreSQL",
                "SQL",
                "CSV",
                "Data Validation",
                "Data Analysis",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-3)] px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-white/50"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="site-container pb-28" data-reveal>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            <ProjectLink
              href="/work/aws-cloud"
              eyebrow="Previous project"
              title="AWS Cloud Data Pipeline"
              direction="left"
            />

            <ProjectLink
              href="/work/fitly-churn"
              eyebrow="Explore another analysis"
              title="Fit.ly Churn Analysis"
              direction="right"
            />
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-b border-[var(--line)] px-0 py-6 md:border-b-0 md:border-r md:px-7 md:py-8 last:border-r-0">
      <p className="text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-white/35">
        {label}
      </p>
    </div>
  );
}

function SectionHeading({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[9px] tracking-[0.16em] text-[var(--orange-light)]">
        {number}
      </span>

      <span className="h-px w-7 bg-[var(--line-strong)]" />

      <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
        {label}
      </span>
    </div>
  );
}

function KpiCard({
  icon,
  value,
  label,
  detail,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-7">
      <div className="text-[var(--orange-light)]">{icon}</div>

      <p className="mt-10 text-3xl font-medium tracking-[-0.05em]">
        {value}
      </p>

      <p className="mt-3 text-sm text-white/70">{label}</p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-white/25">
        {detail}
      </p>
    </div>
  );
}

function SmallStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-lg font-medium tracking-[-0.03em]">{value}</p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-white/25">
        {label}
      </p>
    </div>
  );
}

function ProjectLink({
  href,
  eyebrow,
  title,
  direction,
}: {
  href: string;
  eyebrow: string;
  title: string;
  direction: "left" | "right";
}) {
  return (
    <Link
      href={href}
      className="surface-card group flex min-h-[150px] items-end justify-between p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9"
    >
      <div>
        <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
          {eyebrow}
        </p>

        <p className="mt-3 text-xl font-medium tracking-[-0.03em] text-white/80 group-hover:text-white">
          {title}
        </p>
      </div>

      {direction === "left" ? (
        <ArrowLeft
          size={17}
          className="text-white/30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-[var(--orange-light)]"
        />
      ) : (
        <ArrowUpRight
          size={17}
          className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--orange-light)]"
        />
      )}
    </Link>
  );
}