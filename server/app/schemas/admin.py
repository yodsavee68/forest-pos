from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class AdminBase(BaseModel):
    username: str
    display_name: str
    role: str = "staff" # staff, manager, admin

class AdminCreate(AdminBase):
    password: str

class AdminLogin(BaseModel):
    username: str
    password: str

class AdminResponse(AdminBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class TokenData(BaseModel):
    username: Optional[str] = None
