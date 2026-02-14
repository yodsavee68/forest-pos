# Forest POS (QR-Code POS & Ordering System)

ระบบจัดการร้านอาหารและสั่งอาหารผ่าน QR Code พัฒนาด้วย FastAPI และ Next.js

## เอกสารที่เกี่ยวข้อง (Related Documentation)
- **[API Documentation](./docs/API_DOCS.md)**: รายละเอียด API Endpoints ทั้งหมด
- **[Project Roles & Guides](./docs/role.md)**: รายชื่อสมาชิกในทีม หน้าที่รับผิดชอบ และคู่มือการทำงาน
- **[Common Utilities Guide](./docs/UTILS_GUIDE.md)**: คู่มือการใช้งานฟังก์ชันกลาง (e.g., Cache)

## โครงสร้างโปรเจกต์ (Project Structure)
- **`server/`**: Backend (FastAPI, Python 3.13, SQLAlchemy, Socket.io)
- **`client/`**: Frontend (Next.js 16, TypeScript, Tailwind CSS)

## สิ่งที่ต้องเตรียม (Prerequisites)
ก่อนเริ่มใช้งาน ต้องติดตั้งโปรแกรมเหล่านี้:
- [Python 3.13](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/) (แนะนำ LTS หรือล่าสุด)
- [Turso Account](https://turso.tech/) (สำหรับ Database)

---

## การติดตั้ง (Setup Instructions)

### 1. ตั้งค่า Backend (Server)

1. เปิด Terminal และเข้าไปที่โฟลเดอร์ `server`:
   ```bash
   cd server
   ```

2. สร้าง Virtual Environment (ถ้ายังไม่ได้สร้าง):
   ```bash
   python3.13 -m venv venv
   ```

3. เปิดใช้งาน Virtual Environment (Activate):
   - **macOS / Linux**:
     ```bash
     source venv/bin/activate
     ```
   - **Windows**:
     ```bash
     .\venv\Scripts\activate
     ```

4. ติดตั้ง Libraries ที่จำเป็น:
   ```bash
   pip install -r requirements.txt
   ```

5. **การตั้งค่า Database**:
   - แก้ไขไฟล์ `app/core/config.py` หรือสร้างไฟล์ `.env`
   - ใส่ค่า `DATABASE_URL` ที่ได้จาก Turso (เช่น `sqlite+aiosqlite://...` หรือลิ้งค์ LibSQL)

### 2. ตั้งค่า Frontend (Client)

1. เปิด Terminal ใหม่ และเข้าไปที่โฟลเดอร์ `client`:
   ```bash
   cd client
   ```

2. ติดตั้ง Dependencies:
   ```bash
   npm install
   ```

---

## การรันโปรเจกต์ (How to Run)

ต้องรันทั้ง 2 ส่วนพร้อมกัน (ใช้ Terminal 2 หน้าต่าง)

### 1. รัน Backend
(ในโฟลเดอร์ `server` และต้อง Activate venv ก่อน)
```bash
uvicorn app.main:app --reload --port 8000
```
- **API Docs (Swagger UI)**: http://localhost:8000/docs
- **Server URL**: http://localhost:8000

### 2. รัน Frontend
(ในโฟลเดอร์ `client`)
```bash
npm run dev
```
- **Web App**: http://localhost:3000
