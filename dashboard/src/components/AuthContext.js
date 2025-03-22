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
      let token =
        new URLSearchParams(location.search).get("token") ||
        localStorage.getItem("token");
      console.log("Dashboard: Token from URL:", token || "none");
      console.log(
        "Dashboard: Token from localStorage:",
        localStorage.getItem("token")
      );

      if (!token) {
        console.log("No token found, redirecting to home");
        setIsLoading(false);
        navigate("/");
        return;
      }

      console.log("Dashboard: Final token used:", token);
      try {
        console.log("Dashboard: Verifying token at:", `${BACKEND_URL}/verify`);
        const response = await axios.post(`${BACKEND_URL}/verify`, { token });
        console.log("Dashboard: Verification response:", response.data);

        if (response.data.status) {
          localStorage.setItem("token", token); // Persist token
          setUser(response.data.user);
          setIsAuthenticated(true);
          console.log("Dashboard: User authenticated successfully");
        } else {
          throw new Error("Token verification failed");
        }
      } catch (error) {
        console.error("Verification error:", error.message);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
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
    console.log("Auth: State updated - isAuthenticated:", false);
    window.location.href = FRONTEND_URL; // Force full reload
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state
  }

  console.log(
    "Dashboard: Rendering with isAuthenticated:",
    isAuthenticated,
    "isLoading:",
    isLoading
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
