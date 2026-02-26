from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.database import get_db
from app.core.config import settings
from app.core.security import ALGORITHM
from app.models.user import Admin
from app.schemas.admin import TokenData

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/admin/login")

async def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
) -> Admin:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception

    stmt = select(Admin).where(Admin.username == token_data.username)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_admin(
    current_user: Admin = Depends(get_current_user),
) -> Admin:
    # Later if you want to restrict based on role 'admin' vs 'manager' vs 'staff'
    # you can add role checking logic here. For now, it just passes the user through.
    # Ex:
    # if current_user.role != "admin":
    #     raise HTTPException(status_code=403, detail="Not enough permissions")
    return current_user
