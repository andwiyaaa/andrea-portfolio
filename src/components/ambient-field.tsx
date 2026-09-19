/**
 * The site's single background layer.
 *
 * Everything else on the site is transparent, so this one fixed element
 * carries the colour from the top of the hero to the bottom of the footer.
 * That is what removes the section-to-section "cuts" — there are no
 * per-section backgrounds left to cut between.
 *
 * Deliberately static, not scroll-linked: `position: fixed` is already
 * pixel-identical at every scroll position, which is the strongest form
 * of "one continuous environment" available — there's no drift to get
 * wrong, and nothing here depends on scroll math. An earlier version
 * made this layer taller than the viewport so it could drift slightly,
 * which meant the visible frame only ever showed a middle slice of it —
 * the vivid part of the gradient was anchored below that slice and
 * never appeared until scrolling well past the first screen. This
 * version paints directly onto the exact viewport, so what's authored
 * is what's shown, immediately, on load.
 */
export default function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      <div className="ambient-sheet" />
      <div className="ambient-grid" />
      <div className="ambient-vignette" />
      <div className="ambient-grain" />
    </div>
  );
}
