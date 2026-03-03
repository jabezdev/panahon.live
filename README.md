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
docker run --rm -p 8081:80 --name panahon-live panahon-live:latest
```

Open http://localhost:8081

## Docker Compose (recommended)

```bash
docker compose up -d --build
```

By default, Compose uses host port `8081`. To choose another port:

```bash
HOST_PORT=8090 docker compose up -d --build
```

Stop it with:

```bash
docker compose down
```
