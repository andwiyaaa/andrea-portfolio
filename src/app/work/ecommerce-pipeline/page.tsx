"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Database,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const pipeline = [
  {
    number: "01",
    title: "Extract",
    description:
      "Generated and collected raw e-commerce order records for the pipeline.",
  },
  {
    number: "02",
    title: "Transform",
    description:
      "Cleaned duplicates, invalid prices, missing customer IDs, and inconsistent values.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Ran data-quality checks before allowing the cleaned dataset into the database.",
  },
  {
    number: "04",
    title: "Load",
    description:
      "Loaded the validated dataset into PostgreSQL for structured querying and analysis.",
  },
];

const qualityChecks = [
  { label: "Raw orders", value: "1,010" },
  { label: "Duplicates removed", value: "10" },
  { label: "Invalid / missing prices", value: "18" },
  { label: "Missing customer IDs handled", value: "14" },
  { label: "Final clean orders", value: "982" },
];

const statusData = [
  { label: "Completed", value: 60.29 },
  { label: "Cancelled", value: 21.59 },
  { label: "Pending", value: 18.13 },
];

const monthlyData = [
  { month: "January", orders: 317, items: 962, revenue: "₱2.12M" },
  { month: "February", orders: 318, items: 999, revenue: "₱2.16M" },
  { month: "March", orders: 347, items: 994, revenue: "₱2.20M" },
];

const categories = [
  ["Fashion", "₱901,401.50"],
  ["Electronics", "₱855,042.20"],
  ["Home", "₱768,705.33"],
  ["Sports", "₱698,546.80"],
  ["Beauty", "₱658,056.98"],
];

export default function EcommercePipelinePage() {
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
                  Engineering project
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="display-text mt-7"
              >
                E-commerce
                <br />
                <span className="orange-gradient">Data Pipeline</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="body-copy max-w-xl"
            >
              An end-to-end data pipeline that takes raw e-commerce order
              records through transformation, validation, PostgreSQL loading,
              and SQL-based analysis.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-4">
            <Metric value="982" label="Clean orders" />
            <Metric value="246" label="Customers" />
            <Metric value="2,955" label="Items" />
            <Metric value="₱6.48M" label="Total order value" />
          </div>
        </section>

        {/* Pipeline */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="01" label="Pipeline architecture" />

          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="surface-card min-h-[240px] p-7 md:p-8"
              >
                <span className="text-[10px] tracking-[0.16em] text-[var(--orange-light)]">
                  {item.number}
                </span>

                <h2 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h2>

                <p className="body-copy mt-4 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.13em] text-white/30">
            <span>Raw CSV</span>
            <ArrowRight size={12} />
            <span>Python / Pandas</span>
            <ArrowRight size={12} />
            <span>Validation</span>
            <ArrowRight size={12} />
            <span>PostgreSQL</span>
            <ArrowRight size={12} />
            <span>SQL Analytics</span>
          </div>
        </section>

        {/* Data quality */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionHeading number="02" label="Data quality" />

              <h2 className="section-title mt-6 max-w-md">
                Clean data before analysis.
              </h2>

              <p className="body-copy mt-5 max-w-md">
                The pipeline intentionally introduced data-quality issues so
                the transformation and validation stages could be tested
                against realistic scenarios.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Transformation results
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                    Before → after
                  </p>
                </div>

                <ShieldCheck size={19} className="text-[var(--orange-light)]" />
              </div>

              <div className="divide-y divide-white/[0.08]">
                {qualityChecks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-5 py-4"
                  >
                    <span className="text-sm text-white/50">
                      {item.label}
                    </span>

                    <span className="text-sm font-medium text-white/85">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Analytics overview */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="03" label="Analytics" />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
            {/* Status */}
            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <p className="text-sm font-medium text-white/85">
                Order status
              </p>

              <div className="mt-8 space-y-5">
                {statusData.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-[10px]">
                      <span className="text-white/50">{item.label}</span>
                      <span className="text-white/75">{item.value}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75 }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AOV */}
            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <p className="text-sm font-medium text-white/85">
                Average order value
              </p>

              <p className="mt-10 text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                ₱6,593
                <span className="text-white/30">.88</span>
              </p>

              <p className="body-copy mt-4 max-w-sm text-sm">
                Calculated from the final 982-order dataset.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <Database size={16} className="text-[var(--orange-light)]" />
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                  PostgreSQL analytics
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <SectionHeading number="04" label="Monthly view" />

              <h2 className="section-title mt-6">
                Order activity across the three-month dataset.
              </h2>
            </div>

            <div className="surface-card overflow-hidden rounded-[var(--radius-lg)]">
              <div className="grid grid-cols-[1fr_0.7fr_0.7fr_1fr] border-b border-[var(--line)] px-5 py-4 text-[9px] uppercase tracking-[0.12em] text-white/30 md:px-7">
                <span>Month</span>
                <span>Orders</span>
                <span>Items</span>
                <span>Order value</span>
              </div>

              {monthlyData.map((item) => (
                <div
                  key={item.month}
                  className="grid grid-cols-[1fr_0.7fr_0.7fr_1fr] border-b border-[var(--line)] px-5 py-5 text-sm last:border-b-0 md:px-7"
                >
                  <span className="text-white/70">{item.month}</span>
                  <span className="text-white/55">{item.orders}</span>
                  <span className="text-white/55">{item.items}</span>
                  <span className="text-white/75">{item.revenue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <p className="text-sm font-medium text-white/85">
                Completed order value by category
              </p>

              <div className="mt-8 divide-y divide-white/[0.08]">
                {categories.map(([category, value], index) => (
                  <div
                    key={category}
                    className="flex items-center justify-between gap-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] text-white/25">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-white/60">
                        {category}
                      </span>
                    </div>

                    <span className="text-sm text-white/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading number="05" label="Business view" />

              <h2 className="section-title mt-6">
                From cleaned records to usable metrics.
              </h2>

              <p className="body-copy mt-5">
                Once the dataset passed validation and was loaded into
                PostgreSQL, SQL queries could be used to examine order status,
                monthly activity, categories, payments, customers, and value.
              </p>
            </div>
          </div>
        </section>

        {/* Technical implementation */}
        <section className="site-container pb-32" data-reveal>
          <div className="border-t border-[var(--line)] pt-16 md:pt-20">
            <SectionHeading number="06" label="Implementation" />

            <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
              <TechCard
                title="Python"
                text="Extraction, transformation, cleaning, and validation."
              />

              <TechCard
                title="PostgreSQL"
                text="Structured storage for the final analysis-ready dataset."
              />

              <TechCard
                title="SQL"
                text="Queries for business metrics and exploratory analysis."
              />
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
              Reliable analysis starts with
              <span className="orange-gradient"> reliable data.</span>
            </h2>

            <p className="relative mt-7 max-w-2xl text-sm leading-7 text-white/45">
              This project demonstrates the full path from raw records to
              validated, queryable data — with quality checks built into the
              workflow rather than treated as an afterthought.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Tools used
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "Pandas", "PostgreSQL", "SQL", "CSV"].map((tool) => (
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
              href="/work/fitly-churn"
              eyebrow="Previous project"
              title="Fit.ly Churn Analysis"
              direction="left"
            />

            <ProjectLink
              href="/work/api-pipeline"
              eyebrow="Next project"
              title="API Data Pipeline"
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

function TechCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="surface-card min-h-[190px] p-7 md:p-8">
      <p className="text-xl font-medium tracking-[-0.03em] text-white/85">
        {title}
      </p>

      <p className="body-copy mt-5 text-sm">{text}</p>
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