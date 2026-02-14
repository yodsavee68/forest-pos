from sqlalchemy import Column, Integer, String, DateTime, func
from app.database import Base

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)
    display_name = Column(String)
    role = Column(String)  # e.g., 'admin', 'manager'
    created_at = Column(DateTime(timezone=True), server_default=func.now())
