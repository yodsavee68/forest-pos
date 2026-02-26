from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_tables_dummy():
    return {"path": "/api/tables"}

@router.post("/")
async def create_table_dummy():
    return {"path": "/api/tables"}

@router.post("/open")
async def open_table_dummy():
    return {"path": "/api/tables/open"}

@router.get("/active")
async def get_active_tables_dummy():
    return {"path": "/api/tables/active"}

@router.patch("/{table_id}")
async def update_table_dummy(table_id: int):
    return {"path": f"/api/tables/{table_id}"}

@router.delete("/{table_id}")
async def delete_table_dummy(table_id: int):
    return {"path": f"/api/tables/{table_id}"}

@router.post("/{table_id}/qrcode")
async def get_table_qrcode_dummy(table_id: int):
    return {"path": f"/api/tables/{table_id}/qrcode"}

@router.patch("/{table_id}/close")
async def close_table_dummy(table_id: int):
    return {"path": f"/api/tables/{table_id}/close"}
