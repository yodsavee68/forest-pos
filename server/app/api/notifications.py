from fastapi import APIRouter

router = APIRouter()

@router.post("/send")
async def send_notification_dummy():
    return {"path": "/api/notifications/send"}
