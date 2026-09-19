"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Cloud, Database, Terminal } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Marquee from "@/components/marquee";

const projects = [
  {
    number: "01",
    type: "Data Analytics",
    title: "Churn at Fit.ly",
    description: "Customer behavior, churn patterns, and business metrics.",
    href: "/work/fitly-churn",
  },
  {
    number: "02",
    type: "Data Engineering",
    title: "E-commerce Data Pipeline",
    description: "Cleaning, validation, PostgreSQL loading, and analytics.",
    href: "/work/ecommerce-pipeline",
  },
  {
    number: "03",
    type: "AWS / Cloud",
    title: "AWS Cloud Data Pipeline",
    description: "S3, EC2, Python ETL, PostgreSQL, validation, and analytics.",
    href: "/work/aws-cloud",
  },
];

const stack = [
  "SQL", "Python", "PostgreSQL", "Pandas", "AWS", "S3", "EC2",
  "Linux", "Power BI", "Excel", "Git", "ETL", "Data Validation",
];


const heroLines: ReactNode[] = [
  "Turning data,",
  "systems,",
  <>
    and cloud into <em>clarity.</em>
  </>,
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  
  
  
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 45, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 45, damping: 22 });
  const rotateY = useTransform(smoothX, [-1, 1], [-3.5, 3.5]);
  const rotateX = useTransform(smoothY, [-1, 1], [3.5, -3.5]);
  const visualX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const visualY = useTransform(smoothY, [-1, 1], [-6, 6]);
  const panelX = useTransform(smoothX, [-1, 1], [7, -7]);
  const panelY = useTransform(smoothY, [-1, 1], [5, -5]);
  const codeX = useTransform(smoothX, [-1, 1], [-3, 3]);
  const codeY = useTransform(smoothY, [-1, 1], [-3, 3]);

  useEffect(() => {
    
    
    if (reduceMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [pointerX, pointerY, reduceMotion]);

  const parallax = reduceMotion ? {} : { x: visualX, y: visualY };

  return (
    <main className="site-shell">
      <SiteNav />

      <section className="hero-dark">
        <div className="site-container relative z-10 w-full">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1fr)_430px]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="eyebrow-dark mb-7">
                <span className="status-dot" />
                Data · Systems · Cloud
              </div>

              {}
              <h1 className="hero-title">
                {heroLines.map((line, index) => (
                  <span key={index} className="line-mask">
                    <motion.span
                      initial={reduceMotion ? false : { y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.95,
                        delay: 0.12 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <p className="hero-lead">
                I build practical data workflows, technical systems, and cloud projects
                that make complex information easier to understand and use.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/work" className="button-light group">
                  View my work
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/about" className="button-quiet group">
                  More about me
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:ml-auto"
              style={{ perspective: 1200 }}
            >
              <motion.div
                className="portrait-frame"
                style={reduceMotion ? undefined : { rotateX, rotateY, ...parallax }}
              >
                <div className="portrait-image">
                  <Image
                    src="/images/formal.jpg"
                    alt="Andrea Ducosin"
                    fill
                    priority
                    sizes="(max-width: 1024px) 430px, 430px"
                    className="object-cover object-center"
                  />
                  <div className="portrait-vignette" />
                  <div className="portrait-label">
                    <span>PORTFOLIO / 2026</span>
                    <span className="mini-signal" />
                  </div>
                </div>

                <div className="portrait-topline">
                  <span>ANDREA I. DUCOSIN</span>
                  <span>01</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-spec-panel"
                style={reduceMotion ? undefined : { x: panelX, y: panelY }}
              >
                <div className="spec-heading">
                  <span>FOCUS</span>
                  <strong>Data · Systems · Cloud</strong>
                </div>
                <div className="spec-divider" />
                <div className="spec-row">
                  <span>01</span>
                  <Database size={14} />
                  <strong>Data workflows</strong>
                </div>
                <div className="spec-row">
                  <span>02</span>
                  <Cloud size={14} />
                  <strong>AWS / Cloud</strong>
                </div>
                <div className="spec-row">
                  <span>03</span>
                  <Terminal size={14} />
                  <strong>IT & Systems</strong>
                </div>
              </motion.div>

              <motion.div
                className="floating-code"
                style={reduceMotion ? undefined : { x: codeX, y: codeY }}
              >
                <span>AID/01</span>
                <span>building in public</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <a href="#selected-work" className="hero-scroll">
          <span>Scroll to explore</span>
          <ArrowDown size={13} />
        </a>
      </section>

      {}
      <Marquee duration={44} label={`Working stack: ${stack.join(", ")}`}>
        {stack.map((item) => (
          <span className="marquee-item" key={item}>
            {item}
          </span>
        ))}
      </Marquee>

      <section id="selected-work" className="section-light">
        <div className="site-container section-pad relative z-10">
          <div className="section-kicker-row" data-reveal="fade">
            <span>01 / Selected work</span>
            <span>Projects / 2026</span>
          </div>

          <div className="section-intro-grid">
            <div data-reveal="left">
              <p className="section-overline">Selected work</p>
            </div>
            <div data-reveal>
              <h2 className="section-heading-dark">Projects built to understand, solve, and improve.</h2>
              <p className="section-copy-dark">
                Practical work across analytics, data engineering, cloud infrastructure,
                and technical systems.
              </p>
            </div>
          </div>

          <div className="project-list reveal-stagger mt-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-reveal
                style={{ "--i": index } as CSSProperties}
              >
                <Link href={project.href} className="project-row-light group">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <span className="project-copy">
                    <strong>{project.title}</strong>
                    <small>{project.description}</small>
                  </span>
                  <ArrowUpRight size={18} className="project-arrow" />
                </Link>
              </div>
            ))}
          </div>

          <div data-reveal="fade">
            <Link href="/work" className="inline-link-dark group mt-8">
              View all projects
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="site-container section-pad relative z-10">
          <div className="section-kicker-row" data-reveal="fade">
            <span>02 / Current direction</span>
            <span>Analytics → Cloud</span>
          </div>

          <div className="direction-layout">
            <div className="max-w-2xl" data-reveal="left">
              <p className="section-overline orange-text">Current direction</p>
              <h2 className="section-heading-light">From understanding data to building the systems behind it.</h2>
              <p className="section-copy-light">
                I&apos;m developing hands-on experience with SQL, Python, Linux, AWS,
                PostgreSQL, and the infrastructure that connects them.
              </p>
            </div>

            {}
            <div className="signal-board" data-reveal="right">
              <div className="signal-board-top">
                <span>WORKFLOW</span>
                <span className="live-label"><i /> ACTIVE</span>
              </div>
              <div className="signal-flow">
                <div className="signal-node"><span>01</span><strong>Data</strong></div>
                <div className="signal-line" />
                <div className="signal-node"><span>02</span><strong>Pipeline</strong></div>
                <div className="signal-line" />
                <div className="signal-node"><span>03</span><strong>Cloud</strong></div>
              </div>
              <div className="signal-footer">
                <span>extract</span><span>transform</span><span>validate</span><span>load</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container section-pad relative z-10">
          <div className="section-kicker-row" data-reveal="fade">
            <span>03 / Connect</span>
            <span>Open to opportunities</span>
          </div>

          <div className="connect-layout" data-reveal>
            <div>
              <p className="section-overline">Open to opportunities in</p>
              <h2 className="connect-heading">Data · Systems · Cloud</h2>
              <p className="section-copy-dark max-w-xl">
                Ready to contribute to practical work where data, technology, and
                problem-solving meet.
              </p>
            </div>
            <Link href="/contact" className="button-dark group">
              Let&apos;s connect
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
