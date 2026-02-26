from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_modifiers_dummy():
    return {"path": "/api/modifiers"}

@router.post("/")
async def create_modifier_dummy():
    return {"path": "/api/modifiers"}

@router.patch("/{group_id}")
async def update_modifier_dummy(group_id: int):
    return {"path": f"/api/modifiers/{group_id}"}

@router.delete("/{group_id}")
async def delete_modifier_dummy(group_id: int):
    return {"path": f"/api/modifiers/{group_id}"}
