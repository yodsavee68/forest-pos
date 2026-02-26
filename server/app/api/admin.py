from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlalchemy.orm import Session
from app.database import get_db
from app.api.deps import get_current_user, get_current_active_admin
from app.models.user import Admin
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

@router.get("/me", response_model=AdminResponse)
async def get_me(current_user: Admin = Depends(get_current_user)):
    return current_user

@router.get("/users", response_model=List[AdminResponse])
async def get_users(db: Session = Depends(get_db), current_user: Admin = Depends(get_current_active_admin)):
    return await AdminService.get_all_admins(db)

@router.post("/users", response_model=AdminResponse, status_code=status.HTTP_201_CREATED)
async def create_user(user_in: AdminCreate, db: Session = Depends(get_db), current_user: Admin = Depends(get_current_active_admin)):
    return await AdminService.create_admin(db, user_in)

@router.patch("/users/{user_id}", response_model=AdminResponse)
async def update_user(user_id: int, user_in: AdminCreate, db: Session = Depends(get_db), current_user: Admin = Depends(get_current_active_admin)):
    return await AdminService.update_admin(db, user_id, user_in)

@router.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: Session = Depends(get_db), current_user: Admin = Depends(get_current_active_admin)):
    await AdminService.delete_admin(db, user_id)
    return None

@router.get("/dashboard/stats")
async def get_dashboard_stats_dummy(current_user: Admin = Depends(get_current_user)):
    return {"path": "/api/admin/dashboard/stats"}

@router.get("/dashboard/top-selling")
async def get_dashboard_top_selling_dummy(current_user: Admin = Depends(get_current_user)):
    return {"path": "/api/admin/dashboard/top-selling"}
