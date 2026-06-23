---
name: "useSorobanContract demo"
about: "Add useSorobanContract demo page"
title: "Add useSorobanContract demo page"
labels: "typescript, intermediate"
---

Points: 150
Estimated time: 1 day

### Context

The `useSorobanContract` hook lets developers call read-only functions on any deployed Soroban smart contract. The demo page should allow a user to paste any contract ID and method name and see the raw result -- making it a useful debugging tool as well as a demonstration.

### What needs doing

- Create `packages/demo/app/demo/soroban/page.tsx`
- The page must show:
  - A contract ID input (C... address)
  - A method name input
  - A call button
  - Raw JSON result displayed in a code block
- Add a notice at the top of the page: "Write calls (requiring Freighter signing) are in active development -- see the hook-use-balance-watch issue. This demo covers read-only simulation calls only."
- Prefill with a known read-only Soroban testnet contract if one is available from the Stellar examples repository
- Require a connected wallet -- show a connect prompt if not connected, since simulation requires an account to use as the source

### Acceptance criteria

- [ ] Page renders at `/demo/soroban`
- [ ] A valid contract ID and method returns a result
- [ ] An invalid contract ID shows a clear error
- [ ] Not-connected state shows a connect prompt
- [ ] Result is displayed as formatted JSON
