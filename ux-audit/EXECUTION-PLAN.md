# RentCore — Detailed Execution Plan
**Date:** April 13, 2026
**All files in:** `src/components/` unless noted

---

## PHASE 1: Conversion Fixes
**Effort:** ~30 min | **Impact:** Very High

### 1.1 — Hero CTA black → orange
**File:** Hero.tsx **Line:** 48
- Change `background: "#0F172A"` → `background: "#F97316"`
- Change `boxShadow` → `"0 10px 30px rgba(249,115,22,0.25)"`
- Matches brand action color (same as header CTA + form submit button)

### 1.2 — Hero form 6 → 2 fields
**File:** Hero.tsx **Lines:** 91-108
- DELETE: lines 93-99 (Beds/Baths/Type select row)
- DELETE: lines 101-103 (Name/Email grid → keep only Email)
- KEEP: line 92 (Property address input)
- ADD: single email input below address
- Result: Address → Email → Submit button (3 elements, not 6)

### 1.3 — Remove floating house image
**File:** Hero.tsx **Lines:** 82-84
- DELETE the entire `div` with `absolute -top-6 -right-6 w-[180px]`
- Tiny image adds nothing, clutters the form card

### 1.4 — Pricing: show leasing fee by default
**File:** Pricing.tsx **Line:** 34
- Change `useState(false)` → `useState(true)`
- Leasing fee ($1,350 on $1800 rent) is too important to hide

### 1.5 — HowItWorks CTA → orange solid
**File:** HowItWorks.tsx **Lines:** 39-41
- Change `background: "#0F172A"` → `background: "#F97316"`
- Change `boxShadow` → `"0 10px 30px rgba(249,115,22,0.25)"`
- Add `ArrowRight` icon inside button (already imported)

### 1.6 — About: add CTA after tagline
**File:** About.tsx **After line:** 57
- Add orange CTA button: "Get Your Free Analysis →"
- `href="#hero"` to scroll to form
- Style: `background: "#F97316"`, white text, ArrowRight icon
- Import ArrowRight from lucide-react at top

---

## PHASE 2: Trust & Credibility
**Effort:** ~45 min | **Impact:** High

### 2.1 — Replace fake Unsplash avatars with initials
**File:** Hero.tsx **Lines:** 62-65
- DELETE: 4 Unsplash `img` tags
- REPLACE with: 4 colored circles with initials
- Colors: `#1D4ED8`, `#F97316`, `#059669`, `#7C3AED`
- Initials: `DK`, `MJ`, `RS`, `LP`
- Each: `w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold`

### 2.2 — TrustBar: dark background + star fix
**File:** TrustBar.tsx
- Change section background → `background: "#0F172A"`
- Remove borders (borderTop/borderBottom) — not needed on dark
- Stat values: color → `text-white`
- Stat labels: color → `rgba(255,255,255,0.4)`
- Change `"4.9 ★"` → `"4.9/5"` (or inline SVG star)
- Make component `"use client"` for future counter animation

### 2.3 — Footer: add broker license
**File:** Footer.tsx **Line:** 69
- After copyright text, add: `| AZ Broker License #[ask Dale]`
- Same style as copyright: `text-[12px]`, `rgba(255,255,255,0.2)`

### 2.4 — About: shorten bio to 1 paragraph
**File:** About.tsx **Lines:** 42-49
- Merge 2 paragraphs into 1:
- "Dale Figger, owner and licensed Arizona broker, has spent decades managing single-family investment portfolios across Phoenix and Tucson. He treats every property like his own — maximizing rental income, protecting long-term value, and delivering proactive, personalized service."
- DELETE second `<p>` tag entirely

---

## PHASE 3: Visual Polish
**Effort:** ~1.5 hrs | **Impact:** Medium-High

### 3.1 — ScrollReveal: upgrade to GSAP ScrollTrigger
**File:** ScrollReveal.tsx
- Import `gsap` and `ScrollTrigger` from `gsap`
- `gsap.registerPlugin(ScrollTrigger)` in useEffect
- Replace IntersectionObserver with:
  ```
  gsap.from(el, {
    y: distance, opacity: 0, duration: duration/1000,
    ease: "power3.out", delay: delay/1000,
    scrollTrigger: { trigger: el, start: "top 90%", once: true }
  })
  ```
- For stagger mode: use `gsap.from(children, { stagger: staggerDelay/1000, ... })`
- KEEP same prop interface — page.tsx doesn't need changes

### 3.2 — Services: featured card + shorter descriptions
**File:** Services.tsx
- DESCRIPTIONS (shorten each to ~60 chars):
  - Marketing: "Pro photos, multi-platform listings. Avg 15 days to lease."
  - Screening: "Credit, income & background checks. Reliable tenants who stay."
  - Rent: "Automated payments. Funds in your account by the 10th."
  - Maintenance: "24/7 coordination with vetted vendors. No markups."
  - Reporting: "Monthly statements, 1099s, real-time portal access."
  - Compliance: "Move-in/out inspections and AZ law compliance."
- FEATURED: Make first card (Marketing & Leasing) span `md:col-span-2` with slightly different border/glow
- HEADING FIX (line 24): Change quoted phrases from `rgba(255,255,255,0.35)` → `rgba(255,255,255,0.6)`

### 3.3 — HowItWorks: 1-line descriptions + branded icons
**File:** HowItWorks.tsx
- DESCRIPTIONS (1 line each):
  - Step 01: "Free market analysis — no obligation."
  - Step 02: "Leasing, screening, rent collection, maintenance — handled."
  - Step 03: "Monthly reports, real-time portal, full transparency."
- ICON COLORS: Add `color` field to each step:
  - Step 01: `#1D4ED8` (blue) bg, white icon
  - Step 02: `#F97316` (orange) bg, white icon
  - Step 03: `#059669` (green) bg, white icon
- Change icon container from gray (`#F8FAFC` bg) → branded color bg with white icon

### 3.4 — Pricing: shorten header paragraph
**File:** Pricing.tsx **Lines:** 54-56
- Current: "We provide full service, hands-on property management designed to eliminate the stress of ownership — our pricing reflects the level of service and communication most investors don't get elsewhere."
- New: "Full-service management with transparent pricing. No hidden fees — ever."

---

## PHASE 4: Animations
**Effort:** ~2 hrs | **Impact:** Medium

### 4.1 — Hero: GSAP timeline entrance
**File:** Hero.tsx
- Import `gsap` and `useGSAP` from `@gsap/react`
- Add `useGSAP()` hook with timeline:
  ```
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".hero-anim-1", { y: 30, opacity: 0, duration: 0.8 })
    .from(".hero-anim-2", { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
    .from(".hero-anim-3", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
    .from(".hero-anim-4", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
    .from(".hero-anim-5", { y: 15, opacity: 0, duration: 0.7 }, "-=0.4")
    .from(".hero-card-anim", { y: 40, opacity: 0, scale: 0.97, duration: 1 }, "-=0.8")
  ```
**File:** globals.css **Lines:** 25-39
- DELETE all `@keyframes` and `.hero-anim-*` CSS rules (GSAP replaces them)
- KEEP: `.gradient-text`, `.hover-lift`, `@keyframes countPulse`

### 4.2 — TrustBar: counter animation
**File:** TrustBar.tsx
- Already `"use client"` from Phase 2
- Import `gsap`, `ScrollTrigger`, `useGSAP`, `useRef`
- Use `gsap.to()` with `snap: { innerText: 1 }` trick OR simple counter with `requestAnimationFrame`
- Trigger on scroll into view
- "150+" counts 0→150, "98%" counts 0→98, "15 Days" counts 0→15, "4.9/5" counts 0→4.9

### 4.3 — Services: Framer Motion hover
**File:** Services.tsx
- Add `"use client"` directive
- Import `motion` from `framer-motion`
- Wrap each card in `<motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>`
- Replace existing `hover:-translate-y-1` class (Tailwind) with Framer motion

### 4.4 — Pricing: number transition
**File:** Pricing.tsx
- Import `motion, AnimatePresence` from `framer-motion`
- Wrap the big fee number ($162.00) in `<motion.p key={mgmt} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>`
- Same for annual estimate number

---

## PHASE 5: Content Cleanup
**Effort:** ~30 min | **Impact:** Medium

### 5.1 — Blog: add "Coming Soon" badge or remove
**File:** Resources.tsx
- Option A (recommended): Add `pointer-events-none` to cards, add overlay badge:
  ```
  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-500">Coming Soon</span>
  ```
- Remove `cursor-pointer` and `hover:-translate-y-1.5` from cards
- Option B: Delete Resources import from page.tsx entirely

### 5.2 — Footer: wire up anchor links
**File:** Footer.tsx **Lines:** 3-5
- Change OWNER_LINKS to objects:
  ```
  [
    { label: "Why Rent Core", href: "#why" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Free Rental Analysis", href: "#hero" },
    { label: "Owner Portal Login", href: "#" },
  ]
  ```
- Same for TENANT_LINKS and COMPANY_LINKS
- External/future links (Portal Login, Apply Online) → keep `href="#"` but add `aria-disabled="true"` and muted style

### 5.3 — Pricing: fix left/right grid balance
**File:** Pricing.tsx **Line:** ~59
- Change `grid-cols-[1fr_1.1fr]` → `grid-cols-[1.15fr_1fr]`
- Gives calculator more space since it's the interactive element

---

## PHASE 6: Polish & Edge Cases
**Effort:** ~30 min | **Impact:** Low-Medium

### 6.1 — Mobile menu: Framer Motion slide-down
**File:** Header.tsx **Lines:** 93-125
- Import `motion, AnimatePresence` from `framer-motion`
- Wrap mobile menu in `<AnimatePresence>` + `<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>`
- Replace `{mobileOpen && (` with AnimatePresence pattern

### 6.2 — FinalCTA: button white → orange
**File:** FinalCTA.tsx **Line:** 24
- Change `bg-white` + `color: "#0F172A"` → `background: "#F97316"` + `text-white`
- Change `boxShadow` → `"0 20px 40px rgba(249,115,22,0.3)"`
- Consistent action color across entire site

---

## EXECUTION ORDER (recommended)
```
Phase 1 → Phase 2 → Phase 5 → Phase 3 → Phase 4 → Phase 6
```
Phase 5 moved earlier because it's quick fixes that improve trust immediately.

## TEST AFTER EACH PHASE
```
npx playwright test --reporter=list
```
Run existing 12 tests after each phase. Update test expectations if hero text or pricing defaults change.
