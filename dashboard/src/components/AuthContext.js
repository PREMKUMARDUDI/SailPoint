import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      console.log("Token retrieved:", token);
      if (!token) {
        console.log("No token found, redirecting...");
        window.location.href = FRONTEND_URL;
        return;
      }

      try {
        console.log("Verifying token at:", `${BACKEND_URL}/verify`);
        const { data } = await axios.post(
          `${BACKEND_URL}/verify`,
          { token },
          { withCredentials: false, timeout: 60000 }
        );
        console.log("Verification response:", data);
        if (data.status) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          console.log("Verification failed, redirecting...");
          localStorage.removeItem("token");
          window.location.href = FRONTEND_URL;
        }
      } catch (error) {
        console.error("Verification error:", error.message);
        localStorage.removeItem("token");
        window.location.href = FRONTEND_URL;
      } finally {
        setIsLoading(false);
      }
    };
    verifyUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = FRONTEND_URL;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {isAuthenticated ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
