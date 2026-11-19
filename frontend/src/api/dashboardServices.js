import api from "./axios";

/**
 * Dashboard Summary
 */
export const getDashboardSummary = async () => {
    const response = await api.get("/dashboard/summary");
    return response.data;
};

/**
 * Dashboard Statistics
 */
export const getDashboardStatistics = async () => {
    const response = await api.get("/dashboard/statistics");
    return response.data;
};

/**
 * Dashboard Trends
 */
export const getDashboardTrends = async () => {
    const response = await api.get("/dashboard/trends");
    return response.data;
};

/**
 * Combined Dashboard Health Summary
 */
export const getDashboardHealthSummary = async () => {
    const response = await api.get("/dashboard/health-summary");
    return response.data;
};

/**
 * AI Health Summary
 */
export const getAIHealthSummary = async () => {
    const response = await api.get("/dashboard/ai-health-summary");
    return response.data;
};

/**
 * AI Lifestyle Recommendation
 */
export const getAILifestyleRecommendation = async () => {
    const response = await api.get("/dashboard/ai-lifestyle-recommendation");
    return response.data;
};

/**
 * AI Risk Explanation
 */
export const getAIRiskExplanation = async () => {
    const response = await api.get("/dashboard/ai-risk-explanation");
    return response.data;
};