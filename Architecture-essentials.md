# RouteMitra — Architecture Essentials

These invariants must not be broken. Read this before making changes.

## Product
1. RouteMitra is a planned intercity cost-sharing marketplace, not an on-demand taxi dispatcher.
2. Synthetic/demo rides, reviews, users, and analytics must be clearly labelled.
3. Maps enhance the journey experience but must not be the only way to search or inspect a trip.
4. Never pretend mock payment, identity verification, or live tracking is real.

## Authority and persistence
5. **The server is authoritative** for seat availability, booking state, ride ownership, contribution amount, and authorization.
6. Booking acceptance, seat inventory changes, and eligible cancellations must be atomic and concurrency-safe in PostgreSQL.
7. Choose exactly one canonical inventory model; never maintain two unsynchronised seat counts.
8. Validate all input server-side. Client validation is for UX, not security.
9. Use integer minor currency units (e.g. paise) and explicit currency code; never use floating point as the canonical money value.
10. Store timestamps in UTC and use an explicit timezone policy for display.
11. Never trust client-supplied user ID, role, ownership, status, or price.
12. A repeated accept/cancel request must not double-decrement or double-release seats.

## State and API
13. URL state owns shareable search criteria.
14. TanStack Query owns server-state caching; don't duplicate those entities in Zustand.
15. Use Zustand only for genuinely shared client interaction/draft state.
16. State-changing routes must verify actor permissions and valid state transitions.
17. API errors must use stable codes and a consistent response shape.
18. Use idempotency or strict state guards where retries may duplicate a write.

## Security and privacy
19. Never commit `.env`, credentials, access/session tokens, or real personal data.
20. Public ride responses must not expose private email/phone, exact private addresses, verification evidence, moderation reports, or internal metadata.
21. Do not store payment card data or identity documents in the MVP.
22. Logs must redact credentials, private contact data, and unnecessary location history.
23. “Verified” requires a real, auditable verification process; otherwise omit the badge.
24. Before a public launch, review transport/aggregator obligations, privacy, consumer rules, safety operations, and provider terms for the actual jurisdiction.

## Frontend quality
25. Async views have loading, empty, error/retry, and success states where applicable.
26. Forms support labels, keyboard navigation, visible focus, and readable validation.
27. Status is not indicated by colour alone.
28. Core journeys remain usable if map/routing services fail.
29. Keep components feature-oriented; don't build one giant page or one global store for everything.
30. Don't add dependencies for trivial helpers; explain meaningful additions.

## Engineering workflow
31. Read `PRD.md`, `Architecture.md`, and `AGENTS.md` before substantial changes.
32. Make focused, reviewable changes; inspect existing files before replacing them.
33. Run relevant tests, typecheck, lint, and build; report exactly what passed.
34. Add regression tests for bugs and business rules.
35. Never claim an integration, test, security control, or deployment is verified unless actually configured and tested.
36. Update architecture docs/ADRs when lasting decisions change.
