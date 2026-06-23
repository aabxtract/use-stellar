---
name: "Docs site"
about: "Build the landing page and documentation site"
title: "Build the landing page and documentation site"
labels: "ui/ux, documentation, advanced"
---

Points: 200
Estimated time: 4 days

### Context

use-stellar needs an official public website where developers can read the documentation, see code examples, and understand what the library does before installing it. This is the most impactful issue in the sprint -- a good documentation site is what separates a library people try from one they actually adopt.

### Stack

The documentation site should be built using Next.js 14 (App Router) with the following pages. No CSS framework -- use inline styles consistent with the existing demo app design language (dark background `#0f0f0f`, sky blue `#7dd3fc` accents, `system-ui` font).

### Pages to build

- `/` -- landing page (see Landing page section below)
- `/docs` -- documentation home, links to all sections
- `/docs/getting-started` -- installation, StellarProvider setup, first hook
- `/docs/hooks/use-wallet` -- full reference for useWallet
- `/docs/hooks/use-balance` -- full reference for useBalance
- `/docs/hooks/use-account` -- full reference for useAccount
- `/docs/hooks/use-send-payment` -- full reference for useSendPayment
- `/docs/hooks/use-transaction` -- full reference for useTransaction
- `/docs/hooks/use-network` -- full reference for useNetwork
- `/docs/hooks/use-asset` -- full reference for useAsset
- `/docs/hooks/use-soroban-contract` -- full reference for useSorobanContract
- `/docs/typescript` -- TypeScript usage, all types
- `/docs/networks` -- testnet vs mainnet, switching networks
- `/docs/wallets` -- supported wallets, Freighter setup guide
- `/docs/errors` -- error handling, StellarError type

### Landing page sections

The landing page `/` must include:

- Hero section: headline, one-line description, install command in a copyable code block, two CTA buttons (View Docs, View on GitHub)
- Code preview: a side-by-side showing raw Stellar SDK code vs use-stellar code -- demonstrating the reduction in boilerplate
- Hook grid: cards for each hook with name, one-line description, and a small code snippet
- Why section: three points -- typed, zero config, wallet-agnostic
- Community / contributing section: link to GitHub, contributing guide
- Footer: npm link, GitHub link, license

### Navigation

All docs pages must share a sidebar navigation component showing the full docs tree. The sidebar should highlight the current page. On mobile it should collapse into a hamburger menu.

### Code blocks

All code examples in the docs must use syntax-highlighted code blocks. Use `highlight.js` or `shiki` for syntax highlighting -- do not use plain `<pre>` tags.

### Acceptance criteria

- [ ] Landing page is live and renders correctly
- [ ] All docs pages are accessible via the sidebar
- [ ] Install command can be copied with one click
- [ ] Code blocks are syntax highlighted
- [ ] Site is mobile-responsive
- [ ] All hook reference pages match the actual API (no invented signatures)
- [ ] Site deploys to Vercel or GitHub Pages with zero config
