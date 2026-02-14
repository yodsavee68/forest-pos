from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Text, DECIMAL, Table
from sqlalchemy.orm import relationship
from app.database import Base

# Many-to-Many Link Table
product_modifier_links = Table(
    "product_modifier_links",
    Base.metadata,
    Column("product_id", Integer, ForeignKey("products.id"), primary_key=True),
    Column("modifier_group_id", Integer, ForeignKey("modifier_groups.id"), primary_key=True),
    Column("sort_order", Integer, default=0)
)

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    sort_order = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)

    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    name = Column(String, index=True)
    description = Column(Text, nullable=True)
    price = Column(DECIMAL(10, 2))
    image_url = Column(String, nullable=True)
    is_available = Column(Boolean, default=True)
    is_active = Column(Boolean, default=True)

    category = relationship("Category", back_populates="products")
    modifier_groups = relationship("ModifierGroup", secondary=product_modifier_links, back_populates="products")
    order_items = relationship("OrderItem", back_populates="product")

class ModifierGroup(Base):
    __tablename__ = "modifier_groups"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)  # Spiciness, Options
    min_select = Column(Integer, default=0)
    max_select = Column(Integer, default=1)

    options = relationship("ModifierOption", back_populates="group")
    products = relationship("Product", secondary=product_modifier_links, back_populates="modifier_groups")

class ModifierOption(Base):
    __tablename__ = "modifier_options"

    id = Column(Integer, primary_key=True, index=True)
    group_id = Column(Integer, ForeignKey("modifier_groups.id"))
    name = Column(String)
    price_adjustment = Column(DECIMAL(10, 2), default=0.00)
    is_available = Column(Boolean, default=True)

    group = relationship("ModifierGroup", back_populates="options")
    selections = relationship("OrderItemSelection", back_populates="modifier_option")
