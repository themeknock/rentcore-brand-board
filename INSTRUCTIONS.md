# Project Instructions

## Shell Commands
Before running ANY shell command, always prepend:
export PATH="/opt/homebrew/bin:/Users/taha/.nvm/versions/node/v20.20.0/bin:$PATH"

## PortMan Integration
PortMan runs at localhost:4444. Get free port before starting dev server.
ALWAYS use PortMan assigned port. NEVER use default port 3000.

## Work Style
- Never stop mid-task. Continue building without waiting for confirmation.
- Complete ALL files in a single session.
- NEVER use Plan mode. Always stay in Code mode.
- Do ALL thinking, planning, and research INSIDE Code mode before writing code.
- Pattern: Think → Plan in your head → Write code. All in ONE mode.
- Do NOT switch modes. Do NOT exit to Plan mode. Do NOT auto-switch modes.

## Anti-Loop Rule (CRITICAL - Token Saving)
- If same error occurs 3 times, STOP and move on.
- NEVER retry the exact same fix more than 3 times.

## TOKEN SAVING RULES (CRITICAL - READ CAREFULLY)

### The Golden Rule
Before EVERY action, ask yourself: "Is this action DIRECTLY producing the output the user wants?"
- If YES → do it.
- If NO → skip it. You're wasting tokens.

Examples of DIRECT actions (DO these):
- Reading a file you will edit ✅
- Writing/editing code ✅
- Running npm install for needed packages ✅
- Running dev server ✅

Examples of INDIRECT actions (SKIP these):
- Reading node_modules to understand a library ❌
- Writing Python scripts to compare/verify ❌
- Running Playwright to take screenshots ❌
- Checking library versions ❌
- Grepping the whole codebase "to understand" ❌
- Running the same command with slight variations ❌
- Reading a file you just wrote ❌
- Reading a file in 3 parts instead of once ❌

### Verification
- Maximum TWO fix rounds after building.
- After 2 rounds, STOP and tell the user what remains.
- Let the user decide if more fixing is needed.
- NEVER write comparison scripts or launch browsers for verification.

### Efficiency
- Read files ONCE, not in parts.
- Batch all edits to one file together.
- Use Edit tool, not sed commands.
- You ALREADY KNOW how libraries work. Don't explore their source code.
- Error occurs? Read error → Apply known fix → Done. Max 3 shell commands per error.

## Website Cloning Rules
When building from a reference/screenshot:
- Match layout structure, grid ratios, spacing.
- Match typography sizes, weights, letter-spacing.
- Extract exact colors from reference.
- Use GSAP ScrollTrigger for scroll animations.
- Use real Unsplash images, not placeholders.
- Configure next.config.mjs for Unsplash domains.
- Premium whitespace: py-24 to py-32, p-8 to p-12.

## Animation Rules
- NEVER simplify parallax to fade-in.
- Scroll-triggered = ScrollTrigger with scrub, NOT onMount.
- Different elements must move at different speeds for parallax.
- Read animation descriptions carefully, implement exactly.

## AGENTS.md Auto-Update (CRITICAL)
At the END of every task, update or create AGENTS.md in the project root with:
- Project name and description (1 line)
- Tech stack (list)
- Key files you worked on today
- Current status (what's done, what's pending)
- Last task completed
Keep it SHORT - max 20 lines. This helps the next session start fast without exploring.

## Code Standards
- TypeScript + Tailwind CSS.
- Next.js 14 App Router.
- 'use client' for components with hooks/state.
- GSAP + Framer Motion for animations.
