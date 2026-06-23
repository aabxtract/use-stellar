---
name: "useNetwork demo"
about: "Add useNetwork demo page"
title: "Add useNetwork demo page"
labels: "react, good first issue"
---

Points: 100
Estimated time: 4 hours

### Context

`useNetwork` is the simplest hook in the library and its demo page is a good starting point for contributors new to the codebase. This issue builds the demo page that shows the current network, Horizon URL, and Soroban RPC URL.

### What needs doing

- Create `packages/demo/app/demo/network/page.tsx`
- Use `useNetwork()` to display:
  - Current network name with a colour-coded badge (orange for testnet, green for mainnet)
  - `horizonUrl` -- the Horizon REST API endpoint
  - `sorobanUrl` -- the Soroban RPC endpoint
  - `isTestnet` and `isMainnet` as boolean badges
- The page should also show a note explaining the difference between testnet and mainnet and when to use each
- Follow the `DemoCard` pattern used in existing demo pages

### Acceptance criteria

- [ ] Page renders at `/demo/network`
- [ ] Shows correct Horizon URL for testnet
- [ ] Network badge changes colour based on which network is active
- [ ] No wallet connection required to view this page
