---
name: "Home grid"
about: "Update home page grid to include all hooks"
title: "Update home page grid to include all hooks"
labels: "react, good first issue"
---

Points: 100
Estimated time: 4 hours

### Context

The demo home page at `packages/demo/app/page.tsx` shows a grid of hook cards that link to each demo page. As new hooks and demo pages are added, the home page grid needs to stay in sync. This issue updates the grid to include all eight hooks and ensures every card links to a working demo page.

### What needs doing

- Open `packages/demo/app/page.tsx`
- Update the hooks array to include all eight hooks:

```ts
const hooks = [
  { hook: "useWallet",          path: "/demo/wallet",      desc: "Connect and disconnect a Stellar wallet" },
  { hook: "useBalance",         path: "/demo/balance",     desc: "Fetch XLM or any asset balance" },
  { hook: "useAccount",         path: "/demo/account",     desc: "Full account info -- balances, signers, sequence" },
  { hook: "useSendPayment",     path: "/demo/send",        desc: "Build, sign, and submit a payment" },
  { hook: "useTransaction",     path: "/demo/transaction", desc: "Look up a transaction by hash" },
  { hook: "useNetwork",         path: "/demo/network",     desc: "Current network and config" },
  { hook: "useAsset",           path: "/demo/asset",       desc: "Asset metadata -- supply, home domain" },
  { hook: "useSorobanContract", path: "/demo/soroban",     desc: "Call a Soroban smart contract" },
]
```

- Render each hook as a card with the hook name in sky blue (`#7dd3fc`), description in muted text, and a chevron arrow
- Each card must be a `<Link>` that navigates to the demo page
- Cards for pages that don't exist yet should be visually marked as "coming soon" and not navigable

### Acceptance criteria

- [ ] Home page shows all eight hook cards
- [ ] Each card links to the correct demo page
- [ ] Pages that don't exist yet are marked "coming soon"
- [ ] Grid is responsive -- two columns on desktop, one column on mobile
