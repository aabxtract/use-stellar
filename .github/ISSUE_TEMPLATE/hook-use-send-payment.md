---
name: "useSendPayment"
about: "Implement useSendPayment hook and demo page"
title: "Implement useSendPayment hook and demo page"
labels: "typescript, intermediate"
---

Points: 150
Estimated time: 2 days

### Context

`useSendPayment` is the most critical hook in the library. It must build a Stellar payment transaction, get it signed by the connected wallet (Freighter), and submit it to the network. The current implementation has the structure in place but the signing and submission logic is incomplete.

### What needs doing

- Open `packages/core/src/hooks/useSendPayment.ts`
- Implement the full send flow:
  1. Load the sender's account from Horizon to get the sequence number
  2. Build a `TransactionBuilder` with `BASE_FEE` and the correct network passphrase from `networkConfig`
  3. Add a `Payment` operation using `Operation.payment()`
  4. If a memo is provided, add it with `Memo.text()`
  5. Call `setTimeout(30)` and build the transaction
  6. Sign using Freighter: `window.freighter.signTransaction(tx.toXDR(), { networkPassphrase })`
  7. Submit using `server.submitTransaction(signedTx)`
  8. Return `{ hash, status }` on success
- Handle the case where Freighter is not installed -- return a clear error message
- Handle the case where the user rejects the transaction in Freighter -- do not throw, return `error` string
- Build the demo page at `packages/demo/app/demo/send/page.tsx`:
  - Address input for destination
  - Asset selector (XLM / USDC)
  - Amount input
  - Optional memo input
  - Send button -- opens Freighter for signing
  - After send: show tx hash, status badge, link to Stellar Expert

### Acceptance criteria

- [ ] A real XLM payment completes on testnet end to end
- [ ] Freighter popup appears when send is clicked
- [ ] User rejection is handled gracefully -- error message shown, no crash
- [ ] Freighter not installed shows a clear install prompt
- [ ] Amount must be passed as a string -- never a number
- [ ] Demo page works at `/demo/send`

### Resources

- [Stellar transaction builder](https://stellar.github.io/js-stellar-sdk/classes/TransactionBuilder.html)
- [Freighter API](https://docs.freighter.app/docs/guide/usingFreighterJs)
