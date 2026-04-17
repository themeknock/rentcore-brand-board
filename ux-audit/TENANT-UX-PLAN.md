# RentCore — Tenant UX Plan
**Date:** April 13, 2026

---

## Research Summary

**Industry standard** for PM sites: Homepage is 80-90% owner-focused. Tenants get:
- A nav link ("Tenants" or "Resident Portal") for instant access
- 1-2 sections on homepage with distinct visual treatment
- Optionally a dedicated `/tenants` page for deeper content

**Best practice:** Don't use a toggle/selector — creates friction. Instead, natural page flow with clearly labeled sections + nav shortcut.

**Recommended ratio:** 65% owner / 25% tenant / 10% shared

---

## Current State

```
Header Nav: Owners | Services | Areas | About | Contact
Hero ─────────────────────── OWNERS (lead form)
TrustBar ─────────────────── OWNERS (investor stats)
WhyRentCore ──────────────── OWNERS
Services ─────────────────── OWNERS
Pricing ──────────────────── OWNERS (calculator)
HowItWorks ───────────────── OWNERS
About ────────────────────── OWNERS (Dale bio)
AreasServed ──────────────── OWNERS
Resources ────────────────── OWNERS (investor articles)
TenantBanner ─────────────── TENANTS (1 weak section)
FinalCTA ─────────────────── OWNERS
Footer ───────────────────── BOTH (links only)
```

**Problem:** Tenants get 1 small section buried at the bottom. Feels like afterthought.

---

## Proposed New Flow

```
Header Nav: Owners | Services | Areas | About | Tenants | Contact
                                                 ↑ NEW (scrolls to #tenants)

Hero ─────────────────────── OWNERS (lead form)
TrustBar ─────────────────── OWNERS (investor stats)
WhyRentCore ──────────────── OWNERS
Services ─────────────────── OWNERS
Pricing ──────────────────── OWNERS (calculator)
HowItWorks ───────────────── OWNERS
About ────────────────────── SHARED (Dale serves both audiences)
AreasServed ──────────────── SHARED

── VISUAL BREAK (background color shift to signal new audience) ──

TenantHero ───────────────── TENANTS (NEW — headline + value props)
TenantFeatures ───────────── TENANTS (NEW — 3 feature cards)
TenantActions ────────────── TENANTS (IMPROVED — quick access cards)

── END TENANT BLOCK ──

Resources ────────────────── SHARED
FinalCTA ─────────────────── OWNERS
Footer ───────────────────── BOTH
```

---

## What To Build

### 1. Header: Add "Tenants" nav link
**File:** Header.tsx
**Change:** Add `{ label: "Tenants", href: "#tenants" }` to NAV_LINKS array

### 2. TenantHero — New component
**File:** NEW `src/components/TenantHero.tsx`

A mini hero section for tenants. NOT a full-screen hero — compact but impactful.

**Content:**
- Subheading: "FOR TENANTS" (orange label, like other sections)
- Headline: "Renting Made Simple."
- Subtitle: "We make your renting experience stress-free — from move-in to move-out."
- 3 quick scan points:
  - "Pay rent online in seconds"
  - "24/7 maintenance — we respond, not a voicemail"
  - "Transparent lease terms, no surprises"

**Design:**
- Light blue/slate background to visually separate from owner content
- id="tenants" for nav scroll target
- Compact: py-20, not py-36 like owner sections

### 3. TenantFeatures — New component
**File:** NEW `src/components/TenantFeatures.tsx`

3 feature cards showing tenant benefits. NOT 6 cards — keep it concise.

**Cards:**
1. **Easy Online Payments**
   Icon: CreditCard
   "Pay rent online anytime. Auto-pay available. Never miss a due date."

2. **Fast Maintenance Response**
   Icon: Wrench
   "Submit requests 24/7 through your portal. We coordinate with vetted vendors — no waiting."

3. **Your Tenant Portal**
   Icon: LayoutDashboard
   "View lease details, payment history, and documents. Everything in one place."

**Design:**
- Same light blue/slate background (continues tenant block)
- Cards on white with blue accent (NOT orange — differentiate from owner cards)
- Compact layout — 3 columns desktop, stack mobile

### 4. TenantActions — Improve existing TenantBanner
**File:** Rename/update `src/components/TenantBanner.tsx` → `TenantActions.tsx`

**Changes from current:**
- Remove "Are You a Tenant?" heading (TenantHero handles intro)
- Change to: "Get Started" or just the 4 action cards
- Keep the 4 cards: Available Rentals, Pay Rent, Maintenance Request, Tenant Portal
- Add a CTA: "Have questions? Call us at (602) 555-0180"
- End tenant block with subtle divider

### 5. Page order update
**File:** page.tsx

```
AreasServed
TenantHero        ← NEW
TenantFeatures    ← NEW  
TenantActions     ← IMPROVED (was TenantBanner)
Resources
FinalCTA
```

---

## What NOT To Do

- ❌ Don't add a tenant hero form — owners are the revenue audience
- ❌ Don't add tenant pricing — there's nothing to price for tenants
- ❌ Don't add tenant testimonials — not enough content yet
- ❌ Don't make tenant sections same height as owner sections — keep compact
- ❌ Don't use orange accent for tenant sections — use blue to differentiate

---

## Visual Identity for Tenant Block

| Element | Owner Sections | Tenant Sections |
|---------|---------------|-----------------|
| Accent label | Orange (#F97316) | Blue (#1D4ED8) |
| Section bg | White / #f8faff | #F0F4FF (light blue tint) |
| Card icons | Orange bg | Blue bg |
| CTAs | Orange buttons | Blue buttons |
| Section height | py-24 to py-36 | py-16 to py-20 (compact) |

This creates a clear visual signal: "you've entered the tenant zone" without being jarring.

---

## Files To Create/Edit

| Action | File | Type |
|--------|------|------|
| Edit | Header.tsx | Add "Tenants" nav link |
| Create | TenantHero.tsx | New component |
| Create | TenantFeatures.tsx | New component |
| Rename/Edit | TenantBanner.tsx → TenantActions.tsx | Improve existing |
| Edit | page.tsx | Update section order |

**Estimated effort:** ~45 min
**No existing components broken** — only additions + 1 rename
