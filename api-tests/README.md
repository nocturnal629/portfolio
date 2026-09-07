# Idea Submission API — Docs & Tests

A FastAPI harness for the `/api/ideas` route that backs the portfolio's
"Submit an Idea" feature (`src/app/api/ideas/route.ts`).

This app doesn't reimplement the API. It's a thin, documented proxy: every
request you send through it is forwarded to the real Next.js server, so the
interactive Swagger docs double as a live test client, and `pytest` runs as
an integration test against the real implementation.

## Setup

```bash
cd api-tests
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate # macOS/Linux
pip install -r requirements.txt
```

## 1. Start the real API first

From the repo root, in a separate terminal:

```bash
yarn dev
```

This serves the actual implementation at `http://localhost:3001`.

## 2. Run the docs / interactive test client

```bash
cd api-tests
uvicorn app.main:app --reload --port 8000
```

Open **http://localhost:8000/docs** for interactive Swagger UI. Every "Try
it out" call hits the real `/api/ideas` route on your Next.js dev server —
there's nothing mocked.

If your Next.js server runs somewhere other than `http://localhost:3001`,
point this app at it:

```bash
NEXT_API_BASE_URL=https://your-preview-url.vercel.app uvicorn app.main:app --reload --port 8000
```

## 3. Run the automated tests

With the Next.js dev server still running:

```bash
cd api-tests
pytest -v
```

These tests cover the validation contract implemented in
`src/app/api/ideas/route.ts`: required/max-length checks on title,
description, and name; and the honeypot (`company`) field silently
dropping spam.

**Note:** until `BLOB_READ_WRITE_TOKEN` is available to the Next.js server
locally, valid submissions will 500 at the save step. The tests account
for this (`test_valid_submission_passes_validation` accepts either `200`
or a `500` whose error message confirms it failed at the save step, not
at validation) — see the repo root `.env.local.example`. Note that Blob
store env vars are scoped per-environment in the Vercel dashboard, so
"Development" needs to be checked on the store's connection before
`vercel env pull` can fetch it for local use.
