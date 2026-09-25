# AGENTS.md

## Project Structure

- `/client`: Vite + React + TS frontend.
- `/server`: FastAPI + Python backend (managed by `uv`).
- `/.github/workflows`: CI/CD specifications.

## Developer Commands

### Frontend (`/client`)

- **Install**: `pnpm install`
- **Dev**: `pnpm run dev`
- **Lint**: `pnpm run lint`
- **Build**: `pnpm run build`

### Backend (`/server`)

- **Install/Sync**: `uv sync`
- **Dev**: `uv run fastapi dev`
- **Test**: `uv run pytest` (based on `pytest` dependency)

## Verification Workflow

For full-stack changes:

1. `cd client && pnpm run lint`
2. `cd server && uv run pytest`
