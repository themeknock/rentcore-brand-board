# RentCore Dark Rebrand — Board Page Refresh
**Date:** April 13, 2026
**Target:** rentcore-board project → new page at /home-revised

---

## Dale's New Direction (from Upwork messages)

### Colors (from brand board image):
- **White:** #FFFFFF
- **Light Gray:** #9CA3AF
- **Teal Blue:** #4A8B9F (muted, sophisticated — NOT bright blue)
- **Rust/Brown-Orange:** #A0522D (warm, earthy — NOT bright orange)
- **Black:** #111111

### Logo Direction:
- House/keystone icon inside a circle mark
- "RENT CORE" or "RENTCORE" text below/beside
- Rust/brown-orange as primary logo color

### Reference Site Feel:
- NOONCH-style: dark backgrounds, modern, cinematic
- Full-width images with dark overlays
- Clean typography, lots of breathing room

---

## New Color System

| Role | Old | New |
|------|-----|-----|
| Background (primary) | #FFFFFF (white) | #111111 (near-black) |
| Background (sections) | #F8FAFC, #f8faff | #1A1A1A, #0D0D0D |
| Background (cards) | #FFFFFF | #1F1F1F |
| Text primary | #0F172A (dark) | #FFFFFF (white) |
| Text secondary | #64748B (gray) | #9CA3AF (light gray) |
| Text muted | #94A3B8 | #6B7280 |
| Accent primary | #F97316 (bright orange) | #A0522D (rust brown) |
| Accent secondary | #1D4ED8 (bright blue) | #4A8B9F (teal) |
| Accent success | #059669 (emerald) | #4A8B9F (teal) |
| Border | #F1F5F9 | rgba(255,255,255,0.08) |
| Card border | #F1F5F9 | rgba(255,255,255,0.06) |
| CTA button bg | #F97316 | #A0522D |
| CTA button shadow | rgba(249,115,22,0.25) | rgba(160,82,45,0.3) |
| Gradient text | blue gradient | teal gradient |

---

## Logo Update

Replace wordmark `Rent`(blue)`Core`(orange) with:
- `Rent`(teal #4A8B9F)`Core`(rust #A0522D)
- Or monochrome white logo on dark bg

---

## Sections to Transform

### 1. Global styles
- Dark body bg: #111111
- Selection: teal bg
- Gradient text: teal gradient
- Card hover: subtle glow instead of shadow

### 2. Header
- Transparent on dark hero
- Scroll: dark frosted glass (rgba(17,17,17,0.95) + blur)
- Logo: teal + rust
- CTA button: rust bg

### 3. Hero
- Keep dark photo bg approach (like HeroV2 but with new colors)
- Rust accent on "Start Earning." instead of orange
- Scan point checks: teal instead of green
- CTA: rust primary button

### 4. Trust Bar
- Already dark in current site — update colors to rust/teal accents
- Numbers: white, labels: gray

### 5. Why RentCore
- Dark bg (#1A1A1A) instead of white
- Cards: dark card bg (#1F1F1F) with subtle border
- Stats: rust/teal colors
- Icons: teal bg

### 6. Services
- Already dark — update orange icons to rust
- Update heading quoted text opacity

### 7. Pricing
- Dark bg, dark card
- Calculator input: dark input fields
- Blue banner → teal banner
- Fee numbers: white

### 8. How It Works
- Dark bg
- Timeline line: teal → rust gradient
- Step badges: teal/rust/teal
- Cards: dark bg

### 9. About
- Dark bg
- Dale photo: keep, adjust overlay
- Quote card: rust accent border

### 10. Areas Served
- Already dark — update city pills to teal border
- Keep photo bg

### 11. Resources
- Dark bg, dark cards
- Category badges: teal/rust

### 12. CTA
- Already dark — update button to rust
- Add teal glow orb

### 13. Footer
- Already dark — update accent colors

---

## Execution Plan

### Step 1: Create /home-revised route in rentcore-board
- Copy home/page.tsx → home-revised/page.tsx
- This is the single-file approach (all sections in one file, ~382 lines)

### Step 2: Global color swap
- Replace all #F97316 → #A0522D (rust)
- Replace all #1D4ED8 → #4A8B9F (teal)
- Replace all #059669 → #4A8B9F (teal)
- Replace all #0F172A text → #FFFFFF
- Replace all white bgs → dark bgs
- Replace all light borders → dark borders

### Step 3: Dark-specific adjustments
- Hero: dark overlay stays, text goes white
- Cards: dark bg (#1F1F1F) with rgba borders
- Inputs: dark bg (#1A1A1A) with subtle borders
- Sections: alternate between #111111 and #1A1A1A

### Step 4: Logo update
- Rent(teal) + Core(rust)

### Step 5: Test at localhost:3001/home-revised

---

## Estimated Effort: ~30 min (it's mostly a color swap on a single file)
