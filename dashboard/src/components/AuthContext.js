import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      const searchParams = new URLSearchParams(location.search);
      let token = searchParams.get("token") || localStorage.getItem("token");
      const isLogout = searchParams.get("logout") === "true";

      console.log("Auth: Token from URL:", token || "none");
      console.log(
        "Auth: Token from localStorage:",
        localStorage.getItem("token")
      );
      console.log("Auth: Is logout?", isLogout);

      if (isLogout || (!token && !localStorage.getItem("token"))) {
        console.log("Auth: No token or logout requested");
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        localStorage.removeItem("token");
        navigate("/");
        return;
      }

      try {
        console.log("Auth: Verifying token at:", `${BACKEND_URL}/verify`);
        const response = await axios.post(`${BACKEND_URL}/verify`, { token });
        console.log("Auth: Verification response:", response.data);

        if (response.data.status) {
          localStorage.setItem("token", token);
          setUser(response.data.user || {});
          setIsAuthenticated(true);
          console.log("Auth: User authenticated successfully");
        } else {
          throw new Error("Token verification failed");
        }
      } catch (error) {
        console.error("Auth: Verification error:", error.message);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [navigate, location.search]);

  const logout = () => {
    console.log("Auth: Logging out...");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/"); // Stay in app
    window.location.href = `${FRONTEND_URL}?logout=true`; // Then redirect
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Auth: Rendering with isAuthenticated:", isAuthenticated);
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
