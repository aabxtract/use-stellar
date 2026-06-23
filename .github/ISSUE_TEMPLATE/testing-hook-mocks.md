---
name: "Hook tests"
about: "Write hook tests using mocked Stellar SDK"
title: "Write hook tests using mocked Stellar SDK"
labels: "typescript, testing, intermediate"
---

Points: 150
Estimated time: 2 days

### Context

The hooks themselves need tests, but they depend on `@stellar/stellar-sdk` which makes real network calls. This issue covers mocking the SDK and writing tests that verify each hook's behaviour in loading, error, and success states without making real network requests.

### What needs doing

- Set up Jest mocks for `@stellar/stellar-sdk` in `packages/core/src/__mocks__/`
- Write tests for:
  - `useBalance` -- loading state, success state with XLM balance, error when account not found
  - `useAccount` -- loading state, success state, error state
  - `useTransaction` -- null hash does nothing, valid hash returns result, 404 returns not_found
  - `useNetwork` -- returns correct config for testnet
- Use React Testing Library to render hooks: `renderHook(() => useBalance(), { wrapper: StellarProvider })`
- Mock the Horizon server methods that each hook calls

### Acceptance criteria

- [ ] Each hook has tests for loading, success, and error states
- [ ] No real network calls are made during tests
- [ ] `pnpm test` passes with zero failures
- [ ] Tests run in under 10 seconds

### Resources

- [React Testing Library renderHook](https://testing-library.com/docs/react-testing-library/api/#renderhook)
- [Jest manual mocks](https://jestjs.io/docs/manual-mocks)
