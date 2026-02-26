from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def create_order_dummy():
    return {"path": "/api/orders"}

@router.get("/active")
async def get_active_orders_dummy():
    return {"path": "/api/orders/active"}

@router.get("/today")
async def get_today_orders_dummy():
    return {"path": "/api/orders/today"}

@router.get("/history")
async def get_history_orders_dummy():
    return {"path": "/api/orders/history"}

@router.get("/summary")
async def get_orders_summary_dummy():
    return {"path": "/api/orders/summary"}

@router.get("/history/{order_id}")
async def get_history_order_detail_dummy(order_id: int):
    return {"path": f"/api/orders/history/{order_id}"}

@router.get("/{order_id}")
async def get_order_dummy(order_id: int):
    return {"path": f"/api/orders/{order_id}"}

@router.patch("/{order_id}/status")
async def update_order_status_dummy(order_id: int):
    return {"path": f"/api/orders/{order_id}/status"}

@router.patch("/{order_id}/payment")
async def update_order_payment_dummy(order_id: int):
    return {"path": f"/api/orders/{order_id}/payment"}
