from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class HealthRecordCreate(BaseModel):
    """
    Schema used when a patient submits a new daily health record.
    """

    systolic_bp: int = Field(..., ge=50, le=300)
    diastolic_bp: int = Field(..., ge=30, le=200)

    blood_glucose: float = Field(..., ge=20, le=1000)

    weight: float = Field(..., ge=1, le=500)

    medication_taken: bool

    exercise_minutes: int = Field(default=0, ge=0, le=1440)

    sleep_hours: float = Field(default=0, ge=0, le=24)

    water_intake_liters: float = Field(default=0, ge=0, le=20)

    symptoms: Optional[str] = None

    notes: Optional[str] = None


class HealthRecordResponse(BaseModel):
    """
    Schema returned to the client after a health record is created
    or retrieved.
    """

    id: Optional[str] = None

    user_username: str

    systolic_bp: int
    diastolic_bp: int

    blood_glucose: float

    weight: float

    medication_taken: bool

    exercise_minutes: int

    sleep_hours: float

    water_intake_liters: float

    symptoms: Optional[str] = None

    notes: Optional[str] = None

    # New fields
    risk_score: int
    risk_level: str

    recorded_at: datetime

    model_config = {
        "from_attributes": True
    }