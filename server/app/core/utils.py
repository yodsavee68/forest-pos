import secrets
import string
from datetime import datetime
import pytz
from typing import Optional

# Thai Timezone
THAI_TZ = pytz.timezone('Asia/Bangkok')

def get_current_time() -> datetime:
    """
    Get current time in Thai timezone (Asia/Bangkok).
    Returns basic datetime object with timezone info.
    """
    return datetime.now(THAI_TZ)

def format_thai_datetime(dt: datetime, fmt: str = "%d/%m/%Y %H:%M") -> str:
    """
    Format datetime to string in Thai Timezone.
    Adjust year to Buddhist Era (BE) if needed (this function uses AD by default).
    """
    if dt.tzinfo is None:
        dt = pytz.utc.localize(dt)
    
    dt_thai = dt.astimezone(THAI_TZ)
    return dt_thai.strftime(fmt)

def format_currency(amount: float) -> str:
    """
    Format float to THB currency string (e.g. 1,234.50).
    """
    return f"{amount:,.2f}"

def generate_ref_code(length: int = 6) -> str:
    """
    Generate random alphanumeric code (uppercase) for Order ID or Ref.
    Example: 'A1B2C3'
    """
    chars = string.ascii_uppercase + string.digits
    return ''.join(secrets.choice(chars) for _ in range(length))

def generate_otp(length: int = 4) -> str:
    """
    Generate numeric OTP.
    Example: '1234'
    """
    digits = string.digits
    return ''.join(secrets.choice(digits) for _ in range(length))

def generate_uuid() -> str:
    """Generate generic UUID4 string."""
    import uuid
    return str(uuid.uuid4())
