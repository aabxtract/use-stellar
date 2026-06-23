---
name: "useTransaction"
about: "Implement useTransaction hook and demo page"
title: "Implement useTransaction hook and demo page"
labels: "typescript, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

Developers need to be able to look up a transaction by its hash after submitting it -- to check if it was confirmed, get the ledger it landed in, and see the fee that was charged. `useTransaction` fills this need.

### What needs doing

- Open `packages/core/src/hooks/useTransaction.ts`
- Implement the hook to call `server.transactions().transaction(hash).call()`
- Return:

```ts
interface TransactionResult {
  hash:       string
  status:     "success" | "failed" | "not_found"
  ledger?:    number
  createdAt?: string
  fee?:       string
  envelope?:  string
}
```

- If the hash is `null` or `undefined`, do nothing and return `{ data: null, loading: false, error: null }`
- If Horizon returns a 404, set status to `"not_found"` rather than throwing
- Build the demo page at `packages/demo/app/demo/transaction/page.tsx`:
  - Hash input field
  - Fetch button (or auto-fetch on input change with debounce)
  - Display status badge (green = success, red = failed, yellow = not found)
  - Display ledger, timestamp, fee
  - Add a note: "Paste a hash from the Send demo to see it here"

### Acceptance criteria

- [ ] A real testnet tx hash returns correct data
- [ ] A fake hash returns `status: "not_found"` without crashing
- [ ] Passing `null` as hash does nothing
- [ ] Demo page works at `/demo/transaction`
