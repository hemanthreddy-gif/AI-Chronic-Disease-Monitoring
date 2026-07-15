from functools import lru_cache

from ibm_watsonx_ai import Credentials
from ibm_watsonx_ai.foundation_models import ModelInference

from app.core.config import settings


class IBMClient:
    """
    Reusable IBM watsonx.ai client for Granite foundation models.
    """

    @staticmethod
    @lru_cache(maxsize=1)
    def get_model() -> ModelInference:
        credentials = Credentials(
            url=settings.IBM_URL,
            api_key=settings.IBM_API_KEY,
        )

        model = ModelInference(
            model_id=settings.IBM_MODEL_ID,
            credentials=credentials,
            project_id=settings.IBM_PROJECT_ID,
        )

        return model