from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from src.routes import routes

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(routes.router)
@app.get('/')
async def root():
    try:
        return {"message": "Welcome to Medical Chatbot"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=e)


