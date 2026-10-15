# CLAUDE.md — RouteMitra

Claude Code must treat [`AGENTS.md`](./AGENTS.md) as the canonical repository-wide instruction file. Read it before editing.

Also read:
- [`PRD.md`](./PRD.md) for scope and acceptance criteria.
- [`Architecture.md`](./Architecture.md) for system design and contracts.
- [`Architecture-essentials.md`](./Architecture-essentials.md) for non-negotiable rules.

## Claude Code workflow
1. Inspect the workspace, scripts, affected source, and tests before proposing edits.
2. For non-trivial tasks, state a concise plan and implement one slice at a time.
3. Prefer targeted patches over replacing complete files.
4. Ask before destructive changes, broad rewrites, data-dropping migrations, or unrelated public API changes.
5. For booking, cancellation, seat inventory, money, or authorization changes, review the business invariants and add regression tests.
6. Run relevant checks and report exact results, including checks that could not run.
7. Keep secrets out of source, logs, fixtures, and output.
8. Update relevant docs or ADRs when architecture or product behaviour changes.

Do not duplicate `AGENTS.md` here. It remains the source of truth to prevent rule drift.
