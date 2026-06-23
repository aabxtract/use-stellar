---
name: "Utility tests"
about: "Write unit tests for all utility functions"
title: "Write unit tests for all utility functions"
labels: "typescript, testing, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

The utility functions in `packages/core/src/utils/index.ts` are the foundation of the library -- address validation, amount formatting, network config resolution -- and they have minimal test coverage. This issue covers writing comprehensive tests for every utility function.

### What needs doing

- Open `packages/core/src/utils/index.test.ts`
- Write tests covering:
  - `isValidStellarAddress` -- valid G address, secret key (S...), short address, empty string, lowercase
  - `isValidContractId` -- valid C address, G address, empty string
  - `formatAmount` -- whole numbers, decimals, zero, NaN input
  - `shortenAddress` -- default length, custom length, address shorter than requested
  - `parseDuration` (if present) -- days, hours, minutes, invalid format
  - `NETWORK_CONFIGS` -- testnet and mainnet objects have correct URLs
- Each test should have a description that explains what it is testing and why
- Run tests with `pnpm test` from the monorepo root and confirm all pass

### Acceptance criteria

- [ ] All utility functions have at least 3 test cases each
- [ ] Edge cases are covered (empty string, null-like inputs, boundary values)
- [ ] `pnpm test` passes with zero failures
- [ ] No use of `any` in test files
