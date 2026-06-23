---
name: "Bundle size"
about: "Add CI bundle size check with size-limit"
title: "Add CI bundle size check with size-limit"
labels: "tooling, intermediate"
---

Points: 150
Estimated time: 1 day

### Context

As the library grows, it's important that the bundle size stays small. A developer who installs `use-stellar` should not see their app bundle grow by an unreasonable amount. This issue adds automated bundle size tracking to CI so every pull request shows the size impact of changes.

### What needs doing

- Install `size-limit` and `@size-limit/preset-small-lib` as dev dependencies in `packages/core`
- Add a `.size-limit.json` config at the root of `packages/core`:

```json
[
  {
    "path": "dist/index.js",
    "limit": "50 kB"
  }
]
```

- Add a `size` script to `packages/core/package.json`:

```json
"size": "size-limit"
```

- Add a step to `.github/workflows/ci.yml` that runs after the build step:

```yaml
- name: Check bundle size
  run: pnpm --filter use-stellar size
```

- Run the check locally and document the current bundle size in a comment on this issue before closing it

### Acceptance criteria

- [ ] `pnpm --filter use-stellar size` runs without error
- [ ] CI fails if bundle size exceeds 50 kB
- [ ] Current bundle size is documented
- [ ] No changes to the public API
