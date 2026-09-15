import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "Churn at Fit.ly",
    description:
      "Customer churn analysis using Python, data validation, exploratory analysis, business metrics, and recommendations.",
    stack: "Python · Pandas · Data Analysis",
    href: "/work/fitly-churn",
  },
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "E-commerce Data Pipeline",
    description:
      "A structured pipeline for transforming raw e-commerce data into analysis-ready datasets.",
    stack: "Python · SQL · PostgreSQL",
    href: "/work/ecommerce-pipeline",
  },
  {
    number: "03",
    category: "DATA ENGINEERING",
    title: "API → Data Pipeline",
    description:
      "An API-based ingestion workflow designed to collect, transform, validate, and store structured data.",
    stack: "Python · REST API · SQL",
    href: "/work/api-pipeline",
  },
  {
    number: "04",
    category: "AWS / CLOUD",
    title: "AWS Cloud Infrastructure",
    description:
      "A practical cloud environment exploring AWS infrastructure, Linux, IAM, networking, and deployment concepts.",
    stack: "AWS · Linux · IAM",
    href: "/work/aws-cloud",
  },
  {
    number: "05",
    category: "IT & SYSTEMS",
    title: "Service Desk Analytics",
    description:
      "A support-focused project analyzing tickets, resolution patterns, and operational metrics.",
    stack: "SQL · Excel · Power BI",
    href: "/work/service-desk",
  },
];

export default function WorkPage() {
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
          <Link href="/work" className="text-white">
            Work
          </Link>

          <Link
            href="/about"
            className="text-white/45 transition-colors hover:text-white"
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

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pt-10 lg:px-12">
        <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-white/35 transition-colors duration-300 hover:text-white"
         >
            <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back</span>
        </Link>

        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Selected work
          </p>

          <h1 className="text-5xl font-medium tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Things I&apos;ve
            <span className="text-white/35"> built,</span>
            <br />
            analyzed, and
            <span className="text-cyan-200"> explored.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            A collection of data, engineering, cloud, and IT projects built
            through practical coursework, certification work, labs, and
            independent exploration.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10 lg:px-12">
        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="group block"
            >
              <article className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl transition duration-500 hover:border-white/[0.16] hover:bg-white/[0.06] md:p-6 lg:p-7">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/0 blur-[90px] transition duration-700 group-hover:bg-cyan-300/10" />

                <div className="relative grid gap-5 md:grid-cols-[60px_1fr_auto] md:items-center">
                  <span className="font-mono text-sm text-white/20">
                    {project.number}
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/60">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-xl font-medium tracking-tight text-white transition duration-300 group-hover:text-cyan-100 md:text-2xl">
                      {project.title}
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45 md:text-base">
                      {project.description}
                    </p>

                    <p className="mt-3 font-mono text-[11px] text-white/25">
                      {project.stack}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition duration-500 group-hover:translate-x-1 group-hover:border-cyan-300/30 group-hover:text-cyan-200">
                    →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="border-t border-white/[0.07] pt-6">
          <p className="text-xs text-white/25">
            More experiments, labs, and technical work will be added as the
            portfolio grows.
          </p>
        </div>
      </section>
    </main>
  );
}