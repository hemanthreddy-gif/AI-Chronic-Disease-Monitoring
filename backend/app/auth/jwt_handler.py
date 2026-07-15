from jose import JWTError

from app.core.security import (
    create_access_token,
    decode_access_token,
)
from app.schemas.auth import TokenPayload


def validate_token(token: str) -> TokenPayload:
    """
    Validate a JWT token and return its payload.
    """
    try:
        payload = decode_access_token(token)
        return TokenPayload(**payload)

    except JWTError as exc:
        raise JWTError("Invalid or expired token.") from exc