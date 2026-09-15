"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  ShoppingBag,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";

const pipelineSteps = [
  {
    number: "01",
    title: "Generate",
    description:
      "Create a realistic e-commerce order dataset with intentional quality issues.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Extract",
    description:
      "Load the raw order data and prepare it for transformation.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Transform",
    description:
      "Remove duplicates, handle invalid records, and calculate financial fields.",
    icon: Terminal,
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Run automated data-quality checks before loading the database.",
    icon: Check,
  },
  {
    number: "05",
    title: "Load",
    description:
      "Store the cleaned dataset in PostgreSQL for downstream analytics.",
    icon: Database,
  },
];

const validationChecks = [
  "Duplicate orders",
  "Missing required values",
  "Invalid quantities",
  "Invalid prices",
  "Invalid discounts",
  "Invalid order status",
  "Incorrect gross amounts",
  "Incorrect discount amounts",
  "Incorrect net amounts",
];

const technologies = [
  "Python",
  "Pandas",
  "PostgreSQL",
  "SQL",
  "SQLAlchemy",
  "NumPy",
  "Git",
];

const categoryResults = [
  {
    category: "Fashion",
    revenue: "901,401.50",
    aov: "6,880.93",
  },
  {
    category: "Electronics",
    revenue: "855,042.20",
    aov: "6,577.25",
  },
  {
    category: "Home",
    revenue: "768,705.33",
    aov: "6,925.27",
  },
  {
    category: "Sports",
    revenue: "698,546.80",
    aov: "6,127.60",
  },
  {
    category: "Beauty",
    revenue: "658,056.98",
    aov: "6,208.08",
  },
];

export default function EcommercePipelinePage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#f4f4f0]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#66e7e1]/7 blur-[130px]" />
        <div className="absolute right-[4%] top-[36%] h-[400px] w-[400px] rounded-full bg-[#9d8cff]/6 blur-[130px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:border-white/20 group-hover:bg-white/[0.07]">
            <span className="text-sm font-semibold tracking-[-0.04em]">
              AID
            </span>
          </span>
          <span>Andrea I. Ducosin</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
          <Link href="/work" className="transition hover:text-white">
            Work
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12 lg:px-12">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to selected work
        </Link>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#66e7e1]">
              <span className="h-px w-8 bg-[#66e7e1]/60" />
              Data Engineering
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              E-commerce
              <br />
              <span className="text-white/45">Data Pipeline</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
              A Python and PostgreSQL pipeline that cleans, validates, and
              transforms raw order data into an analytics-ready dataset.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Python", "Pandas", "PostgreSQL", "SQL", "ETL"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-7">
            <div className="flex items-center gap-3 text-sm text-white/40">
              <Database size={16} />
              Pipeline status
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#66e7e1] shadow-[0_0_18px_rgba(102,231,225,0.65)]" />
              <span className="text-lg text-white/85">
                Completed successfully
              </span>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  982
                </div>
                <div className="mt-1 text-xs text-white/35">
                  cleaned orders
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  ₱6.48M
                </div>
                <div className="mt-1 text-xs text-white/35">
                  total revenue
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  246
                </div>
                <div className="mt-1 text-xs text-white/35">
                  unique customers
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  ₱6,593.88
                </div>
                <div className="mt-1 text-xs text-white/35">
                  average order value
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/8 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              01 / Architecture
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              From raw orders to reliable analytics.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/45">
              The pipeline separates data generation, transformation,
              validation, persistence, and analysis into clear stages.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative rounded-2xl border border-white/10 bg-[#0b0d11]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#66e7e1]/25 hover:bg-white/[0.045]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/25">
                      {step.number}
                    </span>
                    <Icon
                      size={17}
                      className="text-white/35 transition group-hover:text-[#66e7e1]"
                    />
                  </div>

                  <h3 className="mt-10 text-lg font-medium">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {step.description}
                  </p>

                  {index < pipelineSteps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden h-px w-2 bg-white/15 md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              02 / Transformation
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              The raw dataset was intentionally imperfect.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-sm font-medium text-[#66e7e1]">
                Starting point
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-medium">1,010</div>
                  <div className="mt-1 text-xs text-white/35">
                    raw rows
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-medium">10</div>
                  <div className="mt-1 text-xs text-white/35">
                    duplicates
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-medium">18</div>
                  <div className="mt-1 text-xs text-white/35">
                    invalid prices
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l border-white/15 pl-6">
              <div className="text-sm font-medium text-white/75">
                Cleaning and standardization
              </div>

              <p className="mt-2 text-base leading-7 text-white/45">
                Duplicate records were removed, invalid or incomplete records
                were handled, missing customer identifiers were replaced, and
                fields were standardized for database loading.
              </p>
            </div>

            <div className="border-l border-white/15 pl-6">
              <div className="text-sm font-medium text-white/75">
                Financial calculations
              </div>

              <p className="mt-2 text-base leading-7 text-white/45">
                Gross amount, discount amount, and net amount were calculated
                from quantity, unit price, and discount values so the dataset
                could support consistent revenue analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-[#66e7e1]/15 bg-[#66e7e1]/[0.035] p-6">
              <div className="text-sm font-medium text-[#66e7e1]">
                Final dataset
              </div>

              <div className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                982 orders
              </div>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Ready for PostgreSQL loading and SQL analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/8 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                03 / Data Quality
              </div>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Every loaded row had to pass the checks.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-white/45">
                Validation happens before loading and is repeated against the
                PostgreSQL table after persistence.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#66e7e1]/20 bg-[#66e7e1]/8 px-4 py-2 text-sm text-[#66e7e1]">
                <Check size={15} />
                All checks passed
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {validationChecks.map((check, index) => (
                <motion.div
                  key={check}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#66e7e1]/10 text-[#66e7e1]">
                    <Check size={13} />
                  </span>

                  <span className="text-sm text-white/55">{check}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              04 / Analytics
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              The cleaned data becomes a business view.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/45">
              SQL queries were used to examine revenue, order status,
              categories, payment methods, products, and customers.
            </p>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="text-xs uppercase tracking-[0.14em] text-white/30">
                  Completed
                </div>
                <div className="mt-3 text-3xl font-medium">592</div>
                <div className="mt-1 text-xs text-white/35">
                  60.29% of orders
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="text-xs uppercase tracking-[0.14em] text-white/30">
                  Cancelled
                </div>
                <div className="mt-3 text-3xl font-medium">212</div>
                <div className="mt-1 text-xs text-white/35">
                  21.59% of orders
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="text-xs uppercase tracking-[0.14em] text-white/30">
                  Pending
                </div>
                <div className="mt-3 text-3xl font-medium">178</div>
                <div className="mt-1 text-xs text-white/35">
                  18.13% of orders
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-white/10 px-5 py-4 text-xs uppercase tracking-[0.14em] text-white/30">
                <span>Category</span>
                <span>Revenue</span>
                <span>AOV</span>
              </div>

              {categoryResults.map((item) => (
                <div
                  key={item.category}
                  className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-white/6 px-5 py-4 last:border-0"
                >
                  <span className="text-sm text-white/65">
                    {item.category}
                  </span>

                  <span className="text-sm text-white/50">
                    ₱{item.revenue}
                  </span>

                  <span className="text-sm text-white/40">
                    ₱{item.aov}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                  05 / Stack
                </div>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                  Built for repeatable ETL.
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/55"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href="https://github.com/andwiyaaa/andrea-portfolio/tree/main/projects/ecommerce-data-pipeline"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#66e7e1] px-5 py-3 text-sm font-medium text-[#071014] transition hover:scale-[1.02]"
                >
                  View source
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  More projects
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/8 pt-7 text-xs text-white/25">
            <span>E-commerce Data Pipeline</span>
            <span>Data · Systems · Cloud</span>
          </div>
        </div>
      </section>
    </main>
  );
}