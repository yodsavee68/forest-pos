# คู่มือการใช้งานฟังก์ชันกลาง (Common Utilities Guide)

รวมวิธีการใช้งาน Module และ Helper Functions ต่างๆ ที่เตรียมไว้ให้ในโปรเจกต์ เพื่อลดความซ้ำซ้อนของการเขียนโค้ด

## 1. In-Memory Cache (`server/app/core/cache.py`)
ระบบ Caching แบบง่ายในหน่วยความจำ (RAM) เหมาะสำหรับเก็บข้อมูลชั่วคราวที่ไม่ต้องการความคงทนถาวร เช่น OTP, Temporary Tokens, หรือผลลัพธ์การ Query ที่ไม่เปลี่ยนบ่อย

### การใช้งาน
```python
from app.core.cache import cache

# 1. การเก็บข้อมูล (Set)
# cache.set(key, value, ttl_seconds)
# ttl_seconds: อายุของข้อมูล (วินาที) ค่า default คือ 300 วินาที (5 นาที)
cache.set("my_key", {"data": "hello"}, ttl_seconds=60)

# 2. การดึงข้อมูล (Get)
# จะคืนค่า None ถ้า key ไม่เจอ หรือหมดอายุแล้ว
data = cache.get("my_key")
if data:
    print(data) # Output: {'data': 'hello'}

# 3. การลบข้อมูล (Delete)
cache.delete("my_key")

# 4. ล้างข้อมูลทั้งหมด (Clear All)
cache.clear()
```

### Use Cases ที่แนะนำ
- **Product List**: เก็บรายการสินค้าไว้ 5-10 นาที เพื่อลดการ Query Database บ่อยๆ
- **OTP**: เก็บรัหัส OTP สำหรับยืนยันตัวตน (อายุสั้นๆ 1-2 นาที)
- **Table Token**: เก็บ Token ชั่วคราวตอนเปิดโต๊ะ

---

## 2. General Utilities (`server/app/core/utils.py`)
ฟังก์ชันสำหรับจัดการข้อมูลทั่วไป เช่น วันที่, เวลา, การจัดรูปแบบ, และการสุ่มรหัส

### ใช้งาน
```python
from app.core import utils

# 1. จัดการเวลา (Timezone Asia/Bangkok)
now = utils.get_current_time() # ได้ datetime object

# 2. จัดรูปแบบวันที่แบบไทย (dd/mm/yyyy HH:MM)
print(utils.format_thai_datetime(now)) 
# Output: "15/02/2024 13:00"

# 3. จัดรูปแบบเงิน (Currency)
print(utils.format_currency(1234.5))
# Output: "1,234.50"

# 4. สุ่มรหัสอ้างอิง (Reference Code) - ตัวใหญ่+ตัวเลข
ref = utils.generate_ref_code(length=8)
# Output: "A1X9B2C3" (เหมาะสำหรับ Order ID ที่ลูกค้าเห็น)

# 5. สุ่มรหัส OTP (ตัวเลขล้วน)
otp = utils.generate_otp(length=6)
# Output: "123456"

# 6. สร้าง UUID (String)
uid = utils.generate_uuid()
# Output: "550e8400-e29b-41d4-a716-446655440000" (เหมาะสำหรับ Primary Key หรือ Token)
```
