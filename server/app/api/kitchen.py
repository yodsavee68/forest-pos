from fastapi import APIRouter

router = APIRouter()

@router.get("/orders")
async def get_kitchen_orders_dummy():
    return {"path": "/api/kitchen/orders"}

@router.patch("/orders/{item_id}/status")
async def update_kitchen_order_status_dummy(item_id: int):
    return {"path": f"/api/kitchen/orders/{item_id}/status"}
