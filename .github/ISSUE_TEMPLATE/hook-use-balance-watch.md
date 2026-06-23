---
name: "useBalance polling"
about: "Add useBalance polling and watch option"
title: "Add useBalance polling and watch option"
labels: "typescript, good first issue"
---

Points: 100
Estimated time: 1 day

### Context

Applications like portfolio dashboards and payment UIs need live balance updates without the user manually refreshing the page. The `watch` option on `useBalance` should automatically re-fetch the balance on a configurable interval.

### What needs doing

- Open `packages/core/src/hooks/useBalance.ts`
- Add a `watch?: boolean` option (default `false`) and an `interval?: number` option (default `10000` -- 10 seconds)
- When `watch: true`, use `setInterval` inside a `useEffect` to call `refetch` every `interval` milliseconds
- Clean up the interval in the `useEffect` return function to prevent memory leaks
- Update the balance demo page at `packages/demo/app/demo/balance/page.tsx`:
  - Add a "Watch live" toggle switch
  - When enabled, show a pulsing indicator and refresh the balance automatically
  - Display the last updated timestamp

### Acceptance criteria

- [ ] `useBalance({ watch: true })` re-fetches every 10 seconds
- [ ] `useBalance({ watch: true, interval: 5000 })` re-fetches every 5 seconds
- [ ] Interval is cleared when the component unmounts -- verified by checking no errors in console after navigating away
- [ ] Demo shows live updates
- [ ] `watch: false` (default) makes no interval -- one fetch only
