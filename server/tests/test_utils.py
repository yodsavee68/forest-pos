import pytest
from app.core import security, utils
from jose import jwt
from app.core.config import settings
from datetime import datetime

def test_password_hashing():
    password = "testpassword"
    hashed = security.get_password_hash(password)
    assert hashed != password
    assert security.verify_password(password, hashed)
    assert not security.verify_password("wrongpassword", hashed)

def test_create_access_token():
    username = "testuser"
    token = security.create_access_token(subject=username)
    assert token is not None
    
    # Decode token to verify contents
    payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[security.ALGORITHM])
    assert payload.get("sub") == username
    assert "exp" in payload

def test_format_thai_datetime():
    # Use a fixed datetime for testing
    dt = datetime(2023, 4, 13, 12, 30, 0) # Songkran day!
    formatted = utils.format_thai_datetime(dt)
    # Depending on system timezone setup, this might require careful handling
    # But utils.format_thai_datetime handles timezone conversion to Asia/Bangkok
    # 2023-04-13 12:30:00 UTC -> +7 hours -> 19:30
    # If input has no tz, utils assumes UTC? No, utils.py: "If dt.tzinfo is None: dt = pytz.utc.localize(dt)"
    # So 12:30 UTC -> 19:30 TH
    assert "13/04/2023" in formatted
    
def test_format_currency():
    amount = 1234.5678
    formatted = utils.format_currency(amount)
    assert formatted == "1,234.57"

def test_generate_random_codes():
    ref = utils.generate_ref_code(length=10)
    assert len(ref) == 10
    
    otp = utils.generate_otp(length=6)
    assert len(otp) == 6
    assert otp.isdigit()

    uuid_str = utils.generate_uuid()
    assert len(uuid_str) == 36
