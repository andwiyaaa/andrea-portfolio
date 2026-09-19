"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Cloud,
  Database,
  LockKeyhole,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const pipeline = [
  {
    number: "01",
    title: "Amazon S3",
    description:
      "Stored raw and processed datasets in an S3 bucket with public access blocked and SSE-S3 encryption.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Amazon EC2",
    description:
      "Provisioned an Ubuntu EC2 instance and connected through SSH to run the data pipeline.",
    icon: Server,
  },
  {
    number: "03",
    title: "Python",
    description:
      "Extracted, transformed, and validated 1,000 records before loading the final dataset.",
    icon: Terminal,
  },
  {
    number: "04",
    title: "PostgreSQL",
    description:
      "Loaded the transformed records into PostgreSQL for structured SQL analysis.",
    icon: Database,
  },
];

const status = [
  { label: "Completed", value: 596, percentage: 59.6 },
  { label: "Cancelled", value: 213, percentage: 21.3 },
  { label: "Pending", value: 191, percentage: 19.1 },
];

const categories = [
  { label: "Gaming", value: 1862644.0 },
  { label: "Office Supplies", value: 1814210.79 },
  { label: "Home Appliances", value: 1769438.33 },
  { label: "Mobile Accessories", value: 1701575.01 },
  { label: "Smart Devices", value: 1635452.71 },
  { label: "Audio", value: 1543245.43 },
  { label: "Laptop Accessories", value: 1483314.62 },
  { label: "Wearables", value: 1441961.39 },
];

const payments = [
  { label: "Credit Card", orders: 135, value: 2833675.0, aov: 20990.19 },
  { label: "Maya", orders: 115, value: 2737800.63, aov: 23806.96 },
  { label: "Bank Transfer", orders: 114, value: 2712938.09, aov: 23797.7 },
  { label: "GCash", orders: 120, value: 2637898.79, aov: 21982.49 },
  { label: "Debit Card", orders: 112, value: 2329529.77, aov: 20799.37 },
];

const monthly = [
  { month: "Jan", orders: 326, amount: 7141390.9 },
  { month: "Feb", orders: 324, amount: 6962005.42 },
  { month: "Mar", orders: 350, amount: 7554852.04 },
];

export default function AwsCloudPage() {
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
                  AWS hands-on project
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="display-text mt-7"
              >
                Cloud Data
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
              A hands-on AWS pipeline connecting Amazon S3, EC2, Python, and
              PostgreSQL to move data from cloud storage into a validated
              analytical database.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-4">
            <Metric value="1,000" label="Records processed" />
            <Metric value="12" label="Validation checks" />
            <Metric value="100%" label="Checks passed" />
            <Metric value="US-West-2" label="AWS region" />
          </div>
        </section>

        {/* Architecture */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="01" label="Architecture" />

          <h2 className="section-title mt-6 max-w-3xl">
            From cloud storage to an analytical database.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="surface-card min-h-[255px] p-7 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-[var(--orange-light)]"
                    />

                    <span className="text-[9px] tracking-[0.16em] text-white/25">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="body-copy mt-4 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.13em] text-white/30">
            <span>S3</span>
            <ArrowUpRight size={11} />
            <span>EC2</span>
            <ArrowUpRight size={11} />
            <span>Python</span>
            <ArrowUpRight size={11} />
            <span>PostgreSQL</span>
          </div>
        </section>

        {/* AWS configuration */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <SectionHeading number="02" label="Cloud environment" />

              <h2 className="section-title mt-7">
                The infrastructure was built inside AWS.
              </h2>

              <div className="mt-9 space-y-4">
                <ConfigRow label="Region" value="us-west-2 · Oregon" />
                <ConfigRow label="Storage" value="Amazon S3" />
                <ConfigRow label="Compute" value="Ubuntu EC2" />
                <ConfigRow label="Database" value="PostgreSQL 18.6" />
                <ConfigRow label="Bucket access" value="Public access blocked" />
              </div>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <LockKeyhole
                  size={19}
                  strokeWidth={1.4}
                  className="text-[var(--orange-light)]"
                />

                <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Storage configuration
                </p>
              </div>

              <div className="mt-9 grid gap-3">
                {[
                  "SSE-S3 encryption",
                  "Block public access",
                  "Raw + processed objects",
                  "Versioning disabled",
                  "Bucket Key disabled",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--surface-3)] px-4 py-4"
                  >
                    <span className="text-xs text-white/55">{item}</span>

                    <ShieldCheck
                      size={15}
                      className="text-white/35"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processing */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="03" label="Processing" />

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                Pipeline output
              </p>

              <div className="mt-8 space-y-7">
                <ProcessingMetric value="1,000" label="Input records" />
                <ProcessingMetric value="1,000" label="Transformed records" />
                <ProcessingMetric value="1,000" label="PostgreSQL rows" />
                <ProcessingMetric value="1,000" label="Processed records uploaded" />
              </div>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                Validation
              </p>

              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {[
                  "Row count",
                  "Required fields",
                  "Data types",
                  "Duplicate records",
                  "Customer IDs",
                  "Order IDs",
                  "Amount fields",
                  "Date fields",
                  "Status values",
                  "Category values",
                  "Payment values",
                  "Final structure",
                ].map((check, index) => (
                  <div
                    key={check}
                    className="flex items-center gap-3 border border-[var(--line)] bg-[var(--surface-3)] px-4 py-4"
                  >
                    <span className="text-[9px] text-[var(--orange-light)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-white/50">{check}</span>

                    <span className="ml-auto text-[9px] text-white/30">
                      PASS
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="04" label="Dataset overview" />

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <p className="text-sm font-medium text-white/85">
                Order status
              </p>

              <p className="body-copy mt-3 text-sm">
                1,000 records after the transformation stage.
              </p>

              <div className="mt-9 space-y-6">
                {status.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-[10px]">
                      <span className="text-white/45">{item.label}</span>
                      <span className="text-white/75">
                        {item.value} · {item.percentage}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <p className="text-sm font-medium text-white/85">
                Monthly transaction amount
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {monthly.map((item) => (
                  <div
                    key={item.month}
                    className="border border-[var(--line)] bg-[var(--surface-3)] p-5"
                  >
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[var(--orange-light)]">
                      {item.month}
                    </span>

                    <p className="mt-6 text-2xl font-medium tracking-[-0.04em]">
                      {formatCurrency(item.amount)}
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-white/30">
                      {item.orders} orders
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[9px] leading-5 text-white/25">
                Monthly amounts represent transaction amounts across all
                statuses, not completed-only revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Revenue */}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card surface-card-raised overflow-hidden rounded-[var(--radius-lg)] p-7 md:p-10">
            <SectionHeading number="05" label="Financial view" />

            <div className="mt-8 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                  Completed-only result
                </p>

                <p className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                  ₱13.25M
                </p>

                <p className="body-copy mt-5 max-w-md text-sm">
                  Completed orders produced ₱13,251,842.28 in net revenue
                  after an average discount of 5.63%.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <MiniMetric value="₱14.04M" label="Gross amount" />
                  <MiniMetric value="₱784K" label="Discounts" />
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                  Important distinction
                </p>

                <div className="mt-5 rounded-2xl border border-[var(--orange)]/20 bg-[var(--orange)]/[0.05] p-6">
                  <p className="text-sm leading-6 text-white/65">
                    The overall dataset contains{" "}
                    <span className="text-white/90">₱21,658,248.36</span> in
                    net transaction amount across all statuses. For revenue
                    analysis, the completed-only figure of{" "}
                    <span className="text-white/90">₱13,251,842.28</span> is
                    used instead.
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-3)] p-6">
                  <p className="text-xs uppercase tracking-[0.13em] text-white/35">
                    Completed order AOV
                  </p>

                  <p className="mt-4 text-2xl font-medium tracking-[-0.04em]">
                    ₱22,234.63
                  </p>

                  <p className="mt-2 text-[9px] text-white/25">
                    Derived from completed-only net revenue and 596 completed
                    orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="06" label="Completed categories" />

          <div className="mt-10 surface-card rounded-[var(--radius-lg)] p-6 md:p-9">
            <div className="space-y-6">
              {categories.map((item) => {
                const max = categories[0].value;
                const width = (item.value / max) * 100;

                return (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-[10px]">
                      <span className="text-white/50">{item.label}</span>
                      <span className="shrink-0 text-white/70">
                        {formatCurrency(item.value)}
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Payments */}
        <section className="site-container pb-32" data-reveal>
          <SectionHeading number="07" label="Payment analysis" />

          <div className="mt-10 overflow-x-auto overflow-y-hidden rounded-[var(--radius-lg)] border border-[var(--line)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse">
                <thead>
                  <tr className="bg-[var(--surface-3)] text-left text-[9px] uppercase tracking-[0.14em] text-white/30">
                    <th className="px-5 py-4 font-normal">Payment</th>
                    <th className="px-5 py-4 font-normal">Orders</th>
                    <th className="px-5 py-4 font-normal">Net amount</th>
                    <th className="px-5 py-4 font-normal">AOV</th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((item) => (
                    <tr
                      key={item.label}
                      className="border-t border-[var(--line)] bg-[var(--surface-2)]"
                    >
                      <td className="px-5 py-5 text-sm text-white/70">
                        {item.label}
                      </td>
                      <td className="px-5 py-5 text-sm text-white/45">
                        {item.orders}
                      </td>
                      <td className="px-5 py-5 text-sm text-white/65">
                        {formatCurrency(item.value)}
                      </td>
                      <td className="px-5 py-5 text-sm text-white/65">
                        {formatCurrency(item.aov)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security / learning */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <ShieldCheck
                size={21}
                strokeWidth={1.4}
                className="text-[var(--orange-light)]"
              />

              <h2 className="section-title mt-8">
                Security was part of the pipeline.
              </h2>

              <p className="body-copy mt-5 text-sm">
                The project included S3 public-access controls and server-side
                encryption while keeping credentials out of the portfolio
                source code.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-9">
              <Cloud
                size={21}
                strokeWidth={1.4}
                className="text-[var(--orange-light)]"
              />

              <h2 className="section-title mt-8">
                Cloud infrastructure became part of the data workflow.
              </h2>

              <p className="body-copy mt-5 text-sm">
                Instead of treating AWS as a separate topic, this project
                connected storage, compute, processing, database loading, and
                analytics into one working flow.
              </p>
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
              Build the pipeline,
              <span className="orange-gradient"> then understand the data.</span>
            </h2>

            <p className="relative mt-7 max-w-2xl text-sm leading-7 text-white/45">
              This project brought together cloud infrastructure, Linux,
              Python, PostgreSQL, data validation, and SQL analysis in one
              end-to-end workflow.
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
                "Amazon S3",
                "Amazon EC2",
                "Ubuntu",
                "Linux",
                "Python",
                "PostgreSQL",
                "SQL",
                "SSH",
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
              href="/work/api-pipeline"
              eyebrow="Previous project"
              title="API Data Pipeline"
              direction="left"
            />

            <ProjectLink
              href="/work/service-desk"
              eyebrow="Next project"
              title="Service Desk Analytics"
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

function ConfigRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[var(--line)] pb-4">
      <span className="text-[10px] uppercase tracking-[0.12em] text-white/30">
        {label}
      </span>

      <span className="text-right text-xs text-white/65">{value}</span>
    </div>
  );
}

function ProcessingMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-3xl font-medium tracking-[-0.05em]">{value}</p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.13em] text-white/30">
        {label}
      </p>
    </div>
  );
}

function MiniMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border border-[var(--line)] bg-[var(--surface-3)] p-4">
      <p className="text-lg font-medium tracking-[-0.03em]">{value}</p>

      <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-white/30">
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

function formatCurrency(value: number) {
  return `₱${value.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}