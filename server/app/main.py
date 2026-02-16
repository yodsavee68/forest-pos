from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import socketio
from app.core.config import settings
from app.database import engine, Base
import app.models

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables on startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

# Variable to hold the socket manager
sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio)

app = FastAPI(title=settings.PROJECT_NAME, lifespan=lifespan)

# CORS
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Mount Socket.IO app
app.mount("/socket.io", socket_app)

# API Routers
from app.api import admin
app.include_router(admin.router, prefix="/api/admin", tags=["Admin Auth"])

@app.get("/")
async def root():
    return {"message": "Hello World", "project": settings.PROJECT_NAME}

@sio.event
async def connect(sid, environ):
    print("connect ", sid)

@sio.event
async def disconnect(sid):
    print("disconnect ", sid)
