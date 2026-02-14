import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_register_admin(client: AsyncClient):
    response = await client.post("/api/admin/register", json={
        "username": "testadmin",
        "password": "password123",
        "display_name": "Test Admin",
        "role": "admin"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["username"] == "testadmin"
    assert "id" in data
    assert "password" not in data # Ensure password is not returned

@pytest.mark.asyncio
async def test_register_duplicate_admin(client: AsyncClient):
    # First registration
    await client.post("/api/admin/register", json={
        "username": "duplicate_user",
        "password": "password123",
        "display_name": "Test Admin",
        "role": "admin"
    })
    
    # Second registration with same username
    response = await client.post("/api/admin/register", json={
        "username": "duplicate_user",
        "password": "newpassword",
        "display_name": "Another Admin",
        "role": "staff"
    })
    assert response.status_code == 400
    assert "Username already registered" in response.json()["detail"]

@pytest.mark.asyncio
async def test_login_admin(client: AsyncClient):
    # Register first
    await client.post("/api/admin/register", json={
        "username": "login_user",
        "password": "password123",
        "display_name": "Login User",
        "role": "admin"
    })
    
    # Login success
    response = await client.post("/api/admin/login", json={
        "username": "login_user",
        "password": "password123"
    })
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

@pytest.mark.asyncio
async def test_login_invalid_credentials(client: AsyncClient):
    # Register first
    await client.post("/api/admin/register", json={
        "username": "invalid_login",
        "password": "password123",
        "display_name": "Invalid Login",
        "role": "admin"
    })
    
    # Login wrong password
    response = await client.post("/api/admin/login", json={
        "username": "invalid_login",
        "password": "wrongpassword"
    })
    assert response.status_code == 401
    
    # Login wrong username
    response = await client.post("/api/admin/login", json={
        "username": "nonexistent",
        "password": "password123"
    })
    assert response.status_code == 401
