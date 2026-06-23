---
name: "useClaimableBalance"
about: "Add useClaimableBalance hook and demo page"
title: "Add useClaimableBalance hook and demo page"
labels: "typescript, intermediate"
---

Points: 150
Estimated time: 2 days

### Context

Claimable balances are a Stellar primitive used in airdrops, vesting schedules, and payment escrows. Developers building these features need a hook that fetches claimable balances for an account and allows claiming them.

### What needs doing

- Create `packages/core/src/hooks/useClaimableBalance.ts`
- Implement the hook to call `server.claimableBalances().claimant(address).call()`
- Return:

```ts
interface ClaimableBalance {
  id:        string
  asset:     string
  amount:    string
  claimants: { destination: string; predicate: object }[]
  sponsor?:  string
}

// Hook return:
{
  balances: ClaimableBalance[]
  loading:  boolean
  error:    StellarError | null
  refetch:  () => void
}
```

- Export the hook from `packages/core/src/index.ts`
- Export the `ClaimableBalance` type
- Create demo page at `packages/demo/app/demo/claimable/page.tsx` showing the list of claimable balances for the connected wallet
- Add the hook to the home page grid at `packages/demo/app/page.tsx`

### Acceptance criteria

- [ ] Hook returns claimable balances for a connected wallet
- [ ] Empty array returned (not error) when no claimable balances exist
- [ ] Demo page works at `/demo/claimable`
- [ ] Hook is exported from the package index
