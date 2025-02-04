from pydantic import BaseModel


class InputQuery(BaseModel):
    question: str