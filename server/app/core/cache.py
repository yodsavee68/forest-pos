from datetime import datetime, timedelta
from typing import Any, Dict, Optional, Tuple

class InMemoryCache:
    _instance = None
    _store: Dict[str, Tuple[Any, datetime]] = {}

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(InMemoryCache, cls).__new__(cls)
        return cls._instance

    def set(self, key: str, value: Any, ttl_seconds: int = 300) -> None:
        """
        Set a value in the cache with a Time-To-Live (TTL).
        Default TTL is 5 minutes (300 seconds).
        """
        expiration = datetime.now() + timedelta(seconds=ttl_seconds)
        self._store[key] = (value, expiration)

    def get(self, key: str) -> Optional[Any]:
        """
        Get a value from the cache. Returns None if key doesn't exist or expired.
        """
        if key not in self._store:
            return None

        value, expiration = self._store[key]
        if datetime.now() > expiration:
            del self._store[key]
            return None
        
        return value

    def delete(self, key: str) -> None:
        """Delete a key from the cache."""
        if key in self._store:
            del self._store[key]

    def clear(self) -> None:
        """Clear the entire cache."""
        self._store.clear()

# Global Cache Instance
cache = InMemoryCache()
