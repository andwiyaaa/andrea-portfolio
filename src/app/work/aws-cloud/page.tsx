"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Cloud,
  Database,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";

const architecture = [
  {
    number: "01",
    icon: Network,
    title: "Network",
    description:
      "Designed around a VPC-based network model with public and private network boundaries.",
    tags: ["VPC", "Subnets", "Routing"],
  },
  {
    number: "02",
    icon: Server,
    title: "Compute",
    description:
      "Used EC2 concepts and Linux administration workflows to understand cloud-based compute.",
    tags: ["EC2", "Linux", "SSH"],
  },
  {
    number: "03",
    icon: Database,
    title: "Storage",
    description:
      "Applied object-storage concepts for durable, scalable data storage using Amazon S3.",
    tags: ["S3", "Objects", "Buckets"],
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Identity",
    description:
      "Applied IAM concepts to control access through users, roles, policies, and permissions.",
    tags: ["IAM", "Policies", "Least privilege"],
  },
];

const securityChecks = [
  "IAM-based access control",
  "Least-privilege permissions",
  "Security group concepts",
  "Network segmentation",
  "Encrypted cloud storage concepts",
  "Credential separation through environment variables",
];

const operations = [
  {
    icon: Terminal,
    title: "Linux administration",
    description:
      "Worked with Linux command-line workflows, users, groups, file permissions, and common filesystem operations.",
  },
  {
    icon: Server,
    title: "Remote access",
    description:
      "Practiced SSH-based access to cloud compute environments and basic server administration workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Operational thinking",
    description:
      "Considered how access, reliability, monitoring, and configuration affect day-to-day cloud operations.",
  },
];

const cloudPrinciples = [
  {
    title: "Scalability",
    description:
      "Cloud resources can be adjusted as workload requirements change instead of relying only on fixed infrastructure.",
  },
  {
    title: "Availability",
    description:
      "AWS Regions and Availability Zones provide the foundation for designing resilient workloads.",
  },
  {
    title: "Security",
    description:
      "Identity, permissions, network controls, and secure configuration are treated as core infrastructure concerns.",
  },
  {
    title: "Cost awareness",
    description:
      "Resource selection and usage patterns directly affect cloud costs, making efficient infrastructure design important.",
  },
];

export default function AWSCloudPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090c] text-[#f4f4f0]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#66e7e1]/8 blur-[120px]" />
        <div className="absolute right-[8%] top-[32%] h-[360px] w-[360px] rounded-full bg-[#9d8cff]/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs text-[#66e7e1] transition group-hover:border-[#66e7e1]/30">
            AID
          </span>
          <span className="hidden sm:block">Andrea I. Ducosin</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-white/45">
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

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-16 lg:px-12">
        <Link
          href="/work"
          className="mb-14 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to work
        </Link>

        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#66e7e1]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#66e7e1]">
                AWS / Cloud
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              AWS Cloud
              <br />
              <span className="text-white/40">Infrastructure</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
              A cloud infrastructure case study focused on AWS fundamentals,
              networking, compute, storage, identity, security, and Linux
              operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["AWS", "VPC", "EC2", "S3", "IAM", "Linux"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#66e7e1]/10 blur-[70px]" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Architecture
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Cloud infrastructure model
                    </p>
                  </div>

                  <Cloud className="text-[#66e7e1]" size={22} />
                </div>

                <div className="space-y-3">
                  {[
                    ["Internet", "External traffic"],
                    ["VPC", "Network boundary"],
                    ["EC2", "Compute layer"],
                    ["S3", "Object storage"],
                    ["IAM", "Access control"],
                  ].map(([name, description], index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#66e7e1]/15 bg-[#66e7e1]/7">
                        <span className="font-mono text-[9px] text-[#66e7e1]">
                          0{index + 1}
                        </span>
                      </div>

                      <div>
                        <p className="text-sm text-white/80">{name}</p>
                        <p className="mt-0.5 text-xs text-white/30">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-white/8 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
              01 / Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
              Building a foundation for cloud-first systems.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/45">
              This project brings together the core AWS concepts I have been
              developing through cloud learning and hands-on labs. The focus is
              understanding how infrastructure components connect, how access
              is controlled, and how cloud resources support reliable systems.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/45">
              Rather than treating AWS services as isolated tools, the project
              approaches infrastructure as a system: network boundaries,
              compute, storage, identity, security, and operations all work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
            02 / Architecture
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
            Four layers. One cloud system.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/45">
            The architecture separates infrastructure concerns while keeping
            the relationships between them visible.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/9 bg-white/[0.035] p-6 transition-colors hover:border-white/15 md:p-7"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#66e7e1]/5 blur-[55px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <Icon size={19} className="text-[#66e7e1]" />
                    </div>

                    <span className="font-mono text-xs text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 px-2.5 py-1 font-mono text-[10px] text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Security */}
      <section className="border-y border-white/8 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
              03 / Security
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
              Security is part of the architecture.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
              Cloud infrastructure is not only about getting resources online.
              Access control and network boundaries need to be considered from
              the beginning.
            </p>
          </div>

          <div className="rounded-3xl border border-white/9 bg-white/[0.035] p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-white/8 pb-5">
              <ShieldCheck size={19} className="text-[#66e7e1]" />
              <span className="text-sm text-white/70">
                Security considerations
              </span>
            </div>

            <div className="mt-5 grid gap-1">
              {securityChecks.map((check) => (
                <div
                  key={check}
                  className="flex items-center gap-3 border-b border-white/6 py-4 last:border-0"
                >
                  <Check size={15} className="shrink-0 text-[#66e7e1]" />
                  <span className="text-sm text-white/50">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
            04 / Operations
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
            From cloud concepts to the command line.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {operations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-3xl border border-white/9 bg-white/[0.035] p-6"
              >
                <Icon size={20} className="text-[#66e7e1]" />

                <h3 className="mt-7 text-lg font-medium">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Cloud principles */}
      <section className="border-y border-white/8 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
                05 / Cloud thinking
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Designing beyond the service list.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2">
              {cloudPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="bg-[#0a0b0f] p-6 md:p-7"
                >
                  <h3 className="text-lg font-medium">{principle.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="rounded-[32px] border border-[#66e7e1]/12 bg-[#66e7e1]/[0.035] p-7 md:p-10 lg:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66e7e1]">
            06 / What I&apos;m building
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                Turning cloud fundamentals into practical systems thinking.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/45">
                My AWS learning is focused on understanding how infrastructure,
                security, networking, compute, storage, and operations connect
                so I can contribute more effectively to cloud and IT teams.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#66e7e1]/15 bg-[#66e7e1]/7">
              <Cloud size={26} className="text-[#66e7e1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to selected work
          </Link>

          <Link
            href="/work/service-desk"
            className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            Next project
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}