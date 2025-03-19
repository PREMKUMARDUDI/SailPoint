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
      console.log("Dashboard: Token retrieved:", token);
      if (!token) {
        console.log("Dashboard: No token, redirecting...");
        window.location.href = FRONTEND_URL;
        return;
      }

      try {
        console.log("Dashboard: Verifying token at:", `${BACKEND_URL}/verify`);
        const { data } = await axios.post(
          `${BACKEND_URL}/verify`,
          { token },
          { withCredentials: false, timeout: 60000 }
        );
        console.log("Dashboard: Verification response:", data);
        if (data.status) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          console.log("Dashboard: Invalid token, redirecting...");
          localStorage.removeItem("token");
          window.location.href = FRONTEND_URL;
        }
      } catch (error) {
        console.error(
          "Dashboard: Verification error:",
          error.message,
          error.response?.data
        );
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
    return <div>Loading dashboard...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {isAuthenticated ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
