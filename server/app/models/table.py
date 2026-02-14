from sqlalchemy import Column, Integer, String, DateTime, Enum, ForeignKey, func, Boolean
from sqlalchemy.orm import relationship
from app.database import Base
import enum

class TableSessionStatus(str, enum.Enum):
    requesting = "requesting"
    active = "active"
    payment_pending = "payment_pending"
    closed = "closed"

class Table(Base):
    __tablename__ = "tables"

    id = Column(Integer, primary_key=True, index=True)
    table_number = Column(String, unique=True, index=True)  # T1, T2
    qr_uuid = Column(String, unique=True)  # Static QR identifier

    sessions = relationship("TableSession", back_populates="table")

class TableSession(Base):
    __tablename__ = "table_sessions"

    id = Column(Integer, primary_key=True, index=True)
    table_id = Column(Integer, ForeignKey("tables.id"))
    status = Column(Enum(TableSessionStatus), default=TableSessionStatus.active)
    access_code = Column(String)  # e.g., 4829
    customer_count = Column(Integer)
    started_at = Column(DateTime(timezone=True), server_default=func.now())
    ended_at = Column(DateTime(timezone=True), nullable=True)

    table = relationship("Table", back_populates="sessions")
    orders = relationship("Order", back_populates="session")
