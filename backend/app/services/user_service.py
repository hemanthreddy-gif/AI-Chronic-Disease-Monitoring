from app.core.security import hash_password
from app.database.database import get_database
from app.models.user import User
from app.schemas.user import UserCreate


class UserService:
    @staticmethod
    async def create_user(user: UserCreate) -> User:
        db = get_database()

        existing_user = await db.users.find_one(
            {
                "$or": [
                    {"username": user.username},
                    {"email": user.email},
                ]
            }
        )

        if existing_user:
            raise ValueError(
                "Username or email already exists."
            )

        new_user = User(
            username=user.username,
            email=user.email,
            hashed_password=hash_password(user.password),
            full_name=user.full_name,
        )

        await db.users.insert_one(
            new_user.model_dump()
        )

        return new_user

    @staticmethod
    async def get_user_by_username(username: str):
        db = get_database()

        return await db.users.find_one(
            {"username": username}
        )