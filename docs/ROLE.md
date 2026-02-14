# Project Roles & Responsibilities

## Tech Stack
- **Backend:** Python (FastAPI)
- **Frontend:** Next.js (TypeScript)
- **Database:** Turso (libSQL)
- **Real-time:** Socket.io

## สมาชิกในทีมและการแบ่งงาน (Team Members & Route Assignments)

### 1. [นายยศวีร์ ศุภโชคธนาทรัพย์ (68114540474)](./guide/68114540474.md)
**Role:** Customer / ส่วนของ Order
**Responsible Routes:**
1. `POST /api/orders` - สร้างออเดอร์ใหม่ (Create new order)
2. `GET /api/orders/{order_id}` - ดูรายละเอียดออเดอร์ (Get order details)

### 2. [นายวิศรุต ปู่แก้ว (68114540573)](./guide/68114540573.md)
**Role:** Waiter / Clear ออเดอร์และการแจ้งเตือน
**Responsible Routes:**
1. `PATCH /api/orders/{order_id}/status` - อัพเดทสถานะออเดอร์ (Update order status e.g., served, cleared)
2. `POST /api/notifications/send` - ส่งแจ้งเตือนไปยังพนักงาน (Send notification to waiter)

### 3. [นายจารุกิตติ์ ใจงาม (68114540111)](./guide/68114540111.md)
**Role:** Admin / แสดงออเดอร์ที่เข้ามา
**Responsible Routes:**
1. `GET /api/orders/active` - ดึงรายการออเดอร์ที่กำลัังดำเนินการ (Get active orders)
2. `WS /socket.io/orders` - จัดการ Real-time connection สำหรับออเดอร์ (Handle real-time order updates)

### 4. [นายปรีชา แสงแก้ว (68114540382)](./guide/68114540382.md)
**Role:** Customer / แสดงรายการอาหารและ option
**Responsible Routes:**
1. `GET /api/products` - ดึงรายการอาหารทั้งหมด (Get all products)
2. `GET /api/products/{product_id}/options` - ดึงตัวเลือกเพิ่มเติมของเมนู (Get product options/addons)

### 5. [นายณัฐวุฒิ ตูมหอม (68114540203)](./guide/68114540203.md)
**Role:** Admin / จัดการเมนูและเปิดโต๊ะ
**Responsible Routes:**
1. `POST /api/products` - เพิ่มเมนูอาหารใหม่ (Create new product)
2. `POST /api/tables/open` - เปิดโต๊ะสำหรับลูกค้าใหม่ (Open table/Generate QR)

### 6. [นายเอกวุธ ศรีแปลง (68114540764)](./guide/68114540764.md)
**Role:** Admin / Dashboard และวิเคราะห์ข้อมูลพื้นฐาน
**Responsible Routes:**
1. `GET /api/admin/dashboard/stats` - ดูสถิติพื้นฐานรายวัน (Get daily statistics)
2. `GET /api/admin/dashboard/top-selling` - ดูเมนูขายดี (Get top selling items)

---

## การติดตั้งและใช้งาน (Installation)
> ดูรายละเอียดขั้นตอนการติดตั้งและรันโปรเจกต์ฉบับเต็มได้ที่ไฟล์ [README.md](../README.md)

### วิธีติดตั้ง Dependencies
**Backend:**
```bash
cd server
pip install -r requirements.txt
```

**Frontend:**
```bash
cd client
npm install
```
