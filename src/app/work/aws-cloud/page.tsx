"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Cloud,
  Database,
  FileCheck2,
  LockKeyhole,
  Server,
  ShieldCheck,
  Terminal,
  Upload,
} from "lucide-react";

const githubUrl =
  "https://github.com/andwiyaaa/andrea-portfolio/tree/main/projects/aws-cloud-data-pipeline";

const pipelineSteps = [
  {
    number: "01",
    title: "Amazon S3",
    description:
      "Raw synthetic order data is stored in a private S3 bucket before processing.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Python ETL",
    description:
      "Python extracts the raw CSV, cleans the records, recalculates financial fields, and prepares the processed dataset.",
    icon: Terminal,
  },
  {
    number: "03",
    title: "Data validation",
    description:
      "Automated checks verify duplicates, missing values, invalid quantities, prices, discounts, and calculated amounts.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "PostgreSQL",
    description:
      "Validated records are loaded into PostgreSQL for structured querying and analytics.",
    icon: Database,
  },
];

const metrics = [
  {
    value: "1,000",
    label: "Orders processed",
  },
  {
    value: "12 / 12",
    label: "Python checks passed",
  },
  {
    value: "10 / 10",
    label: "SQL quality checks passed",
  },
  {
    value: "15",
    label: "Processed columns",
  },
];

const validationChecks = [
  "Duplicate order IDs",
  "Missing required values",
  "Invalid quantities",
  "Invalid unit prices",
  "Invalid discounts",
  "Invalid order statuses",
  "Incorrect gross amounts",
  "Incorrect discount amounts",
  "Incorrect net amounts",
];

const analytics = [
  {
    value: "1,000",
    label: "Orders analyzed",
  },
  {
    value: "246",
    label: "Unique customers",
  },
  {
    value: "3,018",
    label: "Items sold",
  },
  {
    value: "596",
    label: "Completed orders",
  },
  {
    value: "₱13.25M",
    label: "Completed net revenue",
  },
  {
    value: "₱21,658",
    label: "Dataset average order value",
  },
];

const engineeringPractices = [
  {
    icon: LockKeyhole,
    title: "Credential separation",
    description:
      "AWS credentials and database passwords stay outside version-controlled source code.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled access",
    description:
      "The S3 bucket uses Block Public Access and server-side encryption with S3-managed keys.",
  },
  {
    icon: FileCheck2,
    title: "Quality gates",
    description:
      "Validation runs before database loading so bad records do not silently move downstream.",
  },
  {
    icon: Upload,
    title: "Processed output",
    description:
      "The cleaned dataset is published back to S3 for downstream access and reuse.",
  },
];

export default function AwsCloudPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[10%] top-[8%] h-80 w-80 rounded-full bg-aqua/[0.07] blur-[120px]" />

        <div className="absolute right-[5%] top-[35%] h-96 w-96 rounded-full bg-violet/[0.06] blur-[140px]" />

        <div className="absolute bottom-[5%] left-[35%] h-72 w-72 rounded-full bg-ice/[0.04] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm text-muted transition hover:text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs text-aqua transition group-hover:border-aqua/30 group-hover:bg-aqua/[0.08]">
            AID
          </span>

          <span className="hidden sm:inline">Andrea I. Ducosin</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-muted">
          <Link
            href="/work"
            className="transition hover:text-foreground"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="transition hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16 lg:px-12">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to selected work
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* Hero copy */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {["AWS", "S3", "EC2", "Python", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-7 max-w-4xl text-5xl font-medium tracking-[-0.04em] md:text-6xl lg:text-7xl"
            >
              AWS cloud
              <br />
              data pipeline.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-2xl text-base leading-7 text-muted-strong md:text-lg md:leading-8"
            >
              A hands-on AWS project that moves data from Amazon S3 through
              Python ETL and validation into PostgreSQL, then publishes the
              processed dataset back to S3.
            </motion.p>

            {/* GitHub */}
            <motion.a
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-4 py-2.5 text-sm font-medium text-aqua transition hover:border-aqua/60 hover:bg-aqua/15"
            >
              View project on GitHub
              <ArrowUpRight size={15} />
            </motion.a>
          </div>

          {/* Architecture card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl md:p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Pipeline architecture
              </span>

              <span className="flex items-center gap-2 text-xs text-aqua">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
                Operational flow
              </span>
            </div>

            <div className="space-y-3">
              {pipelineSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.number}>
                    <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-aqua">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-muted">
                            {step.number}
                          </span>

                          <h2 className="text-sm font-medium">
                            {step.title}
                          </h2>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index < pipelineSteps.length - 1 && (
                      <div className="ml-9 h-3 w-px bg-white/10" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-white/8 bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/8 md:grid-cols-4 md:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-6 py-7 md:px-8 md:py-9">
              <div className="text-2xl font-medium tracking-tight md:text-3xl">
                {metric.value}
              </div>

              <div className="mt-2 text-xs text-muted md:text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-aqua">
              01 / Overview
            </span>

            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              From cloud storage to structured analytics.
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-muted-strong">
            <p>
              This project demonstrates an end-to-end cloud data workflow
              using Amazon S3, an EC2 Linux environment, Python, and
              PostgreSQL.
            </p>

            <p>
              The pipeline starts with synthetic e-commerce orders stored in
              S3. Python retrieves and transforms the raw dataset, automated
              validation checks act as a quality gate, and the clean records
              are loaded into PostgreSQL for SQL-based analysis.
            </p>

            <p>
              After processing, the cleaned dataset is uploaded to S3 again,
              creating a simple cloud-based flow from raw data to an
              analytics-ready output.
            </p>
          </div>
        </div>
      </section>

      {/* Data workflow */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl md:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-aqua">
                Data workflow
              </span>

              <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                Extract → transform → validate → load → publish
              </h2>
            </div>

            <div className="font-mono text-xs text-muted">
              S3 / EC2 / PostgreSQL
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Extract", "Download raw orders from S3."],
              ["02", "Transform", "Clean and standardize records."],
              ["03", "Validate", "Run automated quality checks."],
              ["04", "Load", "Insert validated rows into PostgreSQL."],
              ["05", "Publish", "Upload the processed dataset to S3."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/8 bg-black/20 p-5"
              >
                <span className="font-mono text-[10px] text-aqua">
                  {number}
                </span>

                <h3 className="mt-4 text-sm font-medium">{title}</h3>

                <p className="mt-2 text-xs leading-5 text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Quality */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-aqua">
              02 / Data quality
            </span>

            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              Quality checks before the data moves downstream.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
              Validation is treated as a gate rather than an afterthought.
              The pipeline stops when records fail the defined checks.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl md:p-8">
            <div className="flex items-center justify-between border-b border-white/8 pb-5">
              <div>
                <div className="text-sm font-medium">
                  Validation results
                </div>

                <div className="mt-1 text-xs text-muted">
                  12 Python checks passed
                </div>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-aqua/20 bg-aqua/10 text-aqua">
                <Check size={18} />
              </div>
            </div>

            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {validationChecks.map((check) => (
                <div
                  key={check}
                  className="flex items-center gap-3 text-sm text-muted-strong"
                >
                  <Check size={15} className="shrink-0 text-aqua" />
                  {check}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="border-y border-white/8 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-aqua">
                03 / Analytics
              </span>

              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                The pipeline ends with data that can actually be queried.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
                PostgreSQL provides the structured layer for exploring
                customer, product, order, payment, and financial patterns.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
                {analytics.map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#0b0c10] p-6 md:p-7"
                  >
                    <div className="text-2xl font-medium tracking-tight md:text-3xl">
                      {item.value}
                    </div>

                    <div className="mt-2 text-xs leading-5 text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Highest completed category
                  </div>

                  <div className="mt-3 text-lg font-medium">
                    Gaming
                  </div>

                  <div className="mt-1 text-sm text-aqua">
                    ₱1,862,644.00
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Highest completed category AOV
                  </div>

                  <div className="mt-3 text-lg font-medium">
                    Smart Devices
                  </div>

                  <div className="mt-1 text-sm text-aqua">
                    ₱23,702.21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Practices */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-aqua">
            04 / Engineering practices
          </span>

          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            Built around the habits that matter in real data workflows.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engineeringPractices.map((practice) => {
            const Icon = practice.icon;

            return (
              <div
                key={practice.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/15 hover:bg-white/[0.04] md:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-aqua transition group-hover:border-aqua/20 group-hover:bg-aqua/[0.06]">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-base font-medium">
                  {practice.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  {practice.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pipeline code */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#07080b]">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-aqua" />

              <span className="font-mono text-xs text-muted">
                run_pipeline.py
              </span>
            </div>

            <span className="font-mono text-[10px] text-muted">
              automated workflow
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="border-b border-white/8 p-6 font-mono text-xs leading-7 text-muted md:p-8 lg:border-b-0 lg:border-r">
              <div>
                <span className="text-violet">extract</span>
                <span className="text-muted"> → </span>
                <span className="text-aqua">transform</span>
              </div>

              <div>
                <span className="text-aqua">transform</span>
                <span className="text-muted"> → </span>
                <span className="text-ice">validate</span>
              </div>

              <div>
                <span className="text-ice">validate</span>
                <span className="text-muted"> → </span>
                <span className="text-violet">load</span>
              </div>

              <div>
                <span className="text-violet">load</span>
                <span className="text-muted"> → </span>
                <span className="text-aqua">publish</span>
              </div>

              <div className="mt-5 border-t border-white/8 pt-5 text-muted">
                if validation fails:
              </div>

              <div className="text-aqua">
                stop_pipeline()
              </div>

              <div className="mt-5 border-t border-white/8 pt-5 text-muted">
                else:
              </div>

              <div className="text-aqua">
                load_to_postgresql()
              </div>

              <div className="text-aqua">
                upload_processed_to_s3()
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Architecture
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["S3", "Raw data storage"],
                  ["EC2", "Linux + Python ETL"],
                  ["PostgreSQL", "Structured analytics layer"],
                  ["S3", "Processed output"],
                ].map(([name, description], index) => (
                  <div
                    key={`${name}-${index}`}
                    className="flex items-center justify-between gap-4 border-b border-white/8 pb-3"
                  >
                    <span className="text-sm font-medium">{name}</span>

                    <span className="text-right text-xs text-muted">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Context */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
        <div className="rounded-3xl border border-violet/15 bg-violet/[0.035] p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">
                Project context
              </span>

              <h2 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                A hands-on cloud learning project.
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-strong">
                This project uses synthetic e-commerce data and an AWS
                training environment to demonstrate cloud infrastructure,
                Linux operations, ETL, data validation, database loading, and
                cloud storage workflows.
              </p>
            </div>

            <div className="max-w-md">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Production considerations
              </div>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>• IAM least-privilege roles</li>
                <li>• Secrets Manager or Parameter Store</li>
                <li>• Monitoring and alerting</li>
                <li>• Workflow orchestration</li>
                <li>• Infrastructure as Code</li>
                <li>• Scalable compute and storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            All selected work
          </Link>

          <Link
            href="/work/service-desk"
            className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
          >
            Next project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}