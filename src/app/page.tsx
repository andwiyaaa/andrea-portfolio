import Link from "next/link";

const disciplines = [
  "Data Analytics",
  "Data Engineering",
  "AWS / Cloud",
  "IT & Systems",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[35%] h-96 w-96 rounded-full bg-violet-400/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-80 w-80 rounded-full bg-sky-300/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-widest text-white backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
            AID
          </span>

          <span className="hidden text-sm text-white/50 sm:block">
            Andrea I. Ducosin
          </span>
        </Link>

        <div className="flex items-center gap-7 text-sm text-white/50">
          <Link
            href="/work"
            className="transition-colors hover:text-white"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 pb-14 pt-6 md:px-10 md:pb-16 lg:px-12 lg:pt-4">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main introduction */}
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(102,231,225,0.8)]" />
              Available for opportunities
            </div>

            <h1 className="max-w-4xl text-[3.5rem] font-medium leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl md:text-[4.75rem] lg:text-[5.5rem] xl:text-[6.2rem]">
              Turning
              <span className="block text-white/40">data, systems,</span>
              <span className="block">
                and cloud into{" "}
                <span className="text-cyan-200">clarity.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:mt-7 md:text-lg">
              I&apos;m Andrea — an IT graduate building at the intersection
              of data analytics, engineering, cloud infrastructure, and
              practical IT systems.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8">
              <Link
                href="/work"
                style={{ color: "#071014" }}
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-200 px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-cyan-100"
              >
                View my work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm text-white/70 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                More about me
              </Link>
            </div>
          </div>

          {/* Glass information panel */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-6">
              {/* Reflection */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-200/10 blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      Focus
                    </p>
                    <p className="mt-2 text-lg text-white">
                      Data · Systems · Cloud
                    </p>
                  </div>

                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                    2026
                  </div>
                </div>

                <div className="space-y-2">
                  {disciplines.map((discipline, index) => (
                    <div
                      key={discipline}
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/10 px-4 py-4 transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-white/25">
                          0{index + 1}
                        </span>
                        <span className="text-sm text-white/75">
                          {discipline}
                        </span>
                      </div>

                      <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-200">
                        →
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/[0.07] pt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/30">
                      Current direction
                    </span>
                    <span className="text-white/65">
                      Analytics → Cloud
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#101216]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-cyan-200">
                  AID/01
                </span>
                <span className="text-xs text-white/45">
                  building in public
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/25 md:flex">
        <span>Scroll to explore</span>
        <span className="h-px w-10 bg-white/15" />
      </div>
    </main>
  );
}