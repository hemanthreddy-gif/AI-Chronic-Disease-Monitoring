from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class HealthRecordModel(BaseModel):
    """
    Database model representing a patient's daily health record.
    """

    user_username: str

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

    # New fields
    risk_score: int = 0
    risk_level: str = "Low"

    recorded_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "populate_by_name": True,
        "json_schema_extra": {
            "example": {
                "user_username": "john_doe",
                "systolic_bp": 128,
                "diastolic_bp": 82,
                "blood_glucose": 118,
                "weight": 72.5,
                "medication_taken": True,
                "exercise_minutes": 35,
                "sleep_hours": 7.5,
                "water_intake_liters": 2.5,
                "symptoms": "Mild headache",
                "notes": "Felt better after morning walk.",
                "risk_score": 2,
                "risk_level": "Low"
            }
        }
    }