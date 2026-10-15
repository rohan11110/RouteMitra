# ADR-0001: Use a pnpm Monorepo

- **Status:** Accepted for initial scaffold
- **Date:** 2026-10-15

## Context
RouteMitra needs a web client, API, and a small shared domain package. A single developer needs straightforward local development and consistent validation.

## Decision
Use pnpm workspaces for `apps/web`, `apps/api`, and `packages/shared`. Use Turborepo for task orchestration; this does not imply independently deployed microservices. Add packages only as real boundaries emerge.

## Consequences
**Benefits:** one lockfile, coordinated changes, shared contracts, simpler onboarding.  
**Costs:** workspace dependency boundaries and TypeScript settings need care; shared code must not import database/provider implementation.

## Revisit when
Team size, independent deployment, or dependency boundaries make a different structure demonstrably better.
