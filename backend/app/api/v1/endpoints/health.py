from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "AI-Assisted Chronic Disease Monitoring Backend",
        "version": "1.0.0"
    }