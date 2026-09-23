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
