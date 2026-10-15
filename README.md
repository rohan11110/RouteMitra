# RouteMitra

RouteMitra is a planned-journey intercity carpooling marketplace concept. Drivers publish journeys and seat availability; passengers discover suitable trips and request seats.

## Included in this scaffold
- Product/architecture/agent documentation.
- Starter pnpm monorepo with a Next.js landing/search preview.
- Fastify API health endpoint.
- Shared starter domain types.
- Docker Compose for local PostgreSQL.

## Scope honesty
This is **not the complete booking product**. The current scaffold does not yet implement database persistence, authentication, live ride search, ride publishing, booking transactions, maps, notifications, reviews, moderation, payments, or production deployment. The web page uses fictional sample rides. Do not use this scaffold to arrange real journeys or take real payments.

## Requirements
- Node.js 22+ (use a supported LTS version)
- pnpm 10
- Docker, optional for local PostgreSQL

## Quick start
```bash
pnpm install
cp .env.example .env
pnpm dev
```
- Web: http://localhost:3000
- API health: http://localhost:4000/health

## Local PostgreSQL
```bash
docker compose -f infrastructure/docker-compose.yml up -d
```
The database is included for upcoming persistence work; the current API does not connect to it yet.

## Common commands
```bash
pnpm dev
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

Read `PRD.md`, `Architecture.md`, `Architecture-essentials.md`, and `AGENTS.md` before substantial implementation.
