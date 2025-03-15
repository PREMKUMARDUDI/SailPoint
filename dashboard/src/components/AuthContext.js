import React, { createContext, useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user details

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        window.location.href = "http://localhost:3000";
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
          window.location.href = "http://localhost:3000"; // Redirect if token invalid
        }
      } catch (error) {
        console.error("Auth verification failed:", error.message);
        setIsAuthenticated(false);
        setUser(null);
        window.location.href = "http://localhost:3000"; // Redirect on error
      }
    };
    verifyUser();
  }, [cookies]);

  const logout = () => {
    removeCookie("token", { path: "/" });
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated"); // Clear cached state
    window.location.href = "http://localhost:3000"; // Redirect to frontend
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {isAuthenticated ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
