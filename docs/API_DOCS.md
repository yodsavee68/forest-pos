# API Documentation

Base URL: `http://localhost:8000`

## 1. Orders (Customer & Waiter)

### Create New Order
- **Endpoint:** `POST /api/orders`
- **Description:** สร้างออเดอร์ใหม่จากลูกค้า
- **Responsible:** นายยศวีร์ ศุภโชคธนาทรัพย์
- **Request Body:**
  ```json
  {
    "session_id": 1,
    "items": [
      {
        "product_id": 1,
        "quantity": 2,
        "note": "Less spicy",
        "modifiers": [
          { "modifier_option_id": 10, "price": 10.0 }
        ]
      }
    ]
  }
  ```
- **Response:**
  ```json
  {
    "id": 101,
    "status": "pending",
    "total_price": 250.0,
    "created_at": "2024-02-15T12:00:00Z"
  }
  ```

### Get Order Details
- **Endpoint:** `GET /api/orders/{order_id}`
- **Description:** ดูรายละเอียดของออเดอร์
- **Responsible:** นายยศวีร์ ศุภโชคธนาทรัพย์

### Update Order Status
- **Endpoint:** `PATCH /api/orders/{order_id}/status`
- **Description:** อัพเดทสถานะออเดอร์ (เตรียมอาหาร, เสิร์ฟแล้ว, ยกเลิก)
- **Responsible:** นายวิศรุต ปู่แก้ว
- **Request Body:**
  ```json
  {
    "status": "served"
  }
  ```

### Get Active Orders
- **Endpoint:** `GET /api/orders/active`
- **Description:** ดึงรายการออเดอร์ที่ยังไม่เสร็จสิ้น (สำหรับครัว/จอรวม)
- **Responsible:** นายจารุกิตติ์ ใจงาม

---

## 2. Products (Menu)

### Get All Products
- **Endpoint:** `GET /api/products`
- **Description:** ดึงรายชื่อเมนูอาหารทั้งหมด
- **Responsible:** นายปรีชา แสงแก้ว
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Pad Thai",
      "price": 80.0,
      "category": "Main Course",
      "image_url": "..."
    }
  ]
  ```

### Get Product Options
- **Endpoint:** `GET /api/products/{product_id}/options`
- **Description:** ดึงตัวเลือกของเมนู (เช่น ระดับความเผ็ด, เนื้อสัตว์)
- **Responsible:** นายปรีชา แสงแก้ว

### Create New Product
- **Endpoint:** `POST /api/products`
- **Description:** เพิ่มเมนูอาหารใหม่ (Admin)
- **Responsible:** นายณัฐวุฒิ ตูมหอม
- **Request Body:**
  ```json
  {
    "name": "Tom Yum Kung",
    "price": 120.0,
    "category_id": 1,
    "modifier_groups": [
      { "id": 1, "sort_order": 1 }
    ]
  }
  ```

---

## 3. Tables & Notifications

### Open Table (Generate QR)
- **Endpoint:** `POST /api/tables/open`
- **Description:** เปิดโต๊ะและสร้าง Session สำหรับลูกค้า
- **Responsible:** นายณัฐวุฒิ ตูมหอม
- **Request Body:**
  ```json
  {
    "table_no": "B5"
  }
  ```
- **Response:**
  ```json
  {
    "access_code": "4829",
    "qr_uuid": "...",
    "qr_url": "http://frontend/table/..."
  }
  ```

### Send Notification (Call Waiter)
- **Endpoint:** `POST /api/notifications/send`
- **Description:** ส่งแจ้งเตือนเรียกพนักงาน
- **Responsible:** นายวิศรุต ปู่แก้ว
- **Request Body:**
  ```json
  {
    "table_no": "A1",
    "type": "call_waiter",
    "message": "Customer needs assistance"
  }
  ```

---

## 4. Dashboard (Admin)

### Get Daily Stats
- **Endpoint:** `GET /api/admin/dashboard/stats`
- **Description:** ดูสรุปยอดขายและจำนวนออเดอร์วันนี้
- **Responsible:** นายเอกวุธ ศรีแปลง
- **Response:**
  ```json
  {
    "total_sales": 15000.0,
    "total_orders": 45
  }
  ```

### Get Top Selling Items
- **Endpoint:** `GET /api/admin/dashboard/top-selling`
- **Description:** ดู 5 อันดับเมนูขายดี
- **Responsible:** นายเอกวุธ ศรีแปลง

---

## 5. Real-time (Socket.io)

### Order Updates
- **Namespace:** `/socket.io/orders`
- **Events:**
  - `new_order`: ส่งข้อมูลเมื่อมีออเดอร์ใหม่เข้ามา
  - `order_status_updated`: ส่งข้อมูลเมื่อสถานะเปลี่ยน
- **Responsible:** นายจารุกิตติ์ ใจงาม
