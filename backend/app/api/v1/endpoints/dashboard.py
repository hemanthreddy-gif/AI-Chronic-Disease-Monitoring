from fastapi import APIRouter, Depends, HTTPException, status

from app.auth.dependencies import get_current_user
from app.schemas.dashboard_schema import (
    DashboardHealthSummaryResponse,
    DashboardStatisticsResponse,
    DashboardSummaryResponse,
    DashboardTrendsResponse,
)
from app.services.dashboard_service import DashboardService
from app.services.granite_service import GraniteService
from app.schemas.dashboard_schema import AIHealthSummaryResponse

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get(
    "/summary",
    response_model=DashboardSummaryResponse,
)
async def get_dashboard_summary(
    current_user=Depends(get_current_user),
):
    summary = await DashboardService.get_dashboard_summary(
        current_user["username"]
    )

    if summary is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No health records found.",
        )

    return summary


@router.get(
    "/trends",
    response_model=DashboardTrendsResponse,
)
async def get_dashboard_trends(
    current_user=Depends(get_current_user),
):
    return await DashboardService.get_dashboard_trends(
        current_user["username"]
    )

@router.get(
    "/statistics",
    response_model=DashboardStatisticsResponse,
)
async def get_dashboard_statistics(
    current_user=Depends(get_current_user),
):
    statistics = await DashboardService.get_dashboard_statistics(
        current_user["username"]
    )

    if statistics is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No health records found.",
        )

    return statistics

@router.get(
    "/health-summary",
    response_model=DashboardHealthSummaryResponse,
)
async def get_dashboard_health_summary(
    current_user=Depends(get_current_user),
):
    health_summary = await DashboardService.get_dashboard_health_summary(
        current_user["username"]
    )

    if health_summary is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No health records found.",
        )

    return health_summary

@router.get("/test-granite")
async def test_granite(
    current_user=Depends(get_current_user),
):
    response = await GraniteService.generate_response(
        "Say hello in one short sentence."
    )

    return {
        "status": "success",
        "granite_response": response,
    }

@router.get(
    "/ai-health-summary",
    response_model=AIHealthSummaryResponse,
)
async def ai_health_summary(
    current_user=Depends(get_current_user),
):

    response = await DashboardService.get_ai_health_summary(
        current_user["username"]
    )

    if response is None:
        raise HTTPException(
            status_code=404,
            detail="No health records found.",
        )

    return {
        "ai_health_summary": response,
    }


@router.get("/ai-lifestyle-recommendation")
async def ai_lifestyle_recommendation(
    current_user=Depends(get_current_user),
):

    response = await DashboardService.get_ai_lifestyle_recommendation(
        current_user["username"]
    )

    if response is None:
        raise HTTPException(
            status_code=404,
            detail="No health records found.",
        )

    return {
        "recommendation": response,
    }


@router.get("/ai-risk-explanation")
async def ai_risk_explanation(
    current_user=Depends(get_current_user),
):

    response = await DashboardService.get_ai_risk_explanation(
        current_user["username"]
    )

    if response is None:
        raise HTTPException(
            status_code=404,
            detail="No health records found.",
        )

    return {
        "risk_explanation": response,
    }