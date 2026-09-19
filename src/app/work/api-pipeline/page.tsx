"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Database,
  GitBranch,
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
      "Retrieved 100 JSON records from a public REST API and stored the raw response.",
  },
  {
    number: "02",
    title: "Transform",
    description:
      "Renamed fields, standardized IDs, cleaned text, and added derived measurements.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Checked required fields, data types, duplicates, and transformation results.",
  },
  {
    number: "04",
    title: "Load",
    description:
      "Loaded the cleaned dataset into PostgreSQL for structured querying.",
  },
];

const titleBuckets = [
  { label: "Short", value: 6 },
  { label: "Medium", value: 47 },
  { label: "Long", value: 47 },
];

const bodyBuckets = [
  { label: "Medium", value: 91 },
  { label: "Long", value: 9 },
];

const users = [
  { user: "User 4", value: 1823 },
  { user: "User 1", value: 1645 },
  { user: "User 7", value: 1635 },
  { user: "User 2", value: 1629 },
  { user: "User 5", value: 1625 },
];

export default function ApiPipelinePage() {
  return (
    <main className="site-shell">
      <SiteNav />

      <div className="relative z-10">
        {}
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
                API Data
                <br />
                <span className="orange-gradient">Pipeline</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="body-copy max-w-xl"
            >
              A compact ETL workflow that extracts JSON from a public REST
              API, transforms and validates the records, then loads the
              resulting dataset into PostgreSQL.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-4">
            <Metric value="100" label="Posts" />
            <Metric value="10" label="Users" />
            <Metric value="10" label="Validation checks" />
            <Metric value="0.076" label="Title/body correlation" />
          </div>
        </section>

        {}
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
                className="surface-card min-h-[235px] p-7 md:p-8"
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
            <span>REST API</span>
            <ArrowUpRight size={11} />
            <span>JSON</span>
            <ArrowUpRight size={11} />
            <span>Python</span>
            <ArrowUpRight size={11} />
            <span>Validation</span>
            <ArrowUpRight size={11} />
            <span>PostgreSQL</span>
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionHeading number="02" label="Transformation" />

              <h2 className="section-title mt-6 max-w-md">
                Turn API records into structured data.
              </h2>

              <p className="body-copy mt-5 max-w-md">
                The transformation stage standardizes the API response before
                it reaches the database, making the records easier to query
                and analyze.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-3)]">
                  <Braces
                    size={20}
                    className="text-[var(--orange-light)]"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/85">
                    JSON → relational data
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-white/30">
                    Python transformation
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "userid → user_id",
                  "Standardized numeric IDs",
                  "Required-field checks",
                  "Text normalization",
                  "title_length added",
                  "body_length added",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--line)] bg-[var(--surface-3)] px-4 py-3 text-xs text-white/55"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionHeading number="03" label="Validation" />

                <h2 className="section-title mt-6">
                  10 data-quality checks passed.
                </h2>
              </div>

              <ShieldCheck
                size={28}
                strokeWidth={1.3}
                className="text-[var(--orange-light)]"
              />
            </div>

            <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Row count",
                "Required fields",
                "Data types",
                "Duplicate IDs",
                "User IDs",
                "Title values",
                "Body values",
                "Derived fields",
                "Null checks",
                "Final structure",
              ].map((check, index) => (
                <div
                  key={check}
                  className="border border-[var(--line)] bg-[var(--surface-3)] px-4 py-4"
                >
                  <span className="text-[9px] text-[var(--orange-light)]">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-xs text-white/55">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="04" label="Text analysis" />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <BucketCard
              title="Title length"
              subtitle="100 posts"
              data={titleBuckets}
              max={47}
            />

            <BucketCard
              title="Body length"
              subtitle="100 posts"
              data={bodyBuckets}
              max={91}
            />
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionHeading number="05" label="User-level analysis" />

              <h2 className="section-title mt-6">
                Comparing content volume by user.
              </h2>

              <p className="body-copy mt-5 max-w-md">
                Grouping the records by user makes it possible to examine how
                much content each user contributed to the dataset.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <p className="text-sm font-medium text-white/85">
                Average body length by user
              </p>

              <div className="mt-8 space-y-5">
                {users.map((item) => {
                  const width = (item.value / 1823) * 100;

                  return (
                    <div key={item.user}>
                      <div className="mb-2 flex items-center justify-between text-[10px]">
                        <span className="text-white/50">{item.user}</span>
                        <span className="text-white/75">{item.value}</span>
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
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-[9px] uppercase tracking-[0.12em] text-white/25">
                Highest observed average body length
              </p>
            </div>
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            <TechCard
              icon={<GitBranch size={18} />}
              title="REST API"
              text="Used as the external source for the raw JSON dataset."
            />

            <TechCard
              icon={<Braces size={18} />}
              title="Python"
              text="Handled extraction, transformation, and validation."
            />

            <TechCard
              icon={<Database size={18} />}
              title="PostgreSQL"
              text="Stored the final structured dataset for SQL analysis."
            />
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line-strong)] bg-[var(--surface-3)] px-7 py-14 md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--orange)]/15 blur-[110px]" />

            <span className="relative text-[10px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
              Takeaway
            </span>

            <h2 className="relative mt-6 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] md:text-5xl">
              A small API can still become a
              <span className="orange-gradient"> complete pipeline.</span>
            </h2>

            <p className="relative mt-7 max-w-2xl text-sm leading-7 text-white/45">
              This project demonstrates the complete flow from an external
              JSON source to a cleaned, validated, relational dataset that can
              be queried with SQL.
            </p>
          </div>
        </section>

        {}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Tools used
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "REST API", "JSON", "PostgreSQL", "SQL"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface-3)] px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-white/50"
                  >
                    {tool}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {}
        <section className="site-container pb-28" data-reveal>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            <ProjectLink
              href="/work/ecommerce-pipeline"
              eyebrow="Previous project"
              title="E-commerce Data Pipeline"
              direction="left"
            />

            <ProjectLink
              href="/work/aws-cloud"
              eyebrow="Next project"
              title="AWS Cloud Data Pipeline"
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

function BucketCard({
  title,
  subtitle,
  data,
  max,
}: {
  title: string;
  subtitle: string;
  data: { label: string; value: number }[];
  max: number;
}) {
  return (
    <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
      <p className="text-sm font-medium text-white/85">{title}</p>

      <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-white/30">
        {subtitle}
      </p>

      <div className="mt-8 space-y-5">
        {data.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-[10px]">
              <span className="text-white/50">{item.label}</span>
              <span className="text-white/75">{item.value}</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="surface-card min-h-[190px] p-7 md:p-8">
      <div className="text-[var(--orange-light)]">{icon}</div>

      <p className="mt-10 text-xl font-medium tracking-[-0.03em] text-white/85">
        {title}
      </p>

      <p className="body-copy mt-4 text-sm">{text}</p>
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