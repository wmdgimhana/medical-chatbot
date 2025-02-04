from fastapi import APIRouter, HTTPException
from src.models.models import InputQuery
from src.bot.bot import get_response

router = APIRouter()


@router.post('/medi')
async def medibot(query: InputQuery):
    try:
        res = await get_response(query)
        return {"message" : "Successfully get", "data" : res}
    except Exception as e:
        raise HTTPException(status_code=500, detail=e)


