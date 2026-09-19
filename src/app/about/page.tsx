"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, Award, Cloud, Database, GraduationCap, Laptop, MapPin, ShieldCheck, Terminal, Users } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import ToolConstellation from "@/components/tool-constellation";
import SequenceRail from "@/components/sequence-rail";

const focusAreas = [
  { icon: BarChart3, category: "Insight", title: "Data Analytics", description: "Turning raw information into useful metrics, patterns, and decisions." },
  { icon: Database, category: "Pipeline", title: "Data Engineering", description: "Building reliable pipelines that move, clean, validate, and organize data." },
  { icon: Cloud, category: "Infrastructure", title: "AWS / Cloud", description: "Building hands-on cloud foundations through AWS infrastructure and data workflows." },
  { icon: Laptop, category: "Support", title: "IT & Systems", description: "Supporting users, troubleshooting technical issues, and improving everyday workflows." },
];

const education = [
  { year: "2022 — 2026", school: "Technological University of the Philippines — Manila", degree: "BS Information Technology", detail: "Foundation across software, databases, systems, data, and information technology." },
  { year: "2020 — 2022", school: "Emilio Aguinaldo College — Cavite", degree: "STEM Strand", detail: "With High Honors · Cumulative GWA: 95" },
];

const certifications = [
  { year: "JUNE 2025", title: "Cyber Threat Management", issuer: "Cisco Networking Academy · DICT-ITU DTC Initiative", icon: ShieldCheck },
  { year: "DECEMBER 2025", title: "Data Analysis: SQL, Tableau, Power BI & Excel", issuer: "Udemy", icon: Award },
];

const organizations = [
  { year: "2025 — 2026", name: "TUP Manila — COMPASS", role: "Academic and Research Affairs Committee Member", icon: Users },
  { year: "2025 — 2026", name: "Google Developer Group on Campus — TUP Manila", role: "Member", icon: Cloud },
  { year: "2025 — 2026", name: "Amazon Web Services Learning Club — TUP Manila", role: "Member", icon: Terminal },
];

const selectedProjects = [
  { year: "2025 — 2026", type: "Capstone · Group Project", title: "Web-Based Academic Information System with Smart Chatbot and Inclusive Accessibility Features for Talitha Cumi Academy", description: "Contributed to system analysis, documentation, workflow planning, QA testing, accessibility, and usability improvements." },
  { year: "2024 — 2025", type: "Web Development · Individual Project", title: "LuxGalleria E-Commerce System", description: "Designed and developed an e-commerce platform with structured product management, transaction workflows, and user-friendly data presentation." },
  { year: "2023 — 2024", type: "Group Project", title: "Student Information System (SIS)", description: "Collaborated on system planning, documentation, functionality testing, and organized handling of academic records." },
];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="site-shell">
      <SiteNav />

      <section className="section-dark">
        <div className="site-container page-hero-dark">
          <Link href="/" className="back-link-dark group">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back home
          </Link>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-overline orange-text">About</p>
            <h1 className="page-heading-light">
              <span className="line-mask">
                <motion.span
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  A little more about me.
                </motion.span>
              </span>
            </h1>
            <p className="page-lead-light">
              I&apos;m Andrea I. Ducosin, an Information Technology graduate building at the intersection of data, systems, and cloud.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container section-pad">
          <div className="about-profile-grid">
            <div className="about-photo" data-reveal="left">
              <Image src="/images/formal.jpg" alt="Andrea Ducosin" fill sizes="(max-width: 900px) 100vw, 42vw" className="object-cover object-top" />
              <div className="about-photo-shade" />
              <div className="about-photo-caption">
                <span>ANDREA I. DUCOSIN</span>
                <span>DATA · SYSTEMS · CLOUD</span>
              </div>
            </div>

            <div className="about-copy" data-reveal="right">
              <p className="section-overline">Who I am</p>
              <h2 className="section-heading-dark">I like working where technology meets practical problems.</h2>
              <div className="prose-dark">
                <p>My background is in Information Technology, but my interests have grown across several connected areas: analyzing data, building data workflows, understanding systems, and working with cloud technologies.</p>
                <p>I enjoy the part of technology where there is something to investigate, organize, improve, or make easier to understand. That can mean validating a dataset, writing SQL queries, building a pipeline, troubleshooting a technical issue, or documenting how a system works.</p>
                <p>I&apos;m currently focused on projects that bring those areas together while developing a stronger foundation for a career in data and cloud technology.</p>
              </div>

              <div className="fact-strip">
                <div><MapPin size={16} /><strong>Based in Cavite</strong><span>Philippines</span></div>
                <div><GraduationCap size={16} /><strong>BS Information Technology</strong><span>TUP Manila · 2022–2026</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="site-container section-pad">
          <div className="section-kicker-row" data-reveal="fade"><span>01 / Focus areas</span><span>How I approach technology</span></div>
          <SequenceRail
            items={focusAreas.map(({ icon: Icon, category, title, description }) => ({
              category,
              title,
              description,
              icon: <Icon size={16} />,
            }))}
          />
        </div>
      </section>

      <section className="section-light">
        <div className="site-container section-pad">
          <div className="section-kicker-row" data-reveal="fade"><span>02 / Experience & education</span><span>Foundation</span></div>
          <div className="experience-layout">
            <div data-reveal="left">
              <p className="section-overline">Experience</p>
              <div className="experience-card">
                <div className="experience-top"><span>FEB 2026 — MAY 2026</span><ShieldCheck size={16} /></div>
                <h2>Administrative & Technical Support Intern</h2>
                <p>NBI · International Airport Investigation Division</p>
                <div className="experience-lines">
                  <span>Data encoding, validation, and organization</span>
                  <span>Hardware, software, and office-system troubleshooting</span>
                  <span>Reports, documentation, and workflow support</span>
                  <span>Confidential records handling</span>
                </div>
              </div>
            </div>
            <div data-reveal="right">
              <p className="section-overline">Education</p>
              <div className="education-list">
                {education.map((item) => (
                  <div className="education-row" key={item.school}>
                    <span>{item.year}</span>
                    <div><h3>{item.degree}</h3><strong>{item.school}</strong><p>{item.detail}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container section-pad">
          <div className="surface-card aws-journey-card overflow-hidden" data-reveal>
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="relative p-7 md:p-10 lg:p-12">
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[var(--orange)]" />
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--orange-light)]">
                      Currently building
                    </p>
                  </div>

                  <h2 className="mt-6 max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
                    Expanding from IT into cloud.
                  </h2>

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--text-3)]">
                    Through the AWS re/Start Digital Academy, I’m strengthening
                    my understanding of cloud computing, Linux, AWS services, and
                    infrastructure while turning the concepts into hands-on work.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {["AWS", "Linux", "EC2", "S3", "IAM", "Cloud Foundations"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] bg-[var(--surface-3)] px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[var(--text-2)] transition-colors duration-300 hover:border-[var(--line-accent)] hover:bg-[var(--surface-raised)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/work/aws-cloud"
                    className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-[var(--orange-light)] transition-colors hover:text-[var(--text-1)]"
                  >
                    See the AWS project
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="aws-journey-media relative min-h-[340px] overflow-hidden border-t border-[var(--line)] lg:border-l lg:border-t-0">
                <Image
                  src="/images/aws-journey.jpg"
                  alt="Andrea at an AWS re/Start Digital Academy event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center grayscale-[10%] transition-transform duration-700 ease-out hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 border border-[var(--line)] bg-[var(--surface-3)] px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/80">
                  <Terminal size={12} />
                  AWS re/Start
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container section-pad">
          <div className="section-kicker-row" data-reveal="fade"><span>03 / Credentials & community</span><span>Learning beyond the classroom</span></div>
          <div className="about-credentials-grid">
            <div data-reveal="left">
              <div className="section-overline-row"><p className="section-overline">Certifications</p><span className="section-overline-note">2 earned · 2025</span></div>
              <div className="credentials-list">
                {certifications.map(({ year, title, issuer, icon: Icon }) => (
                  <article className="credential-row" key={title}>
                    <div className="credential-icon"><Icon size={16} /></div>
                    <div className="credential-copy">
                      <span>{year}</span>
                      <h3>{title}</h3>
                      <p>{issuer}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="credentials-footnote">More certifications can be added here as they are completed.</p>
            </div>

            <div data-reveal="right">
              <div className="section-overline-row"><p className="section-overline">Organizations</p><span className="section-overline-note">2025 — 2026</span></div>
              <div className="org-list">
                {organizations.map(({ year, name, role, icon: Icon }) => (
                  <article className="org-row" key={name}>
                    <div className="credential-icon"><Icon size={15} /></div>
                    <div className="credential-copy">
                      <span>{year}</span>
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="site-container section-pad">
          <div className="section-kicker-row" data-reveal="fade"><span>04 / Projects</span><span>Academic foundation</span></div>
          <div className="selected-projects-list">
            {selectedProjects.map((project, index) => (
              <article className="about-project-row" data-reveal={index % 2 === 0 ? "left" : "right"} key={project.title}>
                <div className="about-project-index">0{index + 1}</div>
                <div className="about-project-main">
                  <div className="about-project-meta"><span>{project.year}</span><span>{project.type}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="about-project-cta" data-reveal="fade">
            <span>More hands-on work across data, cloud, systems, and support.</span>
            <Link href="/work" className="inline-link-light group">Explore the portfolio <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="site-container section-pad">
          <div className="section-kicker-row" data-reveal="fade"><span>05 / Tools & software</span><span>Working stack</span></div>
          <div className="max-w-2xl" data-reveal>
            <p className="section-overline orange-text">Tools & software</p>
            <h2 className="section-heading-light">The tools behind the work.</h2>
            <p className="section-copy-light">A practical stack across data, development, cloud infrastructure, systems, workflow, and creative technology.</p>
          </div>
          <div className="about-tools-wrap" data-reveal="fade"><ToolConstellation /></div>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container compact-cta" data-reveal>
          <div><p className="section-overline">Next</p><h2 className="section-heading-dark">Want to see how I put these skills into practice?</h2></div>
          <Link href="/work" className="button-dark group">Explore my work <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
