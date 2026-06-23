---
name: "Liquidity pool balances"
about: "Add useBalance support for all asset types including liquidity pool shares"
title: "Add useBalance support for all asset types including liquidity pool shares"
labels: "typescript, intermediate"
---

Points: 150
Estimated time: 2 days

### Context

The current `useBalance` implementation handles native XLM and issued assets (like USDC). Stellar also has liquidity pool share balances -- returned when an account participates in an AMM liquidity pool. These are currently not handled and are silently dropped from the `balances` array.

### What needs doing

- Open `packages/core/src/hooks/useBalance.ts`
- Update the `Balance` type in `packages/core/src/types/index.ts` to include a third variant:

```ts
type Balance =
  | { asset: "XLM";                              balance: string }
  | { asset: { code: string; issuer: string };   balance: string; limit: string }
  | { asset: "liquidity_pool_shares";            balance: string; liquidityPoolId: string }
```

- Update the balance mapping logic in `useBalance` to handle `asset_type === "liquidity_pool_shares"` records from Horizon
- Update the balance demo page to display liquidity pool share balances in a separate section with the pool ID
- Update tests to cover the new balance type

### Acceptance criteria

- [ ] `balances` array includes liquidity pool share entries when present
- [ ] Liquidity pool share balances are displayed separately in the demo
- [ ] `Balance` type is updated and exported
- [ ] Tests cover all three balance types
