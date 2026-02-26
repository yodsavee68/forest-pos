from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_settings_dummy():
    return {"path": "/api/settings"}

@router.patch("/")
async def update_settings_dummy():
    return {"path": "/api/settings"}
