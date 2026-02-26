from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.admin import AdminCreate, AdminResponse, AdminLogin, Token
from app.services.admin import AdminService

router = APIRouter()

@router.post("/resgister")
async def resgister_dummy():
    return {"path": "/api/admin/resgister"}

@router.post("/register", response_model=AdminResponse, status_code=status.HTTP_201_CREATED)
async def register_admin(admin_in: AdminCreate, db: Session = Depends(get_db)):
    """
    Register a new admin/staff.
    """
    try:
        return await AdminService.create_admin(db, admin_in)
    except HTTPException:
        raise
    except Exception as e:
        # Import traceback to print full stack to console for debugging if needed, 
        # but for now returning as detail is enough to see the error in test script.
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/login", response_model=Token)
async def login_admin(login_data: AdminLogin, db: Session = Depends(get_db)):
    """
    Login to get JWT access token.
    """
    try:
        return await AdminService.authenticate_admin(db, login_data)
    except HTTPException:
        raise
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/me")
async def get_me_dummy():
    return {"path": "/api/admin/me"}

@router.get("/users")
async def get_users_dummy():
    return {"path": "/api/admin/users"}

@router.post("/users")
async def create_user_dummy():
    return {"path": "/api/admin/users"}

@router.patch("/users/{user_id}")
async def update_user_dummy(user_id: int):
    return {"path": f"/api/admin/users/{user_id}"}

@router.delete("/users/{user_id}")
async def delete_user_dummy(user_id: int):
    return {"path": f"/api/admin/users/{user_id}"}

@router.get("/dashboard/stats")
async def get_dashboard_stats_dummy():
    return {"path": "/api/admin/dashboard/stats"}

@router.get("/dashboard/top-selling")
async def get_dashboard_top_selling_dummy():
    return {"path": "/api/admin/dashboard/top-selling"}
