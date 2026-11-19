from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import PyMongoError

from app.core.config import settings


class MongoDB:
    client: AsyncIOMotorClient | None = None

    async def connect(self):
        try:
            self.client = AsyncIOMotorClient(settings.MONGODB_URI)

            await self.client.admin.command("ping")

            print("MongoDB connected successfully.")

        except PyMongoError as error:
            self.client = None
            print(f"MongoDB connection failed: {error}")

    async def close(self):
        if self.client:
            self.client.close()
            print("MongoDB connection closed.")


mongodb = MongoDB()