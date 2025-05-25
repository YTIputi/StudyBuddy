import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in on mount
        const token = localStorage.getItem('authToken');
        if (token) {
            // Here you would typically validate the token with your backend
            // For now, we'll just set the user as authenticated
            setIsAuthenticated(true);
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful login
            const response = { token: 'dummy-token', user: { id: 1, email: credentials.email } };
            
            localStorage.setItem('authToken', response.token);
            setUser(response.user);
            setIsAuthenticated(true);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signup = async (userData) => {
        try {
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful signup
            const response = { token: 'dummy-token', user: { id: 1, email: userData.email } };
            
            localStorage.setItem('authToken', response.token);
            setUser(response.user);
            setIsAuthenticated(true);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout
    };

    if (loading) {
        return <div>Loading...</div>; // You might want to create a proper loading component
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}; 