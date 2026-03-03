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

By default, Compose uses host port `18081`. To choose another port:

```bash
PANAHON_PORT=8090 docker compose up -d --build
```

If you still get "port is already allocated" on a VPS, check what is already binding that port:

```bash
sudo ss -ltnp | grep ':18081\|:8080\|:8081'
docker ps --format 'table {{.Names}}\t{{.Ports}}'
```

Then either stop the conflicting service or pick a free port with `PANAHON_PORT`.

Stop it with:

```bash
docker compose down
```
