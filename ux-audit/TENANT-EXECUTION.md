# Tenant Sections — Execution Plan
**Date:** April 13, 2026

---

## Task Overview

| # | Task | File | Type | Depends On |
|---|------|------|------|-----------|
| 1 | Add "Tenants" nav link | Header.tsx | Edit | None |
| 2 | Create TenantHero | TenantHero.tsx | New | None |
| 3 | Create TenantFeatures | TenantFeatures.tsx | New | None |
| 4 | Replace TenantBanner → TenantActions | TenantActions.tsx | New + Delete old | None |
| 5 | Update page.tsx section order | page.tsx | Edit | Tasks 1-4 |
| 6 | Update Playwright tests | homepage.spec.ts | Edit | Task 5 |

Tasks 1-4 are **independent** — can run in parallel.
Task 5 depends on all components existing.
Task 6 runs last to verify.

---

## Task 1: Header Nav — Add "Tenants" link
**File:** Header.tsx **Line:** 17-22

```diff
  const NAV_LINKS = [
    { label: "Owners", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#areas" },
    { label: "About", href: "#how" },
+   { label: "Tenants", href: "#tenants" },
    { label: "Contact", href: "#cta" },
  ];
```

Desktop + mobile nav auto-update (both iterate NAV_LINKS).

---

## Task 2: TenantHero.tsx (NEW)
**File:** src/components/TenantHero.tsx

- Server component (no "use client")
- `id="tenants"` — nav scroll target
- Background: `#F0F4FF` (light blue)
- Blue accent label "FOR TENANTS" (`#1D4ED8`)
- Headline: "Renting Made Simple."
- Subtitle: "We make your renting experience stress-free — from move-in to move-out."
- 3 scan points with blue CheckCircle icons:
  1. "Pay rent online in seconds"
  2. "24/7 maintenance — we respond, not a voicemail"
  3. "Transparent lease terms, no surprises"
- Compact: `py-16 lg:py-20`
- Left-aligned text (max-w-2xl)

---

## Task 3: TenantFeatures.tsx (NEW)
**File:** src/components/TenantFeatures.tsx

- `"use client"` (Framer Motion hover)
- Background: `#F0F4FF` (continues tenant block)
- 3 cards, blue accents:

| Card | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | CreditCard | Easy Online Payments | Pay rent from anywhere — set up autopay and never worry about a late payment again. |
| 2 | Wrench | Fast Maintenance Response | Submit a request online and our team coordinates repairs quickly with vetted vendors. |
| 3 | LayoutDashboard | Your Tenant Portal | View your lease, track payments, and communicate with management — all in one place. |

- Cards: white bg, blue border `rgba(29,78,216,0.1)`, `motion.div whileHover={{ y: -6 }}`
- Icon containers: `rgba(29,78,216,0.08)` bg
- Compact: `py-16 lg:py-20`

---

## Task 4: TenantBanner → TenantActions
**File:** Delete TenantBanner.tsx, Create TenantActions.tsx

Changes from current TenantBanner:
- Export: `TenantActions` not `TenantBanner`
- Heading: "Get Started" (not "Are You a Tenant?")
- Subtitle: "Quick access to your tenant tools."
- Background: `#F0F4FF` (not `#F8FAFC`), no borderTop
- Card borders: `rgba(29,78,216,0.1)` (blue tint)
- Icon containers: `rgba(29,78,216,0.08)` bg
- Phone CTA moved to bottom center with Phone icon
- Same 4 cards: Available Rentals, Pay Rent, Maintenance Request, Tenant Portal

---

## Task 5: page.tsx — New section order
**File:** src/app/page.tsx

```
Hero
TrustBar
WhyRentCore
Services
Pricing
HowItWorks
About
AreasServed
─── TENANT BLOCK (all #F0F4FF bg) ───
TenantHero        ← NEW (ScrollReveal distance=40)
TenantFeatures    ← NEW (ScrollReveal distance=40)
TenantActions     ← RENAMED (ScrollReveal distance=30)
─── END TENANT BLOCK ───
Resources
FinalCTA
Footer
```

Imports: Remove TenantBanner, add TenantHero + TenantFeatures + TenantActions.

---

## Task 6: Playwright Tests

**Add to sections check:**
```ts
const sections = ["#hero", "#why", "#services", "#pricing", "#how", "#about", "#tenants"];
```

**Add new test block:**
- Tenant hero renders with heading
- Tenant scan points visible
- Tenant feature cards render (3 cards)
- Tenant action cards render (4 cards)
- Nav has "Tenants" link

---

## Design System — Tenant vs Owner

| Element | Owner Sections | Tenant Sections |
|---------|---------------|-----------------|
| Accent label color | Orange #F97316 | Blue #1D4ED8 |
| Section background | White / #f8faff | #F0F4FF |
| Card icon bg | rgba(249,115,22,0.18) | rgba(29,78,216,0.08) |
| Card border | #F1F5F9 | rgba(29,78,216,0.1) |
| CTA buttons | Orange #F97316 | Blue #1D4ED8 |
| Section padding | py-24 to py-36 | py-16 to py-20 |

---

## Risks
- 3 consecutive #F0F4FF sections = no separator needed (py spacing handles it)
- Server components as ScrollReveal children = works fine in Next.js
- No "use client" on TenantHero/TenantActions (no interactivity needed)

## Estimated Effort: ~30 min
