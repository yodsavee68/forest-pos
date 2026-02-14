from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, func, Enum, DECIMAL, Boolean
from sqlalchemy.orm import relationship
from app.database import Base
import enum

class OrderItemStatus(str, enum.Enum):
    pending = "pending"
    cooking = "cooking"
    served = "served"
    cancelled = "cancelled"

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("table_sessions.id"))
    order_number = Column(String, unique=True, index=True)
    subtotal = Column(DECIMAL(10, 2), default=0.00)
    vat_amount = Column(DECIMAL(10, 2), default=0.00)
    grand_total = Column(DECIMAL(10, 2), default=0.00)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    session = relationship("TableSession", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")
    kitchen_batches = relationship("KitchenBatch", back_populates="order")

class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer, default=1)
    unit_price = Column(DECIMAL(10, 2))  # Snapshot price
    total_price = Column(DECIMAL(10, 2))
    round_number = Column(Integer, default=1)
    note = Column(String, nullable=True)
    status = Column(Enum(OrderItemStatus), default=OrderItemStatus.pending)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    order = relationship("Order", back_populates="items")
    product = relationship("Product", back_populates="order_items")
    selections = relationship("OrderItemSelection", back_populates="order_item")

class OrderItemSelection(Base):
    __tablename__ = "order_item_selections"

    id = Column(Integer, primary_key=True, index=True)
    order_item_id = Column(Integer, ForeignKey("order_items.id"))
    modifier_option_id = Column(Integer, ForeignKey("modifier_options.id"))
    price_snapshot = Column(DECIMAL(10, 2))

    order_item = relationship("OrderItem", back_populates="selections")
    modifier_option = relationship("ModifierOption", back_populates="selections")

class KitchenBatch(Base):
    __tablename__ = "kitchen_batches"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    round_number = Column(Integer)
    is_acknowledged = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    order = relationship("Order", back_populates="kitchen_batches")
