# Frontend Routes Documentation

เอกสารนี้รวบรวมรายละเอียดของ Routes ทั้งหมดในส่วนของ Frontend (Next.js App Router) โดยแบ่งออกเป็น 2 ส่วนหลักคือ **POS (สำหรับพนักงาน)** และ **Order (สำหรับลูกค้า)**

---

## 1. POS System (Staff Interface)
เส้นทางสำหรับระบบจัดการหน้าร้านและการขาย ออกแบบมาเพื่อใช้งานบน **Tablet (iPad)** เป็นหลัก

**Base URL:** `/pos`

| Route | ชื่อหน้า | รายละเอียด | สถานะ |
| :--- | :--- | :--- | :--- |
| `/pos` | Root POS | จะทำการ Redirect ไปยัง `/pos/tables` โดยอัตโนมัติ | ✅ Completed |
| `/pos/tables` | Table Management | หน้าจัดการสถานะโต๊ะทั้งหมด (ว่าง, มีลูกค้า, เช็คบิล) | ✅ Completed |
| `/pos/terminal` | POS Terminal | หน้าจอขาย (Point of Sale) สำหรับคีย์ออเดอร์เพิ่มหรือคิดเงิน | ✅ Completed |
| `/pos/menu` | Menu Management | หน้าจัดการรายการอาหาร (เพิ่ม/ลบ/แก้ไข เมนู) | 🚧 Planned |
| `/pos/orders` | Order List | หน้ารายการออเดอร์ทั้งหมดในร้าน (ดูสถานะครัว) | 🚧 Planned |
| `/pos/settings`| Settings | หน้าตั้งค่าระบบ (เช่น เชื่อมต่อเครื่องพิมพ์, ตั้งค่าร้าน) | 🚧 Planned |
| `/pos/dashboard` | Dashboard | **(New)** หน้าภาพรวมยอดขายรายวันและสถิติเบื้องต้น | 🚧 Planned |
| `/pos/members` | Members | **(New)** หน้าจัดการระบบสมาชิก/ลูกค้า (CRM) | 🚧 Planned |

### โครงสร้าง Layout (`/pos/layout.tsx`)
- **Sidebar**: เมนูนำทางด้านซ้าย เชื่อมโยงไปยัง Route ต่างๆ
- **Top Bar**: แถบค้นหาและข้อมูลผู้ใช้งาน (Admin)
- **Main Content**: ส่วนแสดงผลเนื้อหาของแต่ละหน้าตาม Route ที่เลือก

---

## 2. Ordering System (Customer Interface)
เส้นทางสำหรับลูกค้าที่สแกน QR Code เพื่อสั่งอาหาร ออกแบบมาเพื่อใช้งานบน **Mobile Phone**

**Base URL:** `/order`

| Route | ชื่อหน้า | รายละเอียด | สถานะ |
| :--- | :--- | :--- | :--- |
| `/order` | Welcome Screen | หน้าแรกสำหรับเลือกว่าจะเริ่มสั่งอาหาร หรือเรียกพนักงาน (เลือกภาษาได้) | ✅ Completed |
| `/order/menu` | Menu & Ordering | หน้าเมนูอาหาร เลือกหมวดหมู่ และกดสั่งอาหารลงตะกร้า | ✅ Completed |
| `/order/status` | Order Status | **(New)** หน้าติดตามสถานะอาหาร (รอคิว / กำลังทำ / เสิร์ฟแล้ว) | 🚧 Planned |
| `/order/bill` | Request Bill | **(New)** หน้าสรุปยอดเงินและกดเรียกพนักงานเก็บเงิน | 🚧 Planned |

### ฟีเจอร์หลัก
- **Mobile First Design**: รองรับหน้าจอมือถือและการสัมผัส
- **Local State**: การจัดการตะกร้าสินค้าเบื้องต้น (ยังไม่เชื่อมต่อ Backend)
- **Language Switch**: รองรับการเปลี่ยนภาษา (TH/EN/CN)

---

## 3. Kitchen System (Kitchen Display System - KDS)
เส้นทางสำหรับในครัว ดูรายการอาหารที่ต้องทำ ออกแบบมาเพื่อใช้งานบน **Tablet / Monitor**

**Base URL:** `/kitchen`

| Route | ชื่อหน้า | รายละเอียด | สถานะ |
| :--- | :--- | :--- | :--- |
| `/kitchen/queue` | Order Queue | **(New)** หน้ารวมออเดอร์ที่ต้องทำ (เรียงตามคิว/โต๊ะ) | 🚧 Planned |
| `/kitchen/history` | Cooking History | **(New)** ประวัติรายการอาหารที่ทำเสร็จแล้ว (ย้อนดูได้) | 🚧 Planned |
