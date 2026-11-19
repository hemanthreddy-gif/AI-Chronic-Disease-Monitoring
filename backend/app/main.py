from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_router
from app.database.connection import mongodb


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Connect to MongoDB when the application starts
    await mongodb.connect()

    yield

    # Close MongoDB connection when the application shuts down
    await mongodb.close()


app = FastAPI(
    title="AI-Assisted Chronic Disease Management Platform",
    description="Backend API for Diabetes and Hypertension Monitoring",
    version="1.0.0",
    lifespan=lifespan,
)

# ---------------------------------------------------------
# CORS Configuration
# Allows the React frontend (Vite) to access the backend
# ---------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(api_router)


@app.get("/")
async def root():
    return {
        "message": "AI-Assisted Chronic Disease Management Platform API is running."
    }