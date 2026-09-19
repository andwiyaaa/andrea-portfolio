"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

/**
 * Wraps every route and provides three things:
 *
 *  1. the scroll progress bar
 *  2. the page-to-page transition
 *  3. the scroll-reveal observer that drives every `data-reveal` element
 *
 * The reveal system is deliberately one observer for the whole site rather
 * than a motion component per element: it animates via CSS (opacity and
 * transform only), costs nothing per frame, and works on server components.
 */
export default function SiteExperience({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.22,
  });

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (targets.length === 0) return;

    // If the visitor prefers reduced motion, show everything immediately
    // rather than tying content visibility to an animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          // Reveal once, then stop watching — no lingering listeners.
          observer.unobserve(entry.target);
        });
      },
      {
        // Trigger a little before the element reaches the fold so content
        // is already settling as it enters, rather than popping in.
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.15,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* Opacity only, deliberately. A transform here would make this a
          containing block for `position: fixed`, which would break the
          fixed nav on every route change. */}
      <motion.div
        key={pathname}
        className="page-transition"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
