"use client";

import type { CSSProperties, ReactNode } from "react";

export type SequenceItem = {
  category: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

/**
 * Numbered card grid — the "01 / 05  Method" pattern.
 *
 * `auto-fit` in the CSS sizes and wraps the cards to whatever the
 * container width allows, so this always reads as one aligned row (or
 * rows) of equal-width cards — never a track list narrower than its own
 * box with empty container background showing on one side.
 */
export default function SequenceRail({ items }: { items: SequenceItem[] }) {
  const total = String(items.length).padStart(2, "0");

  return (
    <div className="sequence-rail reveal-stagger">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="sequence-card"
          data-reveal
          style={{ "--i": index } as CSSProperties}
        >
          <header className="sequence-card-top">
            <span className="sequence-count">
              {String(index + 1).padStart(2, "0")} / {total}
            </span>
            <span className="sequence-category">{item.category}</span>
          </header>

          {item.icon ? <span className="sequence-icon">{item.icon}</span> : null}

          <h3 className="sequence-title">{item.title}</h3>
          <p className="sequence-copy">{item.description}</p>

          <span className="sequence-progress" aria-hidden="true">
            <span style={{ width: `${((index + 1) / items.length) * 100}%` }} />
          </span>
        </article>
      ))}
    </div>
  );
}
