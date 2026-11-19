import { createContext, useContext, useEffect, useState } from "react";

import { loginUser, getCurrentUser } from "../api/authService";
import {
    saveToken,
    removeToken,
    getToken,
} from "../utils/tokenStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initializeAuth();
    }, []);

    const initializeAuth = async () => {
        try {
            const token = getToken();

            if (!token) {
                setLoading(false);
                return;
            }

            const currentUser = await getCurrentUser();

            setUser(currentUser);
        } catch {
            removeToken();
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (username, password) => {
        const tokenResponse = await loginUser(username, password);

        saveToken(tokenResponse.access_token);

        const currentUser = await getCurrentUser();

        setUser(currentUser);
    };

    const logout = () => {
        removeToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
