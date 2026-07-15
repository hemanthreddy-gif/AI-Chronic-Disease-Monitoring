from app.schemas.dashboard_schema import (
    BloodPressureSummary,
    DashboardHealthSummaryResponse,
    DashboardStatisticsResponse,
    DashboardSummaryResponse,
)
from app.services.health_record_service import HealthRecordService
from app.services.granite_service import GraniteService

class DashboardService:

    @staticmethod
    async def get_dashboard_summary(username: str):
        service = HealthRecordService()

        latest_record = await service.get_latest_health_record(username)

        if latest_record is None:
            return None

        return DashboardSummaryResponse(
            latest_bp=BloodPressureSummary(
                systolic=latest_record["systolic_bp"],
                diastolic=latest_record["diastolic_bp"],
            ),
            latest_glucose=latest_record["blood_glucose"],
            latest_weight=latest_record["weight"],
            latest_risk_score=latest_record["risk_score"],
            latest_risk_level=latest_record["risk_level"],
            last_updated=latest_record["recorded_at"],
        )

    @staticmethod
    async def get_dashboard_trends(username: str):
        service = HealthRecordService()

        records = await service.get_user_health_records(username)

        records.reverse()

        return {
            "labels": [record["recorded_at"] for record in records],
            "systolic_bp": [record["systolic_bp"] for record in records],
            "diastolic_bp": [record["diastolic_bp"] for record in records],
            "blood_glucose": [record["blood_glucose"] for record in records],
            "weight": [record["weight"] for record in records],
            "risk_score": [record.get("risk_score", 0) for record in records],
        }
    
    @staticmethod
    async def get_dashboard_statistics(username: str):
        service = HealthRecordService()

        records = await service.get_user_health_records(username)

        if not records:
            return None

        total = len(records)

        avg_systolic = sum(r["systolic_bp"] for r in records) / total
        avg_diastolic = sum(r["diastolic_bp"] for r in records) / total
        avg_glucose = sum(r["blood_glucose"] for r in records) / total
        avg_weight = sum(r["weight"] for r in records) / total
        avg_sleep = sum(r["sleep_hours"] for r in records) / total
        avg_exercise = sum(r["exercise_minutes"] for r in records) / total

        medication_taken = sum(
            1 for r in records if r.get("medication_taken", False)
        )

        medication_adherence = (medication_taken / total) * 100

        return DashboardStatisticsResponse(
            average_systolic_bp=round(avg_systolic, 2),
            average_diastolic_bp=round(avg_diastolic, 2),
            average_glucose=round(avg_glucose, 2),
            average_weight=round(avg_weight, 2),
            medication_adherence=round(medication_adherence, 2),
            average_sleep=round(avg_sleep, 2),
            average_exercise=round(avg_exercise, 2),
        )
    
    @staticmethod
    async def get_dashboard_health_summary(username: str):
        summary = await DashboardService.get_dashboard_summary(username)

        if summary is None:
            return None

        trends = await DashboardService.get_dashboard_trends(username)

        statistics = await DashboardService.get_dashboard_statistics(username)

        return DashboardHealthSummaryResponse(
            summary=summary,
            trends=trends,
            statistics=statistics,
        )
    
    @staticmethod
    async def get_ai_health_summary(username: str):

        service = HealthRecordService()

        record = await service.get_latest_health_record(username)

        if record is None:
            return None

        prompt = f"""
Patient Health Record

Blood Pressure:
{record["systolic_bp"]}/{record["diastolic_bp"]}

Blood Glucose:
{record["blood_glucose"]}

Weight:
{record["weight"]}

Risk Level:
{record["risk_level"]}

Risk Score:
{record["risk_score"]}

Medication Taken:
{record.get("medication_taken")}

Exercise:
{record.get("exercise_minutes")} minutes

Sleep:
{record.get("sleep_hours")} hours

Generate a concise health summary.
"""

        return await GraniteService.generate_response(prompt)

    @staticmethod
    async def get_ai_lifestyle_recommendation(username: str):

        service = HealthRecordService()

        record = await service.get_latest_health_record(username)

        if record is None:
            return None

        prompt = f"""
Patient Data

Blood Pressure:
{record["systolic_bp"]}/{record["diastolic_bp"]}

Blood Glucose:
{record["blood_glucose"]}

Weight:
{record["weight"]}

Exercise:
{record.get("exercise_minutes")}

Sleep:
{record.get("sleep_hours")}

Water Intake:
{record.get("water_intake_liters")}

Medication:
{record.get("medication_taken")}

Provide personalized lifestyle recommendations.
"""

        return await GraniteService.generate_response(prompt)

    @staticmethod
    async def get_ai_risk_explanation(username: str):

        service = HealthRecordService()

        record = await service.get_latest_health_record(username)

        if record is None:
            return None

        prompt = f"""
Explain why the patient has

Risk Level:
{record["risk_level"]}

Risk Score:
{record["risk_score"]}

Blood Pressure:
{record["systolic_bp"]}/{record["diastolic_bp"]}

Blood Glucose:
{record["blood_glucose"]}

Medication:
{record.get("medication_taken")}

Exercise:
{record.get("exercise_minutes")}

Sleep:
{record.get("sleep_hours")}

Water:
{record.get("water_intake_liters")}

Explain in patient-friendly language.
"""

        return await GraniteService.generate_response(prompt)