# RentCore UX Implementation Plan
**Date:** April 13, 2026

---

## PHASE 1: Conversion Fixes (Day 1) — LOW effort, VERY HIGH impact

| # | Task | File | What |
|---|------|------|------|
| 1.1 | Hero CTA → Orange | Hero.tsx | "See Pricing" button: black → #F97316 orange |
| 1.2 | Hero Form 6 → 2 fields | Hero.tsx | Keep address + email only. Remove beds/baths/type/name |
| 1.3 | Remove floating house image | Hero.tsx | Tiny random image above form card — delete it |
| 1.4 | Pricing: Show leasing fee by default | Pricing.tsx | `showFees` default `true`, or pull leasing fee above toggle |
| 1.5 | HowItWorks CTA → Orange solid | HowItWorks.tsx | Ghost button → solid orange with ArrowRight icon |
| 1.6 | About: Add CTA | About.tsx | Add "Get Your Free Analysis" button after tagline quote |

---

## PHASE 2: Trust & Credibility (Day 1-2) — MEDIUM effort, HIGH impact

| # | Task | File | What |
|---|------|------|------|
| 2.1 | Replace fake avatars | Hero.tsx | Unsplash faces → colored initial circles (DK, MJ, RS, LP) |
| 2.2 | TrustBar → dark/blue bg | TrustBar.tsx | White-on-white → dark bg with white text. Counter animation |
| 2.3 | Footer: Add broker license | Footer.tsx | "AZ Broker License #XXXXX" in bottom bar |
| 2.4 | About: Shorten bio | About.tsx | 2 paragraphs → 1 tight paragraph |

---

## PHASE 3: Visual Polish (Day 2-3) — MEDIUM effort, MEDIUM-HIGH impact

| # | Task | File | What |
|---|------|------|------|
| 3.1 | ScrollReveal → GSAP | ScrollReveal.tsx | Replace IntersectionObserver with GSAP ScrollTrigger |
| 3.2 | Services: Featured card | Services.tsx | Make 1 card larger/highlighted. Shorten all descriptions to 1 line |
| 3.3 | Services: Fix heading contrast | Services.tsx | Quoted phrases rgba 0.35 → 0.6 on dark bg |
| 3.4 | HowItWorks: 1-line descriptions | HowItWorks.tsx | Cut each step desc to single sentence |
| 3.5 | HowItWorks: Branded icons | HowItWorks.tsx | Gray icons → Blue/Orange/Green per step |
| 3.6 | Pricing: Shorten header paragraph | Pricing.tsx | Long Dale quote → 1 scannable line |

---

## PHASE 4: Animations (Day 3-4) — MEDIUM-HIGH effort, MEDIUM impact

| # | Task | File | What |
|---|------|------|------|
| 4.1 | Hero GSAP entrance timeline | Hero.tsx + globals.css | Replace CSS keyframes with GSAP timeline |
| 4.2 | TrustBar counter animation | TrustBar.tsx | Numbers count up on scroll (150+, 98%, 15 Days) |
| 4.3 | Service cards hover spring | Services.tsx | Framer Motion whileHover spring effect |
| 4.4 | Pricing number transition | Pricing.tsx | Animate fee numbers on rent input change |

---

## PHASE 5: Content Cleanup (Day 2-3) — LOW effort, MEDIUM impact

| # | Task | File | What |
|---|------|------|------|
| 5.1 | Blog: Remove or "Coming Soon" | Resources.tsx | Dead links → either remove section or add badge |
| 5.2 | Footer: Wire up links | Footer.tsx | Hash links → actual section anchors (#why, #services, etc) |
| 5.3 | Pricing: Fix left/right balance | Pricing.tsx | Grid ratio 1fr/1.1fr → 1.1fr/1fr |
| 5.4 | Mobile: form optimization | Hero.tsx | Already fixed if form reduced to 2 fields |

---

## PHASE 6: Polish (Day 4) — LOW effort, LOW impact

| # | Task | File | What |
|---|------|------|------|
| 6.1 | Mobile menu animation | Header.tsx | Snap open → Framer Motion slide-down |
| 6.2 | FinalCTA button → orange | FinalCTA.tsx | White button → orange for consistency |

---

## PRIORITY ORDER (if limited time)
1. Phase 1 — do ALL of it, biggest ROI
2. Phase 2 (2.1 + 2.2) — trust signals
3. Phase 3 (3.4 + 3.5) — kills template feel
4. Phase 5 (5.1) — remove dead blog links
5. Phase 4 — animations (nice to have)
6. Phase 6 — polish (last)

## RULES
- DO NOT change: typography, logo, tagline, brand colors
- Keep Dale's voice/tone in all copy
- Test on mobile after every phase
- Run Playwright tests after each phase to catch regressions
