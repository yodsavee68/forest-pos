from sqlalchemy.orm import Session
from sqlalchemy import select
from fastapi import HTTPException, status
from datetime import timedelta

from app.models.user import Admin
from app.schemas.admin import AdminCreate, AdminLogin, Token
from app.core.security import verify_password, get_password_hash, create_access_token

class AdminService:
    @staticmethod
    async def create_admin(db: Session, admin_in: AdminCreate) -> Admin:
        # Check if user already exists
        stmt = select(Admin).where(Admin.username == admin_in.username)
        result = await db.execute(stmt)
        existing_user = result.scalar_one_or_none()
        
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already registered"
            )
        
        # Create new admin
        hashed_password = get_password_hash(admin_in.password)
        new_admin = Admin(
            username=admin_in.username,
            password_hash=hashed_password,
            display_name=admin_in.display_name,
            role=admin_in.role
        )
        
        db.add(new_admin)
        await db.commit()
        await db.refresh(new_admin)
        
        return new_admin

    @staticmethod
    async def authenticate_admin(db: Session, login_data: AdminLogin) -> Token:
        stmt = select(Admin).where(Admin.username == login_data.username)
        result = await db.execute(stmt)
        admin = result.scalar_one_or_none()
        
        if not admin or not verify_password(login_data.password, admin.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
            
        access_token_expires = timedelta(minutes=60 * 12) # 12 Hours
        access_token = create_access_token(
            subject=admin.username, expires_delta=access_token_expires
        )
        
        return {"access_token": access_token, "token_type": "bearer"}
