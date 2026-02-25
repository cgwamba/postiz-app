# Repository Guidelines

## Project Structure & Module Organization
- `apps/backend`: NestJS API server.
- `apps/orchestrator`: Temporal workflows/activities (NestJS).
- `apps/frontend`: Vite + React frontend.
- `apps/extension`, `apps/cli`, `apps/sdk`, `apps/commands`: auxiliary apps and tooling.
- `libraries/`: shared services, database, and frontend helpers used across apps.
- `var/`: operational scripts (for example `var/docker/`).

## Build, Test, and Development Commands
- `pnpm dev`: run extension, orchestrator, backend, and frontend in parallel.
- `pnpm dev-backend`: run backend + frontend in parallel.
- `pnpm dev:docker`: start the dev docker compose stack.
- `pnpm build`: build frontend, backend, and orchestrator (serial workspace build).
- `pnpm build:frontend|build:backend|build:orchestrator`: targeted builds.
- `pnpm test`: run Jest with coverage and JUnit output in `reports/junit.xml`.
- `pnpm prisma-generate`: generate Prisma client.
- `pnpm prisma-db-push`: push schema to the database (accepts data loss).

## Coding Style & Naming Conventions
- Use `pnpm` only (no npm/yarn).
- Follow existing TypeScript/React/NestJS patterns in each package; linting is run from the repo root.
- Backend layering is expected: `Controller -> Service -> Repository` (sometimes `Controller -> Manager -> Service -> Repository`).
- Frontend data fetching should use SWR with the shared `useFetch` hook in `libraries/helpers`.
- Tailwind v3 is used in the frontend; check `apps/frontend/src/app/colors.scss`, `apps/frontend/src/app/global.scss`, and `apps/frontend/tailwind.config.js` before introducing new styles.

## Testing Guidelines
- Tests run with Jest (Nx projects). Use `pnpm test` from the repo root.
- If you add tests, follow the local package conventions for placement and naming so Jest can discover them.

## Commit & Pull Request Guidelines
- Recent commits often use Conventional Commit-style prefixes (for example `feat:` or `fix:`), but some are plain. Prefer `type:` prefixes when possible.
- Use a feature branch (for example `feature/my-change`) and open PRs against `main`.
- Changes larger than a couple of lines should be discussed in a GitHub issue or Discord before opening a PR.
- PRs should include a clear description, testing notes, and screenshots for UI changes.

## Security & Docs
- Review `SECURITY.md` for reporting guidance.
- The developer guide and quickstart live at `https://docs.postiz.com` (recommended before major changes).
