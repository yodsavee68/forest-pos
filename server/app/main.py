from fastapi import FastAPI
import socketio
from app.core.config import settings

# Variable to hold the socket manager
sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio)

app = FastAPI(title=settings.PROJECT_NAME)

# Mount Socket.IO app
app.mount("/socket.io", socket_app)

@app.get("/")
async def root():
    return {"message": "Hello World", "project": settings.PROJECT_NAME}

@sio.event
async def connect(sid, environ):
    print("connect ", sid)

@sio.event
async def disconnect(sid):
    print("disconnect ", sid)
