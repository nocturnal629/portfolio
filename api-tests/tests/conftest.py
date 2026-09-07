import os

import httpx
import pytest

NEXT_API_BASE_URL = os.environ.get("NEXT_API_BASE_URL", "http://localhost:3001")


@pytest.fixture(scope="session", autouse=True)
def _require_next_dev_server():
    try:
        httpx.get(NEXT_API_BASE_URL, timeout=3)
    except httpx.HTTPError:
        pytest.exit(
            f"Could not reach the Next.js dev server at {NEXT_API_BASE_URL}. "
            "Start it first with `yarn dev` in the repo root, then re-run pytest.",
            returncode=1,
        )
