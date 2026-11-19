import api from "./axios";

export const loginUser = async (username, password) => {
    const response = await api.post("/auth/login", {
        username,
        password,
    });

    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};

export const registerUser = async (user) => {
    const response = await api.post("/auth/register", user);
    return response.data;
};

export const resetPassword = async (username, email, password) => {
    const response = await api.post("/auth/reset-password", {
        username,
        email,
        password,
    });
    return response.data;
};