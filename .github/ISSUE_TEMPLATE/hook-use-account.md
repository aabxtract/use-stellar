---
name: "useAccount"
about: "Implement useAccount hook and demo page"
title: "Implement useAccount hook and demo page"
labels: "typescript, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

The `useAccount` hook is declared and exported from `packages/core/src/hooks/useAccount.ts` but the implementation is incomplete. This hook is one of the most important in the library -- it gives developers access to full account information including balances, signers, sequence number, and thresholds without having to manually call the Horizon SDK.

### What needs doing

- Open `packages/core/src/hooks/useAccount.ts`
- Implement the hook so it calls `server.loadAccount(address)` using the Horizon server from `useStellarContext()`
- Return the following shape:

```ts
interface AccountInfo {
  address:       string
  sequence:      string
  balances:      Balance[]
  subentryCount: number
  thresholds: {
    lowThreshold:  number
    medThreshold:  number
    highThreshold: number
  }
  signers: {
    key:    string
    weight: number
    type:   string
  }[]
}
```

- The hook should accept an optional `address` parameter. If no address is passed, default to the connected wallet address from `useStellarContext()`
- Return `{ data, loading, error, refetch }`
- Open `packages/demo/app/demo/account/page.tsx` and build a demo page that:
  - Shows an address input field prefilled with the connected wallet address
  - Displays sequence number, subentry count, all balances, signers, and thresholds
  - Allows the user to type any G... address to inspect a different account

### Acceptance criteria

- [ ] `useAccount()` returns correct data for a funded testnet account
- [ ] `useAccount("G...")` works with a custom address
- [ ] Loading state is shown while fetching
- [ ] Error state is shown if account does not exist
- [ ] Demo page is accessible at `/demo/account`
- [ ] Demo page renders correctly in a browser with Freighter installed

### Resources

- [Horizon load account](https://stellar.github.io/js-stellar-sdk/classes/Server.html#loadAccount)
- Existing pattern to follow: `packages/core/src/hooks/useBalance.ts`
