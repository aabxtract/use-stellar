---
name: "Structured errors"
about: "Add structured error types"
title: "Add structured error types"
labels: "typescript, intermediate"
---

Points: 150
Estimated time: 2 days

### Context

Every hook currently returns `error: string | null`. This is functional but makes it hard for developers using the library to programmatically handle different error scenarios -- they would have to parse the error string, which is fragile. This issue replaces the plain string with a structured error type.

### What needs doing

- Add a `StellarError` type to `packages/core/src/types/index.ts`:

```ts
type StellarErrorCode =
  | "ACCOUNT_NOT_FOUND"
  | "INSUFFICIENT_BALANCE"
  | "NO_TRUSTLINE"
  | "TRANSACTION_REJECTED"
  | "WALLET_NOT_INSTALLED"
  | "WALLET_NOT_CONNECTED"
  | "NETWORK_ERROR"
  | "UNKNOWN"

interface StellarError {
  code:    StellarErrorCode
  message: string
  raw?:    unknown
}
```

- Update every hook to return `error: StellarError | null` instead of `error: string | null`
- Map common Horizon error responses to the correct `StellarErrorCode`
- Update the error handling section in the README
- Update all demo pages to display `error.message` (same as before) and `error.code` in a small badge next to it

### Acceptance criteria

- [ ] All hooks return `StellarError | null`
- [ ] Horizon `op_no_trust` error maps to `NO_TRUSTLINE`
- [ ] Horizon `op_underfunded` maps to `INSUFFICIENT_BALANCE`
- [ ] User rejecting Freighter maps to `TRANSACTION_REJECTED`
- [ ] Demo pages show error code badge alongside error message
- [ ] All existing tests updated to use new error shape
