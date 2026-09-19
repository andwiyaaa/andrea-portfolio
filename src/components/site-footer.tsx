import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner" data-reveal="fade">
        <div className="site-footer-top">
          <Link href="/" className="site-footer-brand">Andrea I. Ducosin</Link>
          <span className="site-footer-tag">Data · Systems · Cloud</span>
        </div>
        <div className="site-footer-bottom">
          <span>Building practical technology, one system at a time.</span>
          <div className="site-footer-links">
            <Link href="/work">Work <ArrowUpRight size={12} /></Link>
            <Link href="/about">About <ArrowUpRight size={12} /></Link>
            <Link href="/contact">Contact <ArrowUpRight size={12} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
