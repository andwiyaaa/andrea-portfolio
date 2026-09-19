"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Single passive listener, and state only flips at the threshold, so
    // React re-renders twice per page rather than once per scroll event.
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-nav-wrap" data-scrolled={scrolled}>
      <nav className="site-container site-nav">
        <Link href="/" className="brand-mark" aria-label="Andrea I. Ducosin home">
          <span className="brand-symbol">AID</span>
          <span className="brand-name">Andrea I. Ducosin</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={isActive(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="nav-contact"
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
