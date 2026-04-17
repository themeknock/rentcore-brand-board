# Hero "Empty Vibe" Fix — Plan
**Date:** April 13, 2026

---

## Problem
- `min-h-screen` (100vh) = too tall, content floats in middle with dead space above
- `pt-28 lg:pt-36` (112px / 144px) pushes content down further
- Background orbs at 5-6% opacity = invisible, bg feels flat/dead
- No visual texture or depth — just plain #f8faff
- Right side has only the form card, nothing else to fill the space

---

## Research Findings

Best SaaS/service sites (Linear, Stripe, Vercel, Webflow):
1. Hero height: 85-92vh, NOT full 100vh
2. Background: layered gradients + subtle dot/grid pattern for texture
3. Geometric accents behind key elements for depth
4. Micro-decorative elements (floating shapes) fill dead zones
5. Soft bottom edge transition

---

## Execution Plan

### Fix 1: Reduce hero height + padding
**File:** Hero.tsx

| Property | Current | New |
|----------|---------|-----|
| Section min-height | `min-h-screen` (100vh) | `min-h-[90vh]` |
| Container pt | `pt-28 lg:pt-36` | `pt-24 lg:pt-28` |
| Container pb | `pb-16 lg:pb-28` | `pb-16 lg:pb-24` |

Result: Content moves up, less dead space, still fills viewport meaningfully.

### Fix 2: Boost background orbs + add a third
**File:** Hero.tsx

Current orbs are nearly invisible (5-6% opacity). Increase to 10-14% and add a third purple one.

| Orb | Current | New |
|-----|---------|-----|
| Blue (top-right) | `rgba(29,78,216,0.06)`, 600px | `rgba(29,78,216,0.12)`, 600px |
| Orange (bottom-left) | `rgba(249,115,22,0.05)`, 500px | `rgba(249,115,22,0.10)`, 500px |
| Purple (center) | — | `rgba(124,58,237,0.06)`, 400px, `top-[40%] left-[40%]` |

### Fix 3: Add subtle dot grid pattern
**File:** Hero.tsx — add CSS background on the section

Add a radial dot grid as a second background layer on the section:
```css
background-image: radial-gradient(circle, rgba(15,23,42,0.04) 1px, transparent 1px);
background-size: 32px 32px;
```

This adds texture to the entire hero without competing with content. Stripe/Linear technique.

### Fix 4: Add geometric accent behind form card
**File:** Hero.tsx

Add a large (300-400px) decorative ring/circle element behind the form card at low opacity. This fills the right side visually:

```tsx
<div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full"
  style={{ border: "1px solid rgba(29,78,216,0.08)", background: "rgba(29,78,216,0.02)" }} />
```

Positioned behind the form card using z-indexing. Creates depth without adding content.

### Fix 5: Add floating micro-decorations
**File:** Hero.tsx

2-3 small shapes scattered in empty zones:
- A small orange ring (40px) top-left area
- A blue plus/cross shape mid-right
- A small dotted circle bottom-left

Each at 8-12% opacity with gentle float animation (CSS keyframe, translateY 10px over 6s infinite).

### Fix 6: Soft bottom edge
**File:** Hero.tsx

Add a gradient fade at the bottom of the hero section:
```tsx
<div className="absolute bottom-0 left-0 right-0 h-24"
  style={{ background: "linear-gradient(to bottom, transparent, #fff)" }} />
```

This creates a smooth visual transition to the TrustBar below.

---

## Summary of Changes

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 1 | Height + padding reduce | 2 min | High — kills dead space |
| 2 | Boost orbs + add third | 3 min | Medium — adds color depth |
| 3 | Dot grid pattern | 2 min | Medium — adds texture |
| 4 | Geometric accent behind form | 3 min | Medium — fills right side |
| 5 | Floating micro-decorations | 5 min | Low-Medium — adds life |
| 6 | Bottom edge gradient | 2 min | Low — smooth transition |

**Total: ~15 min, all in Hero.tsx + globals.css**

---

## What NOT to do
- ❌ Don't add more text/content — problem is visual weight, not content
- ❌ Don't add a background image — keeps it clean and fast
- ❌ Don't make decorations too visible — they should be felt, not seen
- ❌ Don't change the form card or headline — those are working fine
