---
name: "JSDoc"
about: "Add JSDoc comments to all exported hooks and types"
title: "Add JSDoc comments to all exported hooks and types"
labels: "documentation, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

When a developer installs `use-stellar` and starts typing in their editor, they should see inline documentation appear without having to open the README. JSDoc comments on every exported function and type make this happen in VS Code, WebStorm, and any other IDE that supports TypeScript.

### What needs doing

- Add JSDoc comments to every exported hook in `packages/core/src/hooks/`
- Each hook comment must include:
  - A one-sentence description of what the hook does
  - An `@example` block showing the most common usage
  - `@param` tags for any parameters
  - `@returns` tag describing the return value
- Add JSDoc comments to every interface and type in `packages/core/src/types/index.ts`
- Add JSDoc comments to utility functions in `packages/core/src/utils/index.ts`

Example format:

```ts
/**
 * Fetches the XLM or asset balance for the connected wallet or any Stellar address.
 *
 * @param options - Configuration options
 * @param options.address - The Stellar address to fetch balances for. Defaults to the connected wallet.
 * @param options.asset - The asset to return in `balance`. Defaults to XLM.
 * @param options.watch - When true, re-fetches every 10 seconds.
 * @returns `{ balance, balances, loading, error, refetch }`
 *
 * @example
 * const { balance, loading } = useBalance({ asset: "XLM", watch: true })
 */
export function useBalance(options?: UseBalanceOptions) {
```

### Acceptance criteria

- [ ] Every exported hook has a JSDoc comment with description, example, and param/returns tags
- [ ] Every exported type and interface has a JSDoc comment
- [ ] Hovering over `useWallet` in VS Code shows the documentation inline
- [ ] No TypeScript errors introduced
