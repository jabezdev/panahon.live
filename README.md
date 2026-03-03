# panahon.live landing page

Prototype landing page for the panahon.live project: a low-cost, distributed automatic weather station network for broader and more localized weather coverage.

## Stack

- Bun
- Vite + React + TypeScript
- Tailwind CSS
- Docker (multi-stage build: Bun build + Nginx runtime)

## Local development

```bash
bun install
bun run dev
```

## Production build

```bash
bun run build
bun run preview
```

## Docker deployment

### Build image

```bash
docker build -t panahon-live:latest .
```

### Run container

```bash
docker run --rm -p 18081:80 --name panahon-live panahon-live:latest
```

Open http://localhost:18081

## Docker Compose (recommended)

```bash
docker compose up -d --build
```

### Dokploy / VPS note

The default [docker-compose.yml](docker-compose.yml) does **not** publish a host port to avoid VPS port conflicts.
It only exposes container port `80` internally, which is the right setup for Dokploy's proxy/domain routing.

### Local port mapping (optional)

If you want to access it directly from your machine with a host port:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build
```

Or choose a different local port:

```bash
PANAHON_PORT=8090 docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build
```

Stop it with:

```bash
docker compose down
```
