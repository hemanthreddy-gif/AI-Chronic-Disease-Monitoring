import api from "./axios";

/**
 * Create a new health record
 */
export const createHealthRecord = async (healthRecord) => {
    const response = await api.post("/health-records", healthRecord);
    return response.data;
};

/**
 * Get all health records
 */
export const getHealthRecords = async () => {
    const response = await api.get("/health-records");
    return response.data;
};

/**
 * Get latest health record
 */
export const getLatestHealthRecord = async () => {
    const response = await api.get("/health-records/latest");
    return response.data;
};