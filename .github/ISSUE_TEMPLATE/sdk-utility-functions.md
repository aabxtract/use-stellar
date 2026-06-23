---
name: "Display utils"
about: "Add shortenAddress and formatAmount utility functions"
title: "Add shortenAddress and formatAmount utility functions"
labels: "typescript, good first issue"
---

Points: 100
Estimated time: 4 hours

### Context

Two utility functions are referenced throughout the codebase and documentation but are not yet fully implemented or exported: `shortenAddress` and `formatAmount`. These are small but high-value additions because every developer using the library will need them.

### What needs doing

- Open `packages/core/src/utils/index.ts`
- Implement `shortenAddress`:

```ts
/**
 * Shortens a Stellar address for display.
 * "GAAZI4TCR3...CCWN" with length 6 -> "GAAZI4...CCWN"
 */
function shortenAddress(address: string, chars = 6): string
```

- Implement `formatAmount`:

```ts
/**
 * Formats a Stellar amount string for display.
 * "100.0000000" -> "100"
 * "0.1234567"   -> "0.1234567"
 * "50.5000000"  -> "50.5"
 */
function formatAmount(amount: string, decimals = 7): string
```

- Export both from `packages/core/src/index.ts`
- Write tests for both in `packages/core/src/utils/index.test.ts`
- Update all demo pages to use `shortenAddress` wherever a full Stellar address is displayed

### Acceptance criteria

- [ ] `shortenAddress("GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN", 6)` returns `"GAAZI4...CCWN"`
- [ ] `formatAmount("100.0000000")` returns `"100"`
- [ ] `formatAmount("0.1234567")` returns `"0.1234567"`
- [ ] Both functions are exported from the package
- [ ] Tests pass
