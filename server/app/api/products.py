from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_products_dummy():
    return {"path": "/api/products"}

@router.post("/")
async def create_product_dummy():
    return {"path": "/api/products"}

@router.get("/{product_id}/options")
async def get_product_options_dummy(product_id: int):
    return {"path": f"/api/products/{product_id}/options"}

@router.patch("/{product_id}")
async def update_product_dummy(product_id: int):
    return {"path": f"/api/products/{product_id}"}

@router.delete("/{product_id}")
async def delete_product_dummy(product_id: int):
    return {"path": f"/api/products/{product_id}"}

@router.post("/{product_id}/image")
async def upload_product_image_dummy(product_id: int):
    return {"path": f"/api/products/{product_id}/image"}
