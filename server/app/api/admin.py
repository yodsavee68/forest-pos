from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.admin import AdminCreate, AdminResponse, AdminLogin, Token
from app.services.admin import AdminService

router = APIRouter()

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
