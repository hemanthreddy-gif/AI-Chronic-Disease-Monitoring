from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Chronic Disease Monitoring Platform"
    API_V1_STR: str = "/api/v1"

    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = True

    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    MONGODB_URI: str
    DATABASE_NAME: str

    # IBM watsonx.ai Configuration
    IBM_API_KEY: str
    IBM_PROJECT_ID: str
    IBM_URL: str
    IBM_REGION: str = "us-south"
    IBM_MODEL_ID: str = "ibm/granite-4-h-small"

    LOG_LEVEL: str = "INFO"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",   # Ignore future environment variables
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()