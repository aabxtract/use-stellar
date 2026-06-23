---
name: "Albedo wallet"
about: "Add Albedo wallet support to useWallet"
title: "Add Albedo wallet support to useWallet"
labels: "typescript, wallet, intermediate"
---

Points: 150
Estimated time: 2 days

### Context

Albedo is a web-based Stellar wallet that works without a browser extension -- users authenticate via a popup. Adding Albedo support means developers using `use-stellar` can offer their users a second wallet option with no extension required, lowering the barrier to entry significantly.

### What needs doing

- Install the Albedo JS library: `npm install @albedo-link/intent`
- Open `packages/core/src/hooks/useWallet.ts`
- Add an `"albedo"` branch to the `connect()` function:
  - Call `albedo.publicKey({})` to get the user's public key
  - Store the result in wallet state as `{ address, connected: true, wallet: "albedo" }`
- Open `packages/core/src/hooks/useSendPayment.ts`
  - Add an Albedo signing branch: when the connected wallet is `"albedo"`, sign using `albedo.pay()` instead of Freighter
- Add `"albedo"` to the `WalletType` union in `packages/core/src/types/index.ts`
- Update the wallet demo page at `packages/demo/app/demo/wallet/page.tsx` to show an "Connect Albedo" button alongside the existing Freighter button
- Test the full flow: connect Albedo -> send a payment -> confirm it signed correctly

### Acceptance criteria

- [ ] `connect("albedo")` opens the Albedo popup
- [ ] Connected address is a valid G... address
- [ ] `useSendPayment` works with an Albedo-connected wallet
- [ ] Wallet demo shows both Freighter and Albedo connect options
- [ ] Type `WalletType = "freighter" | "albedo"` is updated

### Resources

- [Albedo JS docs](https://albedo.link/docs)
