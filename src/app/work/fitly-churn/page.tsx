"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const engagementData = [
  { events: "0", churnRate: 53.9 },
  { events: "1", churnRate: 21.4 },
  { events: "2", churnRate: 9.1 },
  { events: "3", churnRate: 5.8 },
  { events: "4", churnRate: 2.9 },
  { events: "5", churnRate: 0 },
];

const planData = [
  { name: "Free", rate: 41.0 },
  { name: "Enterprise", rate: 26.1 },
  { name: "Basic", rate: 23.7 },
  { name: "Pro", rate: 22.4 },
];

const supportData = [
  {
    label: "Not churned",
    tickets: "2.23",
    resolution: "6.66h",
  },
  {
    label: "Churned",
    tickets: "2.45",
    resolution: "18.69h",
  },
];

const approach = [
  {
    number: "01",
    title: "Combine",
    description:
      "Brought three customer-related datasets together into one analysis-ready view.",
  },
  {
    number: "02",
    title: "Clean",
    description:
      "Checked records, standardized fields, and prepared the data for analysis.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Examined engagement, subscription plans, and support activity against churn.",
  },
  {
    number: "04",
    title: "Interpret",
    description:
      "Translated the observed patterns into a practical customer-retention signal.",
  },
];

export default function FitlyChurnPage() {
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
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[var(--orange)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
                  Learning project
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.05 }}
                className="display-text mt-7"
              >
                FIT.LY
                <br />
                <span className="orange-gradient">Churn Analysis</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="body-copy max-w-xl lg:pb-2"
            >
              An exploratory analysis of customer engagement, subscription
              plans, and support activity to understand patterns associated
              with customer churn.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-4">
            <Metric value="400" label="Customers" />
            <Metric value="3" label="Datasets combined" />
            <Metric value="38.5%" label="No recorded activity" />
            <Metric value="53.9%" label="Churn at 0 activity*" />
          </div>
        </section>

        {/* Question */}
        <section className="site-container pb-28" data-reveal>
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <SectionLabel number="01" label="The question" />

            <div>
              <h2 className="page-title max-w-4xl">
                What customer behaviors are associated with
                <span className="orange-gradient"> churn?</span>
              </h2>

              <p className="body-copy mt-7 max-w-2xl">
                The analysis focused on whether observable customer behavior
                could reveal useful signals of disengagement before customers
                leave.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="site-container pb-32" data-reveal>
          <div className="mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              02 — Approach
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div
                key={item.number}
                className="surface-card min-h-[220px] p-7 md:p-8"
              >
                <span className="text-[10px] tracking-[0.15em] text-[var(--orange-light)]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="body-copy mt-3 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel number="03" label="Finding — engagement" />

              <h2 className="section-title mt-6 max-w-md">
                Early disengagement appears closely associated with churn.
              </h2>

              <p className="body-copy mt-5 max-w-md">
                Customers with zero recorded activity had the highest observed
                churn rate in this analysis. Churn declined substantially as
                recorded activity increased.
              </p>
            </div>

            <div className="surface-card rounded-[var(--radius-lg)] p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Churn rate by recorded activity
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/30">
                    Customer events
                  </p>
                </div>

                <BarChart3 size={18} className="text-white/35" />
              </div>

              <div className="space-y-5">
                {engagementData.map((item) => (
                  <div key={item.events}>
                    <div className="mb-2 flex items-center justify-between text-[10px]">
                      <span className="text-white/50">
                        {item.events} {item.events === "1" ? "event" : "events"}
                      </span>
                      <span className="text-white/75">{item.churnRate}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.churnRate}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plan */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="surface-card order-2 rounded-[var(--radius-lg)] p-6 md:p-8 lg:order-1">
              <p className="text-sm font-medium text-white/85">
                Churn rate by subscription plan
              </p>

              <div className="mt-8 space-y-5">
                {planData.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-[10px]">
                      <span className="text-white/50">{item.name}</span>
                      <span className="text-white/75">{item.rate}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-raised)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.rate}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--orange-deep)] to-[var(--orange-light)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionLabel number="04" label="Finding — plans" />

              <h2 className="section-title mt-6">
                Churn varied across subscription plans.
              </h2>

              <p className="body-copy mt-5">
                The Free plan showed the highest observed churn rate in this
                dataset, while the other plans clustered more closely together.
              </p>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="site-container pb-32" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel number="05" label="Finding — support" />

              <h2 className="section-title mt-6">
                Resolution time shows a noticeable difference.
              </h2>

              <p className="body-copy mt-5 max-w-md">
                Churned customers averaged more support tickets and had a
                substantially longer average resolution time.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {supportData.map((item) => (
                <div
                  key={item.label}
                  className="surface-card p-7 md:p-9"
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                    {item.label}
                  </p>

                  <div className="mt-10">
                    <p className="text-4xl font-medium tracking-[-0.05em]">
                      {item.resolution}
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Average resolution time
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[var(--line)] pt-5">
                    <p className="text-lg text-white/80">
                      {item.tickets}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/30">
                      Average tickets
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-right">
            <span className="text-[10px] text-white/30">
              ~2.8× higher average resolution time among churned customers
            </span>
          </div>
        </section>

        {/* Signal */}
        <section className="site-container pb-32" data-reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line-strong)] bg-[var(--surface-3)] px-7 py-14 md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[var(--orange)]/15 blur-[110px]" />

            <span className="relative text-[10px] uppercase tracking-[0.2em] text-[var(--orange-light)]">
              The signal
            </span>

            <h2 className="relative mt-6 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white md:text-5xl">
              Customers with no recorded activity showed a{" "}
              <span className="orange-gradient">53.9% churn rate</span> in
              this analysis.
            </h2>

            <p className="relative mt-7 max-w-2xl text-xs leading-6 text-white/40">
              *The analysis treated blank churn-status values as not churned.
              This assumption should be confirmed against the original business
              definition before using the result for operational reporting.
            </p>
          </div>
        </section>

        {/* Takeaway */}
        <section className="site-container pb-32" data-reveal>
          <div className="border-t border-[var(--line)] pt-16 md:pt-20">
            <SectionLabel number="06" label="Takeaway" />

            <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <h2 className="page-title max-w-4xl">
                Turn early disengagement into an
                <span className="orange-gradient"> actionable signal.</span>
              </h2>
            </div>

            <p className="body-copy mt-7 max-w-2xl">
              The analysis suggests that engagement can be useful as an early
              indicator worth monitoring alongside plan and support behavior.
              The next step would be validating these patterns with additional
              customer context and a confirmed churn definition.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="site-container pb-32" data-reveal>
          <div className="surface-card rounded-[var(--radius-lg)] p-7 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Tools used
                </p>

                <p className="mt-3 text-lg tracking-[-0.02em] text-white/80">
                  SQL · Python · Power BI · Excel
                </p>
              </div>

              <span className="text-[10px] uppercase tracking-[0.16em] text-[var(--orange-light)]">
                Data analytics
              </span>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="site-container pb-28" data-reveal>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            <ProjectLink
              href="/work"
              eyebrow="Back"
              title="All work"
              direction="left"
            />

            <ProjectLink
              href="/work/ecommerce-pipeline"
              eyebrow="Next project"
              title="E-commerce Data Pipeline"
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
    <div className="border-b border-[var(--line)] px-0 py-6 md:border-b-0 md:border-r md:px-7 md:py-8 first:pl-0 last:border-r-0">
      <p className="text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-white/35">
        {label}
      </p>
    </div>
  );
}

function SectionLabel({
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

      <ArrowUpRight
        size={17}
        className={`text-white/30 transition-transform duration-300 group-hover:text-[var(--orange-light)] ${
          direction === "left"
            ? "-rotate-90 group-hover:-translate-x-1"
            : "group-hover:translate-x-1 group-hover:-translate-y-1"
        }`}
      />
    </Link>
  );
}