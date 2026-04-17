# RentCore UX Audit Notes
**Date:** April 13, 2026
**Reviewed via:** Playwright headed browser (Desktop 1440x900 + Mobile 390x844)

---

## 1. HERO SECTION
**Status:** Good foundation, needs polish

- **Header nav:** "Owners" link goes nowhere visible — needs anchor or page. "Contact" has no dedicated section either.
- **CTA buttons:** "See Pricing" is dark/black — doesn't pop. Should be the brand orange (primary action color). "How It Works" play button is nice but small — easy to miss.
- **Form card:** "Free Rental Analysis" form has 6 fields — that's a LOT for a hero form. Consider reducing to 2-3 fields (address + email) for higher conversion, then ask more after submit.
- **Form selects (Beds/Baths/Type):** Default gray text looks disabled/broken. No visual cue these are dropdowns (missing chevron icon).
- **Floating house image (top-right of form card):** Tiny and feels random. Either make it bigger/purposeful or remove it.
- **Social proof avatars:** Good placement but generic Unsplash faces feel fake. Would be stronger with real client photos or just remove avatars and keep the star rating.

---

## 2. TRUST BAR
**Status:** Functional but flat

- **Numbers are strong** (150+ Doors, 98% Retention, 15 Days, 4.9 star) but the section has zero visual weight. White on white — it scrolls by without registering.
- **Suggestion:** Add subtle background color or card treatment. Or integrate the stats INTO the hero section instead of a separate band.
- **"4.9 star"** — the star character (★) looks different from the hero's Lucide stars. Inconsistent.

---

## 3. WHY RENT CORE
**Status:** Clean and scannable now

- **Cards are good** — icon + stat + one-liner works well.
- **Stats (+12%, 24/7, 15+)** are strong visual anchors.
- **No CTA on cards** — previously had "Learn more" which went nowhere (correctly removed). But the cards feel dead-ended. Consider making the whole card clickable to the relevant service section.
- **Section heading:** "Your Time Is Worth More Than Managing Tenants" — strong. Keep.

---

## 4. SERVICES (Dark Section)
**Status:** Decent but text-heavy for a dark section

- **Dark background differentiates well** from the white sections above/below.
- **6 cards look uniform** — all same size, same orange icon, same layout. No visual hierarchy. Consider making 1-2 services "featured" (larger card or different treatment).
- **Card descriptions are still 2 lines** — could be tighter. On dark backgrounds, less text = more impact.
- **Heading:** "'Keys in Hand' and 'Rent in Your Account'" — clever but the quoted phrases in light gray are hard to read against dark bg.

---

## 5. PRICING + CALCULATOR
**Status:** Calculator is strong, layout needs work

- **Calculator UX is solid** — pre-filled $1800, instant results, % of rent stat, annual estimate. Well done.
- **"Show details" toggle** works but the collapsed state hides important fees (leasing $1,350 is a big number to hide). Consider showing at least the leasing fee by default.
- **Left/right imbalance:** Calculator card is visually heavy (dark header + blue banner + numbers). Right side "What's Included" 6 icon grid feels light in comparison. The two sides compete instead of complement.
- **Section header paragraph** is still long — "We provide full service, hands-on property management designed to eliminate the stress..." could be one line.
- **Mobile:** Calculator works well on mobile. "What's Included" grid stacks to 1-column which is fine.

---

## 6. HOW IT WORKS
**Status:** Generic template feel

- **3 steps with connecting line** — this is the most "template website" section on the page. Every SaaS/service site has this exact layout.
- **Icons are generic gray** — no color, no energy. Compare to the orange icons in Services.
- **Step descriptions are too long** — each is 2-3 lines. Should be 1 line max.
- **The connecting dotted line** between steps is barely visible.
- **CTA button at bottom** ("Get Your Free Rental Analysis") is outlined/ghost style — weak. This is a conversion point, needs a solid button.

---

## 7. ABOUT (Dale Figger)
**Status:** Good content, layout needs work

- **Dale's photo is strong** — professional, trustworthy. Good choice.
- **Bio text is TWO full paragraphs** — too much for scanning. People won't read this. Needs to be shorter or formatted as bullet points.
- **Tagline quote box at bottom** is nice — dark card with the quote stands out.
- **No CTA** — after reading about Dale, what should the user do? Add a "Schedule a Call" or "Meet Dale" button.

---

## 8. AREAS SERVED
**Not captured separately** — appears to be between About and CTA. Needs review.

---

## 9. BLOG/RESOURCES
**Status:** Filler content

- **3 blog cards** with stock photos. Headlines are good ("Phoenix Rental Market Report Q1 2024", "Out-of-State Investing in Arizona").
- **But these link nowhere** — if blog doesn't exist yet, remove this section. Empty promises hurt trust.
- **Stock photos on cards** feel generic compared to the rest of the site.

---

## 10. FINAL CTA + FOOTER
**Status:** Functional

- **CTA section** has a nice dark overlay background image. "Get Your Free Rental Analysis" button is there.
- **Footer is clean** — logo, columns for Owners/Tenants/Company, contact info. Standard and good.
- **Footer links** — many likely go nowhere yet. Dead links = bad UX.

---

## 11. MOBILE (390px)
**Status:** Works but needs attention

- **Hero stacks well** — headline, scan points, buttons, then form below. Good.
- **Form on mobile** — 6 fields stacked vertically is a LONG scroll. Feels like too much work. Definitely reduce fields on mobile.
- **Calculator on mobile** — works great. Input, blue banner, monthly/annual side by side. Clean.
- **"What's Included" on mobile** — stacks to single column, each item takes more space. Long scroll.
- **Hamburger menu** — present, but didn't test if it opens/works.

---

## TOP 5 PRIORITIES (Impact vs Effort)

1. **Reduce hero form to 2-3 fields** — biggest conversion impact, easy fix
2. **Make primary CTA orange** (not black) — brand consistency, 2-min fix
3. **Shorten "How It Works" descriptions to 1 line each** — kills template feel
4. **Add CTA to About section** — missed conversion opportunity
5. **Remove or hide Blog section** if links don't work — dead links hurt trust

---

## OVERALL VIBE CHECK
The site is **clean and professional** but still reads as a **template website**. What's missing:
- **Personality** — Dale's voice is strong in the copy but the visual design is generic
- **Motion/interaction** — no scroll animations, no micro-interactions, everything is static
- **Differentiation** — nothing makes this visually memorable vs competitors
- **Trust signals** — no real testimonials, no Google reviews embed, no license number displayed
