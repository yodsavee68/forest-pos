# API Development Roles & Responsibilities

This document outlines where each API endpoint from `API_DOCS.md` is implemented, based on the router structure in the `app/api/` directory.

## 1. `app/api/admin.py`
**Responsibility:** Authentication and user management for Admin/Staff, and Dashboard statistics.
**Endpoints:**
*   `POST /api/admin/register` - สร้างบัญชีผู้ใช้ (Admin/Staff)
*   `POST /api/admin/login` - เข้าสู่ระบบรับ Token
*   `GET /api/admin/me` - ดึงข้อมูลผู้ใช้ที่กำลังล็อกอิน
*   `GET /api/admin/users` - ดึงรายชื่อผู้ใช้ทั้งหมด
*   `POST /api/admin/users` - สร้างบัญชีผู้ใช้ใหม่ (Admin)
*   `PATCH /api/admin/users/{user_id}` - อัพเดทข้อมูลผู้ใช้ (Admin)
*   `DELETE /api/admin/users/{user_id}` - ลบผู้ใช้ (Admin)
*   `GET /api/admin/dashboard/stats` - ดูสรุปยอดขายและจำนวนออเดอร์วันนี้
*   `GET /api/admin/dashboard/top-selling` - ดู 5 อันดับเมนูขายดี

## 2. `app/api/orders.py`
**Responsibility:** Handling customer orders and waiter operations.
**Endpoints:**
*   `POST /api/orders` - สร้างออเดอร์ใหม่จากลูกค้า
*   `GET /api/orders/{order_id}` - ดูรายละเอียดของออเดอร์
*   `PATCH /api/orders/{order_id}/status` - อัพเดทสถานะออเดอร์ (Cooking, Served, Cancelled)
*   `GET /api/orders/active` - ดึงรายการออเดอร์ที่ยังไม่เสร็จสิ้น (Active orders)
*   `GET /api/orders/today` - ดึงรายการออเดอร์ของวันนี้
*   `GET /api/orders/history` - ดึงรายการออเดอร์ย้อนหลัง
*   `GET /api/orders/history/{order_id}` - ดูรายละเอียดของออเดอร์ย้อนหลัง
*   `PATCH /api/orders/{order_id}/payment` - อัพเดทสถานะการชำระเงิน (Bill Splitting, Discount)
*   `GET /api/orders/summary` - ดึงสรุปยอดขายและจำนวนออเดอร์วันนี้

## 3. `app/api/kitchen.py`
**Responsibility:** Kitchen Display System (KDS) operations.
**Endpoints:**
*   `GET /api/kitchen/orders` - ดึงรายการอาหารที่ต้องทำ (Queue)
*   `PATCH /api/kitchen/orders/{item_id}/status` - อัพเดทสถานะรายการอาหาร (Cooking -> Done)

## 4. `app/api/products.py`
**Responsibility:** Menu item management.
**Endpoints:**
*   `GET /api/products` - ดึงรายชื่อเมนูอาหารทั้งหมด
*   `GET /api/products/{product_id}/options` - ดึงตัวเลือกของเมนู
*   `POST /api/products` - เพิ่มเมนูอาหารใหม่ (Admin)
*   `PATCH /api/products/{product_id}` - อัพเดทข้อมูลเมนู (Admin)
*   `DELETE /api/products/{product_id}` - ลบเมนู (Admin)
*   `POST /api/products/{product_id}/image` - อัพโหลดรูปภาพเมนู

## 5. `app/api/categories.py`
**Responsibility:** Menu categories management.
**Endpoints:**
*   `GET /api/categories` - ดึงหมวดหมู่ทั้งหมด
*   `POST /api/categories` - สร้างหมวดหมู่ใหม่
*   `PATCH /api/categories/{category_id}` - แก้ไขหมวดหมู่
*   `DELETE /api/categories/{category_id}` - ลบหมวดหมู่
*   `POST /api/categories/sort` - เรียงลำดับหมวดหมู่

## 6. `app/api/modifiers.py`
**Responsibility:** Menu options and toppings management.
**Endpoints:**
*   `GET /api/modifiers` - ดึงกลุ่มตัวเลือกทั้งหมด (Spicy Level, Toppings)
*   `POST /api/modifiers` - สร้างกลุ่มตัวเลือก
*   `PATCH /api/modifiers/{group_id}` - แก้ไขกลุ่มตัวเลือก
*   `DELETE /api/modifiers/{group_id}` - ลบกลุ่มตัวเลือก

## 7. `app/api/tables.py`
**Responsibility:** Table and Zone management, including QR code generation.
**Endpoints:**
*   `GET /api/tables` - ดึงข้อมูลโต๊ะทั้งหมด (Master Data)
*   `POST /api/tables` - สร้างโต๊ะใหม่
*   `PATCH /api/tables/{table_id}` - แก้ไขข้อมูลโต๊ะ
*   `DELETE /api/tables/{table_id}` - ลบโต๊ะ
*   `POST /api/tables/{table_id}/qrcode` - สร้าง/ดึง QR Code สำหรับโต๊ะ
*   `POST /api/tables/open` - เปิดโต๊ะและสร้าง Session สำหรับลูกค้า
*   `GET /api/tables/active` - ดึงรายการโต๊ะที่เปิดอยู่ (Active Sessions)
*   `PATCH /api/tables/{table_id}/close` - ปิดโต๊ะ (Check bin)

## 8. `app/api/notifications.py`
**Responsibility:** Handling notifications like calling waiters.
**Endpoints:**
*   `POST /api/notifications/send` - ส่งแจ้งเตือนเรียกพนักงาน

## 9. `app/api/settings.py`
**Responsibility:** Store configuration management.
**Endpoints:**
*   `GET /api/settings` - ดึงค่าตั้งค่าร้าน (Tax, Service Charge, Info)
*   `PATCH /api/settings` - อัพเดทค่าตั้งค่าร้าน

## Note on Real-time (Socket.io)
Real-time events are configured in `app/main.py` directly under the namespace `/socket.io/orders`.
*   Events: `new_order`, `order_status_updated`, `call_waiter`, `payment_request`
