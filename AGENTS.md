# AGENTS.md — RouteMitra Repository Instructions

These rules apply to all coding agents and contributors.

## Start here
Before substantial work, read `PRD.md`, `Architecture.md`, and `Architecture-essentials.md`. If a task conflicts with an invariant, state the conflict and offer a safe alternative.

## Workflow
- Inspect existing files, scripts, tests, and local conventions before editing.
- For non-trivial tasks, outline a short plan and implement one coherent slice at a time.
- Prefer focused patches over wholesale file rewrites.
- Preserve unrelated user work. Never use destructive Git commands to discard changes.
- Don't commit, push, or create a remote unless asked.
- Never claim checks passed unless you ran them and inspected their output.
- Report blockers such as unavailable tools, services, or credentials honestly.

## Code quality
- Use TypeScript strict mode. Avoid `any`; use `unknown` plus runtime validation for untrusted data.
- Separate route handlers, domain services, persistence, and UI components.
- Keep business rules out of presentation components.
- Validate every write endpoint at runtime.
- Use clear names and small functions; avoid speculative generic frameworks.
- Add accessible labels, focus states, keyboard support, and useful async states.
- Keep maps, routing, auth, and notifications behind adapters.

## Frontend
- Next.js App Router; prefer Server Components and add `"use client"` only for interactions/browser APIs/client-only libraries.
- Put shareable search criteria in URL parameters.
- TanStack Query owns remote server state if configured. Do not mirror it into Zustand.
- Use React Hook Form and schema validation for complex forms if available.
- Keep core search usable without maps.
- Do not invent real availability, ratings, route calculations, verifications, or payments.
- Every async flow should handle loading, empty, error, retry, and success states where relevant.

## Backend and data
- Fastify handlers validate and delegate to domain services.
- Persistence code must not format HTTP responses.
- Keep APIs under `/api/v1` unless an existing documented contract says otherwise.
- Enforce ride ownership and booking authorization on the server.
- Use database transactions/constraints for seat inventory and booking invariants.
- Store money as integer minor units with explicit currency; timestamps in UTC.
- Use stable error codes, request IDs, and safe client messages.
- Notification failure must not silently undo a committed booking; use an outbox/durable queue before claiming production reliability.

## Security
- Never commit secrets or real personal data.
- Don't return private contact/location fields from public ride endpoints.
- Don't store card details or identity documents in the MVP.
- Redact secrets and sensitive values from logs.
- Don't claim a verification badge without a real provider/workflow.

## Tests and validation
For a change:
1. Add or update focused tests.
2. Run targeted tests.
3. Run typecheck and lint for affected packages.
4. Run integration/E2E tests when changing API, booking, or persistence behaviour.
5. Run production build for major UI/config changes when possible.
6. If a command cannot run, report why.

Inspect root `package.json` and the lockfile before choosing package-manager commands. Use the package manager declared by the repository.

## Architecture/dependency changes
- Explain meaningful new dependencies.
- Add an ADR under `docs/decisions/` for significant, long-lived decisions.
- Avoid microservices, queues, or Redis until a concrete need justifies them.
- Keep shared packages free of database/provider implementation details.

## Definition of done
Acceptance criteria met; invariants preserved; relevant tests run or limitations documented; typecheck/lint/build outcomes reported accurately; docs match actual behaviour; no fake claims of completion.
