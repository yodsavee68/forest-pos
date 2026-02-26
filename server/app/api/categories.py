from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_categories_dummy():
    return {"path": "/api/categories"}

@router.post("/")
async def create_category_dummy():
    return {"path": "/api/categories"}

@router.post("/sort")
async def sort_categories_dummy():
    return {"path": "/api/categories/sort"}

@router.patch("/{category_id}")
async def update_category_dummy(category_id: int):
    return {"path": f"/api/categories/{category_id}"}

@router.delete("/{category_id}")
async def delete_category_dummy(category_id: int):
    return {"path": f"/api/categories/{category_id}"}
