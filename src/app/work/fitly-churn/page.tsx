"use client";

import Link from "next/link";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const metrics = [
  {
    value: "400",
    label: "customers analyzed",
  },
  {
    value: "3",
    label: "datasets combined",
  },
  {
    value: "38.5%",
    label: "with no recorded activity",
  },
  {
    value: "53.9%",
    label: "churn among zero-activity customers",
  },
];

const activityChurn = [
  { events: "0", churnRate: 53.9 },
  { events: "1", churnRate: 21.4 },
  { events: "2", churnRate: 9.1 },
  { events: "3", churnRate: 5.8 },
  { events: "4", churnRate: 2.9 },
  { events: "5", churnRate: 0 },
];

const supportChurn = [
  { resolution: "0–24 min", churnRate: 22.8 },
  { resolution: "25–49 min", churnRate: 25.0 },
  { resolution: "50–74 min", churnRate: 29.4 },
  { resolution: "75+ min", churnRate: 34.6 },
];

export default function FitlyChurnPage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-widest transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
            AID
          </span>

          <span className="hidden text-sm text-white/50 sm:block">
            Andrea I. Ducosin
          </span>
        </Link>

        <div className="flex items-center gap-7 text-sm">
          <Link
            href="/work"
            className="text-white/50 transition-colors hover:text-white"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="text-white/50 transition-colors hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/70 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10 md:pt-16 lg:px-12">
        <Link
          href="/work"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-white/35 transition-colors duration-300 hover:text-white"
        >
          <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span>All work</span>
        </Link>

        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
              Data Analytics
            </p>
          </div>

          <h1 className="text-6xl font-medium tracking-[-0.055em] sm:text-7xl md:text-8xl">
            Churn at <span className="text-cyan-200">Fit.ly</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50 md:text-xl">
            An exploratory customer churn analysis focused on engagement,
            support activity, subscription plans, and the signals associated
            with customer loss.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Python", "Pandas", "Data Validation", "EDA", "Business Metrics"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-white/45"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`p-7 md:p-8 ${
                index !== metrics.length - 1
                  ? "border-b border-white/[0.07] sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <p className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                {metric.value}
              </p>

              <p className="mt-2 max-w-[150px] text-xs leading-5 text-white/35">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project overview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 md:grid-cols-[0.7fr_1.3fr] md:px-10 lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/25">
            01 / Overview
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Understanding why customers leave.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-7 text-white/45">
            <p>
              Fit.ly provided three datasets covering customer accounts,
              customer support interactions, and user activity. The goal was
              to validate the data, understand customer behavior, identify
              patterns associated with churn, and translate those findings
              into actionable business recommendations.
            </p>

            <p>
              Before analyzing churn, the datasets were checked for missing
              values, duplicates, unexpected values, data types, timestamps,
              and whether customer records could be reliably combined.
            </p>

            <p>
              The analysis then aggregated activity and support information at
              the customer level before joining those summaries with account
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Data preparation */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.7fr_1.3fr] md:px-10 lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/25">
              02 / Data preparation
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Clean data first.
              <br />
              Then ask better questions.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Account information",
                "Customer support",
                "User activity",
                "Customer-level aggregation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <p className="text-sm text-white/65">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45">
              Customer IDs were standardized so the three sources could be
              joined. Support channels marked with “-” were treated as
              missing or unknown, timestamps were converted to datetime, and
              customers without recorded activity or support tickets were
              assigned zero counts after aggregation.
            </p>

            <div className="mt-7 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/60">
                Data limitation
              </p>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Blank churn-status values were treated as not churned for the
                analysis. This is a working assumption and should be confirmed
                with the data owner before using the metric for official
                reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement & churn findings */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
                Engagement & churn
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                The strongest signal was user activity.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                Customers with no recorded activity showed a substantially higher
                churn rate than the overall customer base. This made engagement an
                important signal to investigate when looking at churn risk.
            </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-4xl font-medium tracking-[-0.04em] text-cyan-200">
                53.9%
                </p>

                <p className="mt-3 text-sm leading-6 text-white/45">
                churn rate among customers with 0 recorded activity
                </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-4xl font-medium tracking-[-0.04em] text-white">
                38.5%
                </p>

                <p className="mt-3 text-sm leading-6 text-white/45">
                of customers had no recorded activity
                </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-4xl font-medium tracking-[-0.04em] text-violet-200">
                28.5%
                </p>

                <p className="mt-3 text-sm leading-6 text-white/45">
                overall baseline churn rate
                </p>
            </div>
            </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Churn by activity level
            </p>

            <p className="mt-2 text-sm text-white/40">
                Customers were grouped by their recorded activity before comparing
                churn rates.
            </p>
            </div>

            <div className="p-6 md:p-8">
                <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={activityChurn}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <XAxis
                        dataKey="events"
                        tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        />

                        <YAxis
                        domain={[0, 60]}
                        tickFormatter={(value) => `${value}%`}
                        tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        />

                        <Tooltip
                        cursor={{ fill: "rgba(255,255,255,0.03)" }}
                        contentStyle={{
                            background: "#111318",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                            color: "#fff",
                        }}
                        formatter={(value) => [`${value}%`, "Churn rate"]}
                        labelFormatter={(label) => `${label} activity events`}
                        />

                        <Bar
                        dataKey="churnRate"
                        fill="#a5f3fc"
                        radius={[8, 8, 0, 0]}
                        animationDuration={1200}
                        />
                    </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/35">
                    <span>0 events: 53.9%</span>
                    <span>1 event: 21.4%</span>
                    <span>2 events: 9.1%</span>
                    <span>3 events: 5.8%</span>
                    <span>4 events: 2.9%</span>
                    <span>5 events: 0.0%</span>
                </div>
            </div>
        </div>
        </section>

         {/* Plan & churn */}
        <section className="border-t border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-violet-200/60">
                  Plan & churn
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  Churn was highest among Free customers.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                  Churn rates varied across subscription plans. Free customers
                  had the highest observed churn rate, while Pro customers had
                  the lowest.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <p className="text-4xl font-medium tracking-[-0.04em] text-violet-200">
                    41.0%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    churn rate among Free customers
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <p className="text-4xl font-medium tracking-[-0.04em] text-white">
                    26.1%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    churn rate among Enterprise customers
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <p className="text-4xl font-medium tracking-[-0.04em] text-cyan-200">
                    22.4%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    churn rate among Pro customers
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <div className="border-b border-white/10 px-6 py-5 md:px-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Churn by plan type
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Customers were grouped by subscription plan before comparing
                  churn rates.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-6">
                  {[
                    { plan: "Free", rate: "41.0%", width: "82%" },
                    { plan: "Enterprise", rate: "26.1%", width: "52.2%" },
                    { plan: "Basic", rate: "23.7%", width: "47.4%" },
                    { plan: "Pro", rate: "22.4%", width: "44.8%" },
                  ].map((item) => (
                    <div key={item.plan}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-white/70">{item.plan}</span>

                        <span className="text-white/55">{item.rate}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-violet-200 transition-all duration-700"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support & churn */}
        <section className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
                  Support & churn
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  Resolution time stood out more than ticket volume.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                  Churned customers had a substantially higher average support
                  resolution time than customers who did not churn, while median
                  support ticket volume remained the same.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Churned
                  </p>

                  <p className="mt-4 text-5xl font-medium tracking-[-0.05em] text-cyan-200">
                    18.69
                    <span className="ml-1 text-xl text-white/35">hrs</span>
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Average support resolution time
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Not churned
                  </p>

                  <p className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white/80">
                    6.66
                    <span className="ml-1 text-xl text-white/35">hrs</span>
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Average support resolution time
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <div className="border-b border-white/10 px-6 py-5 md:px-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Average support resolution time
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Churned customers recorded a substantially higher average
                  resolution time.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-7">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/70">Churned</span>

                      <span className="text-white/55">18.69 hrs</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-cyan-200 transition-all duration-700"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/70">Not churned</span>

                      <span className="text-white/55">6.66 hrs</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-violet-300 transition-all duration-700"
                        style={{ width: "35.64%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-3xl font-medium tracking-[-0.04em]">
                      2.45
                    </p>

                    <p className="mt-2 text-sm text-white/40">
                      Average support tickets — churned
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-medium tracking-[-0.04em]">
                      2.23
                    </p>

                    <p className="mt-2 text-sm text-white/40">
                      Average support tickets — not churned
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-6 text-white/45">
                    Median support ticket volume was the same for both groups
                    at 2 tickets, suggesting that resolution time showed a
                    clearer difference than ticket volume in this analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan + activity */}
        <section className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
                  Plan + activity
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  Low activity remained a strong churn signal across plans.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                  Combining subscription plan with customer activity showed
                  consistently higher observed churn among customers with
                  little or no recorded activity.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Free · 0 activity
                  </p>

                  <p className="mt-4 text-5xl font-medium tracking-[-0.05em] text-cyan-200">
                    59.18%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Observed churn rate among Free customers with no recorded
                    activity.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Basic · 0 activity
                  </p>

                  <p className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white/80">
                    57.89%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Observed churn rate among Basic customers with no recorded
                    activity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <div className="border-b border-white/10 px-6 py-5 md:px-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Zero-activity churn by plan
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Customers with no recorded activity showed elevated churn
                  across every plan.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-7">
                  {[
                    { plan: "Free", rate: 59.18 },
                    { plan: "Basic", rate: 57.89 },
                    { plan: "Enterprise", rate: 53.12 },
                    { plan: "Pro", rate: 42.86 },
                  ].map((item) => (
                    <div key={item.plan}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-white/70">{item.plan}</span>

                        <span className="text-white/55">
                          {item.rate.toFixed(2)}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-cyan-200 transition-all duration-700"
                          style={{ width: `${(item.rate / 60) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-2xl font-medium tracking-[-0.04em]">
                  59.18%
                </p>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Free · 0 activity
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-2xl font-medium tracking-[-0.04em]">
                  53.12%
                </p>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Enterprise · 0 activity
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <p className="text-2xl font-medium tracking-[-0.04em]">
                  42.86%
                </p>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Pro · 0 activity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/60">
                Recommendations
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                Turn early disengagement into an actionable signal
              </h2>

              <p className="mt-5 text-base leading-7 text-white/50">
                The analysis suggests that customer engagement and support
                experience are useful areas to monitor when investigating
                churn. The strongest observed differences appeared among
                customers with little or no recorded activity and customers
                experiencing longer support resolution times.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/60">
                  01
                </p>

                <h3 className="mt-5 text-xl font-medium tracking-[-0.02em]">
                  Monitor low activity
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Track customers with zero or very few recorded activity
                  events and use declining engagement as an early signal for
                  retention follow-up.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300/60">
                  02
                </p>

                <h3 className="mt-5 text-xl font-medium tracking-[-0.02em]">
                  Improve resolution time
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Monitor average support resolution time alongside churn to
                  identify whether slower issue resolution is associated with
                  customers becoming more likely to leave.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  03
                </p>

                <h3 className="mt-5 text-xl font-medium tracking-[-0.02em]">
                  Validate the churn metric
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Confirm with the data owner that blank churn-status values
                  represent customers who did not churn before using the metric
                  for official reporting.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-cyan-200/10 bg-cyan-200/[0.035] p-7 md:p-9">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/60">
                    Key takeaway
                  </p>

                  <p className="mt-4 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                    Engagement is the clearest signal to watch first.
                  </p>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    Customers with no recorded activity showed elevated churn
                    across all four plans, while churned customers also had a
                    substantially higher average support resolution time.
                  </p>
                </div>

                <div className="shrink-0">
                  <p className="text-5xl font-medium tracking-[-0.06em] text-cyan-200">
                    38.5%
                  </p>

                  <p className="mt-2 text-sm text-white/35">
                    of customers had no recorded activity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}