"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const contactLinks = [
  { label: "LinkedIn", description: "Connect with me professionally", href: "https://www.linkedin.com/in/andreaducosin/", type: "linkedin" },
  { label: "GitHub", description: "Explore my projects and code", href: "https://github.com/andwiyaaa/andrea-portfolio", type: "github" },
  { label: "Email", description: "ducosinandrea@gmail.com", href: "mailto:ducosinandrea@gmail.com", type: "email" },
  { label: "Phone", description: "0997 691 8422", href: "tel:+639976918422", type: "phone" },
];

function BrandIcon({ type }: { type: string }) {
  if (type === "linkedin") return <span className="brand-icon-text">in</span>;
  if (type === "github") return <span className="brand-icon-text">GH</span>;
  if (type === "email") return <Mail size={18} />;
  return <Phone size={18} />;
}

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="site-shell">
      <SiteNav />

      <section className="section-dark">
        <div className="site-container page-hero-dark contact-hero">
          <Link href="/" className="back-link-dark group"><ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back home</Link>
          <p className="section-overline orange-text">Get in touch</p>
          <h1 className="page-heading-light">
            <span className="line-mask">
              <motion.span
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Let&apos;s build something useful.
              </motion.span>
            </span>
          </h1>
          <p className="page-lead-light">Whether it&apos;s data, systems, cloud, or technical support, I&apos;m open to opportunities where I can contribute, solve practical problems, and keep growing.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container section-pad">
          <div className="section-kicker-row" data-reveal="fade"><span>01 / Contact</span><span>Open to opportunities</span></div>
          <div className="contact-grid reveal-stagger">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-row group"
                data-reveal
                style={{ "--i": index } as CSSProperties}
              >
                <span className="contact-icon"><BrandIcon type={contact.type} /></span>
                <span className="contact-meta"><strong>{contact.label}</strong><small>{contact.description}</small></span>
                <ArrowUpRight size={17} className="contact-arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="site-container section-pad contact-location" data-reveal>
          <div><p className="section-overline orange-text">Based in</p><h2 className="section-heading-light">Cavite, Philippines</h2></div>
          <div className="location-mark"><MapPin size={17} /><span>Data · Systems · Cloud</span></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
