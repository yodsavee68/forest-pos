from pydantic_settings import BaseSettings
from functools import lru_cache
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Forest POS"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str = "sqlite+aiosqlite:///./forest.db"
    SECRET_KEY: str = "changethis"
    BACKEND_CORS_ORIGINS: list[str] = ["http://localhost:3000"]

    class Config:
        case_sensitive = True
        env_file = ".env"

@lru_cache()
def get_settings():
    return Settings()

settings = get_settings()
