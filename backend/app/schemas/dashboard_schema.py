from datetime import datetime

from pydantic import BaseModel


class BloodPressureSummary(BaseModel):
    systolic: int
    diastolic: int


class DashboardSummaryResponse(BaseModel):
    latest_bp: BloodPressureSummary
    latest_glucose: float
    latest_weight: float
    latest_risk_score: int
    latest_risk_level: str
    last_updated: datetime

from typing import List

class DashboardTrendsResponse(BaseModel):
    labels: List[datetime]
    systolic_bp: List[int]
    diastolic_bp: List[int]
    blood_glucose: List[float]
    weight: List[float]
    risk_score: List[int]

class DashboardStatisticsResponse(BaseModel):
    average_systolic_bp: float
    average_diastolic_bp: float
    average_glucose: float
    average_weight: float
    medication_adherence: float
    average_sleep: float
    average_exercise: float

class DashboardHealthSummaryResponse(BaseModel):
    summary: DashboardSummaryResponse
    trends: DashboardTrendsResponse
    statistics: DashboardStatisticsResponse

class AIHealthSummaryResponse(BaseModel):
    ai_health_summary: str
    