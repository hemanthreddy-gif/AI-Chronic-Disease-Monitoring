from fastapi import HTTPException

from app.core.config import settings
from app.database.connection import mongodb


def get_database():
    if mongodb.client is None:
        raise HTTPException(
            status_code=503,
            detail="Database service is unavailable.",
        )

    return mongodb.client[settings.DATABASE_NAME]