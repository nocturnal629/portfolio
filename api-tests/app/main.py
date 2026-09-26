"""FastAPI documentation + test harness for the portfolio's idea-submission API.

This does NOT reimplement the API — it's a thin proxy in front of the real
Next.js route (`src/app/api/ideas/route.ts`). Pydantic models document the
exact contract that route expects/returns, and every request forwarded
through here hits the real implementation, so the interactive docs at
/docs double as a live test client.

Run the Next.js dev server first (`yarn dev` in the repo root, port 3001),
then start this app and open http://localhost:8000/docs.
"""

import os
from typing import Any, Dict

import httpx
from fastapi import FastAPI, Response
from fastapi.responses import RedirectResponse

from app.schemas import IdeaSubmissionRequest, IdeaSubmissionResponse

NEXT_API_BASE_URL = os.environ.get("NEXT_API_BASE_URL", "http://localhost:3001")

app = FastAPI(
    title="Aldrian A Portfolio — Idea Submission API (test harness)",
    description=(
        "Interactive documentation and live test client for the portfolio's "
        "idea-submission API. Every call made from this Swagger UI is "
        f"forwarded to the real Next.js server at `{NEXT_API_BASE_URL}` — "
        "there's no mock or fake data here, just a documented front door to "
        "the real implementation."
    ),
    version="1.0.0",
)


@app.get("/", include_in_schema=False)
def root() -> RedirectResponse:
    return RedirectResponse(url="/docs")


@app.post(
    "/api/ideas",
    response_model=IdeaSubmissionResponse,
    summary="Submit an idea",
    tags=["ideas"],
    responses={
        200: {"description": "Saved (or silently dropped if the honeypot field was filled)."},
        400: {"description": "Validation failed — missing/too-long title, description, or name."},
        500: {"description": "Server-side failure, e.g. BLOB_READ_WRITE_TOKEN isn't configured yet."},
    },
    description=(
        "Proxies to `POST {base_url}/api/ideas`. Matches the validation rules "
        "in `src/app/api/ideas/route.ts`: title and description are required "
        "(after trimming) and capped at 120 / 2000 characters; name defaults "
        "to 'Anonymous' and is capped at 60 characters; and the `company` "
        "field is a honeypot — filling it makes the server return "
        "`{\"success\": true}` without writing anything to the database."
    ),
)
async def submit_idea(payload: IdeaSubmissionRequest, response: Response) -> Dict[str, Any]:
    async with httpx.AsyncClient(base_url=NEXT_API_BASE_URL, timeout=15) as client:
        upstream = await client.post("/api/ideas", json=payload.model_dump())

    response.status_code = upstream.status_code
    try:
        return upstream.json()
    except ValueError:
        return {"error": upstream.text or "Upstream returned a non-JSON response."}
