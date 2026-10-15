# RouteMitra Scaffold Map

## Included now
- `apps/web`: Next.js landing/search preview with fictional, labelled sample rides.
- `apps/api`: Fastify `/health` endpoint and `/api/v1` scaffold info.
- `packages/shared`: initial ride and booking status types.
- `infrastructure/docker-compose.yml`: local PostgreSQL container.
- Product, architecture, agent, and ADR documentation.

## Not implemented yet
Authentication, database schema/migrations, live ride search/publishing, booking and cancellation transactions, concurrency-safe seat inventory, map/routing integration, notifications, reviews, reports/moderation, payment integration, full tests/CI, and production deployment.

## Recommended next vertical slice
1. Add Drizzle and PostgreSQL schema/migrations.
2. Implement ride read/search endpoints and safe deterministic seed data.
3. Connect the search UI with URL-owned filters and loading/empty/error/retry states.
4. Implement driver ride publishing.
5. Add authentication and object-level authorization.
6. Implement booking state transitions with transactions and concurrency tests.
