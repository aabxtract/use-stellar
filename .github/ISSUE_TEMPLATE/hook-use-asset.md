---
name: "useAsset"
about: "Implement useAsset hook and demo page"
title: "Implement useAsset hook and demo page"
labels: "typescript, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

Developers building asset dashboards, DEX interfaces, or portfolio trackers need metadata about Stellar assets -- total supply, number of holders, and the issuer's home domain. `useAsset` wraps the Horizon assets endpoint to provide this.

### What needs doing

- Open `packages/core/src/hooks/useAsset.ts`
- Implement the hook to call `server.assets().forCode(code).forIssuer(issuer).call()`
- Additionally fetch the issuer account to get `home_domain`
- Return:

```ts
interface AssetDetails {
  code:        string
  issuer:      string
  homeDomain:  string | null
  supply:      string
  numAccounts: number
}
```

- Build the demo page at `packages/demo/app/demo/asset/page.tsx`:
  - Prefill with USDC testnet values (code: "USDC", issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN")
  - Show code input, issuer input, fetch button
  - Display all returned fields clearly
  - Show a note explaining what home domain means

### Acceptance criteria

- [ ] USDC on testnet returns correct supply and account count
- [ ] An invalid issuer shows an error state
- [ ] Home domain is shown if set, "not set" if not
- [ ] Demo page works at `/demo/asset`
