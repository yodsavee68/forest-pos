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
