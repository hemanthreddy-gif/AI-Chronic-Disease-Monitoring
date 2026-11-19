from typing import List, Optional

from app.database.database import get_database
from app.models.health_record import HealthRecordModel


class HealthRecordService:
    """
    Service class for handling patient health records.
    """

    def __init__(self):
        self.db = get_database()
        self.collection = self.db.health_records

    async def create_health_record(
        self,
        health_record: HealthRecordModel,
    ) -> dict:
        """
        Save a new health record.
        """

        document = health_record.model_dump()

        result = await self.collection.insert_one(document)

        document["_id"] = result.inserted_id

        return document

    async def get_user_health_records(
        self,
        username: str,
    ) -> List[dict]:
        """
        Return all records for a user sorted by newest first.
        """

        cursor = (
            self.collection
            .find({"user_username": username})
            .sort("recorded_at", -1)
        )

        return await cursor.to_list(length=None)

    async def get_latest_health_record(
        self,
        username: str,
    ) -> Optional[dict]:
        """
        Return the most recent health record.
        """

        return await self.collection.find_one(
            {"user_username": username},
            sort=[("recorded_at", -1)],
        )