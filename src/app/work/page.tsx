"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const projects = [
  {
    number: "01",
    title: "FIT.LY",
    subtitle: "Churn Analysis",
    description:
      "Explored customer behavior, engagement, support activity, and churn patterns to identify signals of early disengagement.",
    tags: ["Data Analytics", "SQL", "Python", "Power BI"],
    href: "/work/fitly-churn",
    type: "Learning project",
  },
  {
    number: "02",
    title: "E-COMMERCE",
    subtitle: "Data Pipeline",
    description:
      "Built an end-to-end data pipeline that cleans, validates, and loads e-commerce order data into PostgreSQL for analysis.",
    tags: ["Python", "Pandas", "PostgreSQL", "SQL"],
    href: "/work/ecommerce-pipeline",
    type: "Engineering project",
  },
  {
    number: "03",
    title: "API DATA",
    subtitle: "API → Database Pipeline",
    description:
      "Built a small ETL workflow that extracts JSON data from a public REST API, transforms it, validates it, and loads it into PostgreSQL.",
    tags: ["Python", "REST API", "PostgreSQL", "ETL"],
    href: "/work/api-pipeline",
    type: "Engineering project",
  },
  {
    number: "04",
    title: "AWS CLOUD",
    subtitle: "Cloud Data Pipeline",
    description:
      "Designed and implemented a hands-on cloud pipeline using Amazon S3, EC2, Python, and PostgreSQL.",
    tags: ["AWS", "S3", "EC2", "PostgreSQL"],
    href: "/work/aws-cloud",
    type: "Cloud project",
  },
  {
    number: "05",
    title: "SERVICE DESK",
    subtitle: "Support Analytics",
    description:
      "Analyzed a synthetic service desk dataset to examine ticket volume, resolution, SLA performance, satisfaction, and backlog.",
    tags: ["Python", "SQL", "Analytics", "Data Quality"],
    href: "/work/service-desk",
    type: "Analytics project",
  },
];

const capabilities = [
  "Data Analysis",
  "Data Engineering",
  "Systems Analysis",
  "Technical Support",
  "QA / Software Testing",
  "Cloud Computing",
];

export default function WorkPage() {
  return (
    <main className="site-shell">
      <SiteNav />

      <div className="relative z-10">
        {}
        <section className="site-container pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[var(--orange)]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Selected work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.04 }}
              className="display-text max-w-4xl"
            >
              Data, systems,{" "}
              <span className="orange-gradient">and cloud.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="body-copy mt-7 max-w-2xl text-base md:text-lg"
            >
              A collection of projects exploring data analysis, engineering,
              cloud infrastructure, systems, and technical problem-solving.
            </motion.p>
          </div>
        </section>

        {}
        <section className="site-container pb-24" data-reveal="fade">
          <div className="reveal-stagger border-t border-[var(--line)]">
            {projects.map((project, index) => (
              <div
                key={project.href}
                className="group border-b border-[var(--line)]"
                data-reveal
                style={{ "--i": index } as CSSProperties}
              >
                <Link
                  href={project.href}
                  className="block py-7 md:py-8 lg:py-9"
                >
                  <div className="grid gap-5 lg:grid-cols-[56px_minmax(0,1fr)_minmax(260px,390px)_36px] lg:items-center lg:gap-8">
                    {}
                    <div className="self-start pt-1 text-[10px] tracking-[0.16em] text-white/30 lg:self-auto lg:pt-0">
                      {project.number}
                    </div>

                    {}
                    <div className="min-w-0">
                      <p className="mb-1.5 text-[9px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
                        {project.type}
                      </p>

                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h2 className="text-2xl font-medium tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[var(--orange-light)] md:text-3xl">
                          {project.title}
                        </h2>

                        <span className="text-sm text-white/45 md:text-base">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>

                    {}
                    <div className="lg:pr-2">
                      <p className="body-copy text-sm leading-6">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[var(--line)] px-2.5 py-1 text-[8px] uppercase tracking-[0.11em] text-white/42 transition-colors duration-300 group-hover:border-[var(--line-strong)] group-hover:text-white/55"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {}
                    <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:border-[var(--orange)] group-hover:bg-[var(--orange)] group-hover:text-white lg:flex">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="site-container pb-24 md:pb-28" data-reveal>
          <div className="relative overflow-hidden border-y border-[var(--line)] py-8 md:py-10">
            <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--orange)]/8 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-14">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
                  What I work with
                </span>

                <h2 className="section-title mt-3 max-w-md">
                  Technical interests across the stack.
                </h2>
              </div>

              <div className="grid grid-cols-1 border-t border-[var(--line)] sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className={`flex min-h-[54px] items-center justify-between border-b border-[var(--line)] py-3.5 ${
                      index % 2 === 0
                        ? "sm:border-r sm:pr-5"
                        : "sm:pl-5"
                    }`}
                  >
                    <span className="text-sm text-white/68">
                      {capability}
                    </span>

                    <span className="text-[9px] tracking-[0.12em] text-white/22">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="site-container pb-24" data-reveal>
          <div className="relative overflow-hidden border-t border-[var(--line)] pt-12 md:pt-16">
            <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-[var(--orange)]/8 blur-[100px]" />

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/32">
              Have a problem worth solving?
            </p>

            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
              <h2 className="page-title work-cta-title max-w-3xl">
                Let&apos;s build something{" "}
                <span className="orange-gradient">useful.</span>
              </h2>

              <Link
                href="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[var(--line-strong)] pb-2 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:border-[var(--orange)] hover:text-white"
              >
                Get in touch

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {}
        <SiteFooter />
      </div>
    </main>
  );
}