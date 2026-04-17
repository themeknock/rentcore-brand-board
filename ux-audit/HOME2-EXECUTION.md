# Home-2 Visual Upgrade — Execution Plan
**Route:** localhost:3001/home-2
**Rule:** NO existing files modified. All new files only.

---

## New Files to Create (7)

| # | File | Type |
|---|------|------|
| 1 | src/app/home-2/layout.tsx | Nested layout (Inter 300) |
| 2 | src/app/home-2/page.tsx | Route page |
| 3 | src/components/v2/HeroV2.tsx | Cinematic photo hero |
| 4 | src/components/v2/WhyRentCoreV2.tsx | Image + text split |
| 5 | src/components/v2/TestimonialSection.tsx | Social proof quotes |
| 6 | src/components/v2/PhotoBreak.tsx | Parallax photo band |
| 7 | src/components/v2/HowItWorksV2.tsx | Vertical timeline |

## Reused Components (unchanged)
Header, TrustBar, Services, Pricing, About, AreasServed, TenantHero, TenantFeatures, TenantActions, Resources, FinalCTA, Footer, ScrollReveal

---

## Section Order for home-2

```
Header (reuse)
HeroV2 ──────────── Dark photo bg, parallax, white text, form card
TrustBar (reuse) ── Dark bg, counter animation
WhyRentCoreV2 ───── Image-left + text-right split
Services (reuse) ── Dark section + stagger reveal
TestimonialSection ─ Full-width quote + mini reviews
Pricing (reuse) ──── Calculator
PhotoBreak ────────── Parallax property photo band
HowItWorksV2 ──────── Vertical timeline
About (reuse) ────── Dale bio
AreasServed (reuse)
TenantHero (reuse)
TenantFeatures (reuse)
TenantActions (reuse)
Resources (reuse)
FinalCTA (reuse)
Footer (reuse)
```

---

## Execution Steps

### Step 1: Layout + Route shell
- Create home-2/layout.tsx with Inter 300
- Create home-2/page.tsx with all imports + section order
- Test: localhost:3001/home-2 should load

### Step 2: HeroV2
- Phoenix skyline Unsplash bg
- Dark overlay gradient
- White headline + scan points
- Floating white form card
- GSAP parallax on bg image
- GSAP entrance timeline

### Step 3: WhyRentCoreV2
- Left: Property photo (rounded, shadow)
- Right: Section label + heading + 3 feature items stacked (not cards)
- GSAP: Image from left, text from right

### Step 4: TestimonialSection
- Large quote with orange left border
- 2 mini review cards below
- Licensed broker badge

### Step 5: PhotoBreak
- Full-width property photo (h-400px)
- GSAP parallax scrub
- Subtle overlay + tiny centered text

### Step 6: HowItWorksV2
- Vertical center line (gradient blue→orange→green)
- 3 steps alternating left/right
- Mobile: line on left, cards on right
- GSAP: cards animate from their side

### Step 7: Wire everything + test
- All ScrollReveal wrappers
- Playwright test on /home-2
