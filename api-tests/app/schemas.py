from typing import Optional

from pydantic import BaseModel, Field

MAX_NAME_LENGTH = 60
MAX_TITLE_LENGTH = 120
MAX_DESCRIPTION_LENGTH = 2000


class IdeaSubmissionRequest(BaseModel):
    """Mirrors the JSON body accepted by the real `POST /api/ideas` route
    in `src/app/api/ideas/route.ts`.

    Deliberately unbounded here (no `max_length`/`min_length`): this model
    exists to document the contract and pass requests through untouched.
    Enforcing the same limits here would make FastAPI itself reject
    out-of-bounds requests with a 422 before they ever reach the real
    route, which would test this proxy instead of the actual
    implementation.
    """

    name: Optional[str] = Field(
        default="",
        description=(
            f"Submitter's name. Blank is allowed - the server stores "
            f"'Anonymous' when empty. The real route rejects names over "
            f"{MAX_NAME_LENGTH} characters with a 400."
        ),
        examples=["Ada Lovelace"],
    )
    title: str = Field(
        ...,
        description=(
            f"Short idea title. Required, non-empty after trimming. The "
            f"real route rejects titles over {MAX_TITLE_LENGTH} characters "
            f"with a 400."
        ),
        examples=["A recipe app that plans your week"],
    )
    description: str = Field(
        ...,
        description=(
            f"Full idea description. Required, non-empty after trimming. "
            f"The real route rejects descriptions over "
            f"{MAX_DESCRIPTION_LENGTH} characters with a 400."
        ),
        examples=["Give it a few ingredients and it builds a 7-day meal plan."],
    )
    company: Optional[str] = Field(
        default="",
        description=(
            "Honeypot field. Real visitors never see or fill this input. "
            "If it's non-empty, the server pretends the submission succeeded "
            "but never writes it to the database."
        ),
    )


class IdeaSubmissionResponse(BaseModel):
    success: Optional[bool] = None
    error: Optional[str] = None
