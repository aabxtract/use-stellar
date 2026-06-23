---
name: "Release workflow"
about: "Add CHANGELOG.md and release workflow"
title: "Add CHANGELOG.md and release workflow"
labels: "tooling, documentation, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

As `use-stellar` grows, developers using the library need to know what changed between versions so they can upgrade safely. A `CHANGELOG.md` following the Keep a Changelog convention, combined with a GitHub Actions release workflow, makes this automatic.

### What needs doing

- Create `CHANGELOG.md` at the monorepo root following the Keep a Changelog format:

```md
# Changelog

All notable changes to use-stellar will be documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- useWallet hook with Freighter support
- useBalance hook with watch option
- useAccount hook
- useSendPayment hook
- useTransaction hook
- useNetwork hook
- useAsset hook
- useSorobanContract hook (read-only)
- StellarProvider context
```

- Create `.github/workflows/release.yml`:
  - Triggered on push of a tag matching `v*.*.*`
  - Runs tests
  - Runs build
  - Publishes `packages/core` to npm using `NODE_AUTH_TOKEN` secret
  - Creates a GitHub Release with the changelog section for that version

### Acceptance criteria

- [ ] `CHANGELOG.md` exists and follows Keep a Changelog format
- [ ] Release workflow file exists and is syntactically valid
- [ ] Workflow is documented in `CONTRIBUTING.md`
- [ ] Unreleased section is populated with current features
