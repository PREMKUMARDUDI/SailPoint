import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { AuthProvider, useAuth } from "./AuthContext";

const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const Home = () => {
  const AuthenticatedContent = () => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
      console.log("Home: Unauthenticated, redirecting to:", FRONTEND_URL);
      window.location.href = FRONTEND_URL;
      return null;
    }
    return (
      <>
        <TopBar />
        <Dashboard />
      </>
    );
  };

  return (
    <AuthProvider>
      <AuthenticatedContent />
    </AuthProvider>
  );
};

export default Home;
