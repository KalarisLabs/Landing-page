# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-02-18 - Keyboard Accessibility in Interactive Hover-Only Layouts
**Learning:** Hover-triggered animations or expandables (like interactive grids showing detailed descriptions on mouseover) completely lock out keyboard and screen-reader users if they don't receive focus states and tab accessibility. Simply mapping hover to mouseenter/mouseleave creates an inaccessible silo.
**Action:** Always complement mouse events with `tabIndex={0}`, `role="button"` or similar semantic interactive roles, `onFocus`, `onBlur`, and proper keyboard event mappings (`onKeyDown` for Space/Enter if needed, or focus-expand patterns) along with `aria-expanded` states to keep UI transitions universally usable.
