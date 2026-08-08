## 2025-05-24 - Interactive Grid Hover Accessibility
**Learning:** Interactive grid elements displaying detail expansions on hover must be made keyboard-accessible. Converting custom grid cards with hover-only state-triggering into focusable elements with `tabIndex={0}`, `role="button"`, focus/blur handlers, key down listeners (for Enter/Space), and screen-reader connection tags (`aria-expanded`, `aria-controls`) dramatically increases UI accessibility without altering the editorial desktop aesthetic.
**Action:** Ensure all present and future hover-triggering detail cards are built with focus rings, keyboard triggers, and standard ARIA state mappings.

## 2025-08-08 - Accordion Keyboard and Screen Reader Accessibility
**Learning:** Standard React client-side accordion patterns lacking interactive attributes (such as `role="region"`, `aria-expanded`, `aria-controls`, and `aria-labelledby`) severely limit screen-reader and keyboard-only navigation. Combining clear focus indicator rings (`focus-visible:ring-2`) and proper WAI-ARIA states ensures a highly accessible and semantic accordion component while maintaining the dark editorial layout.
**Action:** Always implement comprehensive ARIA attributes and focus-visible state indicators for collapsible accordion headers and regions.
