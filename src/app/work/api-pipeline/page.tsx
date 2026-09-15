"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";

const pipelineSteps = [
  {
    number: "01",
    title: "Extract",
    description: "Retrieve posts from the REST API and preserve the response as raw JSON.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Transform",
    description: "Standardize fields, clean text, remove duplicates, and create content metrics.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Validate",
    description: "Run automated checks before the dataset reaches the database.",
    icon: Check,
  },
  {
    number: "04",
    title: "Load",
    description: "Persist the validated dataset in PostgreSQL using SQLAlchemy.",
    icon: Database,
  },
  {
    number: "05",
    title: "Analyze",
    description: "Use SQL to explore content volume, length distributions, and relationships.",
    icon: Terminal,
  },
];

const validationChecks = [
  "Dataset contains records",
  "Required columns are present",
  "Post IDs are unique",
  "Required values are not missing",
  "Post IDs are valid",
  "User IDs are valid",
  "Titles are not empty",
  "Post bodies are not empty",
  "Title lengths are correct",
  "Body lengths are correct",
];

const technologies = [
  "Python",
  "Pandas",
  "PostgreSQL",
  "SQL",
  "REST API",
  "JSON",
  "SQLAlchemy",
  "Git",
];

export default function ApiPipelinePage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#f4f4f0]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#66e7e1]/7 blur-[130px]" />
        <div className="absolute right-[4%] top-[34%] h-[380px] w-[380px] rounded-full bg-[#9d8cff]/6 blur-[130px]" />
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
              API → Data
              <br />
              <span className="text-white/45">Pipeline</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
              An end-to-end pipeline that turns REST API data into a validated
              PostgreSQL dataset ready for analysis.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Python", "Pandas", "PostgreSQL", "SQL", "REST API"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/55"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-7">
            <div className="flex items-center gap-3 text-sm text-white/40">
              <Server size={16} />
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
                  100
                </div>
                <div className="mt-1 text-xs text-white/35">
                  records processed
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  10
                </div>
                <div className="mt-1 text-xs text-white/35">
                  unique users
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  0
                </div>
                <div className="mt-1 text-xs text-white/35">
                  duplicate IDs
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium tracking-[-0.04em]">
                  0.076
                </div>
                <div className="mt-1 text-xs text-white/35">
                  title/body correlation
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
              From endpoint to database.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/45">
              Each stage has a clear responsibility, making the pipeline easier
              to test, maintain, and rerun.
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
              02 / Data Engineering
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Clean data before it reaches the database.
            </h2>
          </div>

          <div className="space-y-10">
            <div className="border-l border-[#66e7e1]/30 pl-6">
              <div className="text-sm font-medium text-[#66e7e1]">
                Extraction
              </div>
              <p className="mt-2 text-base leading-7 text-white/45">
                The pipeline requests the `/posts` endpoint, verifies the HTTP
                response, and stores the raw response as JSON so the original
                source data remains available.
              </p>
            </div>

            <div className="border-l border-white/15 pl-6">
              <div className="text-sm font-medium text-white/75">
                Transformation
              </div>
              <p className="mt-2 text-base leading-7 text-white/45">
                Column names are standardized, IDs are converted to integers,
                duplicate records are removed, required fields are checked,
                text is trimmed, and title/body length metrics are generated.
              </p>
            </div>

            <div className="border-l border-white/15 pl-6">
              <div className="text-sm font-medium text-white/75">
                Loading
              </div>
              <p className="mt-2 text-base leading-7 text-white/45">
                The validated CSV is loaded into PostgreSQL using SQLAlchemy.
                The loader also verifies that the number of rows persisted in
                the database matches the processed dataset.
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
                Validation is part of the pipeline.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-white/45">
                The project validates the dataset before loading and performs a
                second set of checks directly against PostgreSQL.
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
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              04 / SQL Analytics
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Once the data is reliable, ask better questions.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-xs uppercase tracking-[0.16em] text-white/30">
                Content volume
              </div>
              <div className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                1,823
              </div>
              <p className="mt-2 text-sm leading-6 text-white/40">
                total body characters for user 4, the highest among users.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-xs uppercase tracking-[0.16em] text-white/30">
                Longest post
              </div>
              <div className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                225
              </div>
              <p className="mt-2 text-sm leading-6 text-white/40">
                characters in the longest post body.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-xs uppercase tracking-[0.16em] text-white/30">
                Title distribution
              </div>
              <div className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                47 / 47
              </div>
              <p className="mt-2 text-sm leading-6 text-white/40">
                medium and long titles respectively.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-xs uppercase tracking-[0.16em] text-white/30">
                Correlation
              </div>
              <div className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                0.076
              </div>
              <p className="mt-2 text-sm leading-6 text-white/40">
                very weak linear relationship between title and body length.
              </p>
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
                  Built with practical data tools.
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
                  href="https://github.com/andwiyaaa/andrea-portfolio/tree/main/projects/api-data-pipeline"
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
            <span>API → Data Pipeline</span>
            <span>Data · Systems · Cloud</span>
          </div>
        </div>
      </section>
    </main>
  );
}