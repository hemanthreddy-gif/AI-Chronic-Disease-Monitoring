from typing import List

from fastapi import APIRouter, Depends, HTTPException, status

from app.auth.dependencies import get_current_user
from app.models.health_record import HealthRecordModel
from app.schemas.health_record import (
    HealthRecordCreate,
    HealthRecordResponse,
)
from app.services.health_record_service import HealthRecordService
from app.services.risk_engine import RiskEngine

router = APIRouter(
    prefix="/health-records",
    tags=["Health Records"],
)


def health_record_response(document: dict) -> HealthRecordResponse:
    """
    Convert MongoDB document into API response.
    """

    return HealthRecordResponse(
        id=str(document["_id"]),
        user_username=document["user_username"],
        systolic_bp=document["systolic_bp"],
        diastolic_bp=document["diastolic_bp"],
        blood_glucose=document["blood_glucose"],
        weight=document["weight"],
        medication_taken=document["medication_taken"],
        exercise_minutes=document["exercise_minutes"],
        sleep_hours=document["sleep_hours"],
        water_intake_liters=document["water_intake_liters"],
        symptoms=document.get("symptoms"),
        notes=document.get("notes"),
        risk_score=document["risk_score"],
        risk_level=document["risk_level"],
        recorded_at=document["recorded_at"],
    )


@router.post(
    "",
    response_model=HealthRecordResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_health_record(
    payload: HealthRecordCreate,
    current_user=Depends(get_current_user),
):
    """
    Store a daily health record for the authenticated user.
    """

    # Create the service after FastAPI startup
    service = HealthRecordService()

    # Convert request body into a dictionary
    payload_data = payload.model_dump()

    # Calculate risk automatically
    risk = RiskEngine.calculate_risk(payload_data)

    # Create the health record model
    health_record = HealthRecordModel(
        user_username=current_user["username"],
        risk_score=risk["risk_score"],
        risk_level=risk["risk_level"],
        **payload_data,
    )

    # Save to MongoDB
    document = await service.create_health_record(health_record)

    if not document:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to save health record.",
        )

    return health_record_response(document)


@router.get(
    "",
    response_model=List[HealthRecordResponse],
    status_code=status.HTTP_200_OK,
)
async def get_health_records(
    current_user=Depends(get_current_user),
):
    """
    Return all health records for the authenticated user.
    """

    service = HealthRecordService()

    records = await service.get_user_health_records(
        current_user["username"]
    )

    return [
        health_record_response(record)
        for record in records
    ]


@router.get(
    "/latest",
    response_model=HealthRecordResponse,
    status_code=status.HTTP_200_OK,
)
async def get_latest_health_record(
    current_user=Depends(get_current_user),
):
    """
    Return the latest health record for the authenticated user.
    """

    service = HealthRecordService()

    record = await service.get_latest_health_record(
        current_user["username"]
    )

    if record is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No health records found.",
        )

    return health_record_response(record)