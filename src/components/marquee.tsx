"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Infinite marquee.
 *
 * The track holds the same group of children twice and translates by -50%,
 * so the loop is seamless with no JS driving it per frame.
 *
 * It pauses whenever it scrolls out of view, so an idle animation never
 * runs against a viewport nobody is looking at, and pauses on hover so
 * links inside it stay clickable.
 */
export default function Marquee({
  children,
  duration = 38,
  reverse = false,
  label,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="marquee"
      data-active={active}
      data-direction={reverse ? "reverse" : "forward"}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div className="marquee-track">
        {/* Second copy is decorative duplication for the loop, so it is
            hidden from assistive tech. */}
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
