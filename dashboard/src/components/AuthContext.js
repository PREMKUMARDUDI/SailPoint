import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("token"); // Initial state from storage
  });
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      const searchParams = new URLSearchParams(location.search);
      const tokenFromUrl = searchParams.get("token");
      const tokenFromStorage = localStorage.getItem("token");
      const isLogout = searchParams.get("logout") === "true";
      const token = tokenFromUrl || tokenFromStorage;

      console.log("Auth: Token from URL:", tokenFromUrl || "none");
      console.log("Auth: Token from localStorage:", tokenFromStorage || "none");
      console.log("Auth: Is logout?", isLogout);
      console.log("Auth: Current path:", location.pathname);

      if (isLogout) {
        console.log("Auth: Logout detected, clearing state");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        navigate("/");
        return;
      }

      if (!token) {
        console.log("Auth: No token found");
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        if (location.pathname !== "/") navigate("/");
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
          // Append token to URL if authenticated and not present
          if (!tokenFromUrl && location.pathname !== "/") {
            navigate(`${location.pathname}?token=${token}`, { replace: true });
          }
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
    navigate("/"); // Reset route
    setTimeout(() => {
      window.location.href = `${FRONTEND_URL}?logout=true`; // Signal logout to frontend
    }, 100); // Delay to ensure state persists
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
