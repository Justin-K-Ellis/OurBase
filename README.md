# OurBase

## About

OurBase is a minimal social networking platform for coordinating small groups (no more than 20), such as families and friend groups.

Users can other members' status and whereabouts, post updates, and create lists and events.

## Running

To run the development environments:

### Frontend

Install dependencies and run the dev server (from the project root):

```bash
cd client
pnpm install
pnpm run dev
```

### Backend

We recommend using `uv` to manage dependencies and environments. To install dependencies and run the dev server (from the root):

```bash
cd server
uv sync
uv run fastapi dev
```

## Routing

This app is a monolith, where the frontend, a static JS bundle, is served by the FastAPI backend process. The client app can be run independently for development, but in production the `/dist` frontend bundle will be served from the app HTTP root.
