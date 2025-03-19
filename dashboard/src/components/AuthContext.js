import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
const DASHBOARD_URL = "https://sailpoint-dashboard.onrender.com";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      // Check URL for token first
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");
      let token = urlToken || localStorage.getItem("token");
      console.log("Dashboard: Token from URL:", urlToken);
      console.log(
        "Dashboard: Token from localStorage:",
        localStorage.getItem("token")
      );

      if (urlToken) {
        localStorage.setItem("token", urlToken); // Store it for future use
      }

      console.log("Dashboard: Final token used:", token);
      if (!token) {
        console.log("Dashboard: No token found, redirecting...");
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
          console.log("Dashboard: User authenticated successfully");
          setIsAuthenticated(true);
          setUser(data.user);
          setIsLoading(false);
          // Clear URL token after successful auth
          window.history.replaceState({}, document.title, DASHBOARD_URL);
        } else {
          console.log("Dashboard: Verification failed, clearing token...");
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
      }
    };
    verifyUser();
  }, []);

  console.log(
    "Dashboard: Rendering with isAuthenticated:",
    isAuthenticated,
    "isLoading:",
    isLoading
  );

  if (isLoading) {
    return <div>Loading Dashboard...</div>;
  }

  if (!isAuthenticated) {
    console.log("Dashboard: Not authenticated, should have redirected earlier");
    return null;
  }

  console.log("Dashboard: Rendering children");
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        logout: () => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          setUser(null);
          window.location.href = FRONTEND_URL;
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
