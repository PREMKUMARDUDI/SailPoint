import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useAuth } from "./AuthContext";
import { useLocation } from "react-router-dom";

const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && !location.search.includes("token")) {
    console.log("Home: Unauthenticated, redirecting to:", FRONTEND_URL);
    window.location.href = FRONTEND_URL;
    return null;
  }

  console.log("Home: Rendering Dashboard, isAuthenticated:", isAuthenticated);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
