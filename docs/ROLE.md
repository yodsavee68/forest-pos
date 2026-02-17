# Project Roles & Responsibilities

## Tech Stack
- **Backend:** Python (FastAPI)
- **Frontend:** Next.js (TypeScript)
- **Database:** Turso (libSQL)
- **Real-time:** Socket.io

## สมาชิกในทีมและการแบ่งงาน (Team Members & Route Assignments)

### 1. [นายยศวีร์ ศุภโชคธนาทรัพย์ (68114540474)](./guide/68114540474.md)
**Role:** Customer / ส่วนของ Order
**Backend Routes:**
1. `POST /api/orders` - สร้างออเดอร์ใหม่ (Create new order)
2. `GET /api/orders/{order_id}` - ดูรายละเอียดออเดอร์ (Get order details)
**Frontend Routes:**
1. `/order` - หน้า Welcome / เลือกภาษา (Welcome Screen)
2. `/order/menu` - หน้าเมนูและการสั่งอาหาร (Menu & Ordering)

### 2. [นายวิศรุต ปู่แก้ว (68114540573)](./guide/68114540573.md)
**Role:** Waiter / Clear ออเดอร์และการแจ้งเตือน
**Backend Routes:**
1. `PATCH /api/orders/{order_id}/status` - อัพเดทสถานะออเดอร์ (Update order status)
2. `POST /api/notifications/send` - ส่งแจ้งเตือนไปยังพนักงาน (Send notification)
**Frontend Routes:**
1. `/order/status` - หน้าติดตามสถานะอาหาร (Order Status)
2. `/order/bill` - หน้าเรียกเช็คบิล (Request Bill)

### 3. [นายจารุกิตติ์ ใจงาม (68114540111)](./guide/68114540111.md)
**Role:** Admin / แสดงออเดอร์ที่เข้ามา (Kitchen)
**Backend Routes:**
1. `GET /api/orders/active` - ดึงรายการออเดอร์ที่กำลัังดำเนินการ (Get active orders)
2. `WS /socket.io/orders` - จัดการ Real-time connection (Socket.io)
**Frontend Routes:**
1. `/kitchen/queue` - หน้าจอครัว ดูรายการที่ต้องทำ (KDS Queue)
2. `/kitchen/history` - ประวัติรายการอาหารที่ทำเสร็จ (Cooking History)

### 4. [นายปรีชา แสงแก้ว (68114540382)](./guide/68114540382.md)
**Role:** Customer / แสดงรายการอาหารและ option
**Backend Routes:**
1. `GET /api/products` - ดึงรายการอาหารทั้งหมด (Get all products)
2. `GET /api/products/{product_id}/options` - ดึงตัวเลือกเพิ่มเติม (Get options)
**Frontend Routes:**
1. `/pos/terminal` - หน้าจอขายสำหรับพนักงาน (POS Terminal)
2. `/pos/orders` - หน้ารายการออเดอร์ทั้งหมด (Order List)

### 5. [นายณัฐวุฒิ ตูมหอม (68114540203)](./guide/68114540203.md)
**Role:** Admin / จัดการเมนูและเปิดโต๊ะ
**Backend Routes:**
1. `POST /api/products` - เพิ่มเมนูอาหารใหม่ (Create new product)
2. `POST /api/tables/open` - เปิดโต๊ะสำหรับลูกค้าใหม่ (Open table)
**Frontend Routes:**
1. `/pos/tables` - หน้าจัดการสถานะโต๊ะ (Table Management)
2. `/pos/menu` - หน้าจัดการรายการอาหาร (Menu Management)

### 6. [นายเอกวุธ ศรีแปลง (68114540764)](./guide/68114540764.md)
**Role:** Admin / Dashboard และวิเคราะห์ข้อมูลพื้นฐาน
**Backend Routes:**
1. `GET /api/admin/dashboard/stats` - ดูสถิติพื้นฐานรายวัน (Get daily statistics)
2. `GET /api/admin/dashboard/top-selling` - ดูเมนูขายดี (Get top selling items)
**Frontend Routes:**
1. `/pos/dashboard` - หน้าสรุปยอดขาย (Dashboard)
2. `/pos/members` - หน้าจัดการสมาชิก (Member/CRM)
3. `/pos/settings` - หน้าตั้งค่าระบบ (Settings)

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
