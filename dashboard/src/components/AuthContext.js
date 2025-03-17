import React, { createContext, useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext();

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

export function AuthProvider({ children }) {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user details

  useEffect(() => {
    const verifyUser = async () => {
      console.log("Dashboard cookies:", cookies);
      if (!cookies.token) {
        console.log("No token in dashboard");
        setIsAuthenticated(false);
        setUser(null);
        setTimeout(() => {
          // Delay redirect
          window.location.href = FRONTEND_URL;
        }, 500);
        return;
      }

      try {
        console.log("Verifying token:", cookies.token);
        const { data } = await axios.post(
          `${BACKEND_URL}/`,
          {},
          { withCredentials: true }
        );
        console.log("Dashboard verification response:", data);
        if (data.status) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
          window.location.href = FRONTEND_URL; // Redirect if token invalid
        }
      } catch (error) {
        console.error("Auth error:", error.response || error.message);
        setIsAuthenticated(false);
        setUser(null);
        window.location.href = FRONTEND_URL; // Redirect on error
      }
    };
    setTimeout(verifyUser, 100);
  }, [cookies]);

  const logout = () => {
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated"); // Clear cached state
    window.location.href = FRONTEND_URL; // Redirect to frontend
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {isAuthenticated ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
