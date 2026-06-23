---
name: "Integration tests"
about: "Add end-to-end integration tests against Stellar testnet"
title: "Add end-to-end integration tests against Stellar testnet"
labels: "testing, advanced"
---

Points: 200
Estimated time: 3 days

### Context

Unit tests with mocks verify logic in isolation. End-to-end integration tests verify that the hooks work against the real Stellar testnet. This issue sets up an integration test suite that runs a full payment flow -- create account, fund from faucet, send payment, verify balance -- using real testnet infrastructure.

### What needs doing

- Create `packages/core/src/__tests__/integration/` directory
- Create `packages/core/src/__tests__/integration/payment.test.ts`:
  - Generate two testnet keypairs
  - Fund both via the Stellar testnet friendbot (`https://friendbot.stellar.org?addr=...`)
  - Instantiate a Horizon server pointed at testnet
  - Submit a real payment of 10 XLM from account A to account B
  - Verify account B's balance increased by 10 XLM
- Create `packages/core/src/__tests__/integration/balance.test.ts`:
  - Fund an account via friendbot
  - Call the Horizon balance endpoint directly
  - Verify the returned balance matches expectation
- Add an `integration` script to `packages/core/package.json`:

```json
"test:integration": "jest --testPathPattern=integration"
```

- Add a manual-trigger GitHub Actions workflow `.github/workflows/integration.yml` that runs integration tests on demand (not on every push -- testnet calls are slow)
- Document how to run integration tests in `CONTRIBUTING.md`

### Acceptance criteria

- [ ] Integration tests run against real Stellar testnet
- [ ] Full payment flow test passes consistently
- [ ] Integration tests are separate from unit tests and not run on every push
- [ ] `pnpm --filter use-stellar test:integration` runs the suite
- [ ] CONTRIBUTING.md explains how to run integration tests
