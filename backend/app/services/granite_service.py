from ibm_watsonx_ai.metanames import GenTextParamsMetaNames as GenParams

from app.services.ibm_client import IBMClient


class GraniteService:

    SYSTEM_PROMPT = """
You are an AI healthcare assistant.

You explain chronic disease monitoring information in simple,
professional language.

Rules:
- Never diagnose diseases.
- Never prescribe medication.
- Encourage healthy lifestyle.
- Recommend physician consultation whenever abnormal values exist.
"""

    @staticmethod
    async def generate_response(user_prompt: str) -> str:

        model = IBMClient.get_model()

        params = {
            GenParams.MAX_NEW_TOKENS: 300,
            GenParams.TEMPERATURE: 0.3,
        }

        response = model.generate_text(
            prompt=f"{GraniteService.SYSTEM_PROMPT}\n\n{user_prompt}",
            params=params,
        )

        return response.strip()