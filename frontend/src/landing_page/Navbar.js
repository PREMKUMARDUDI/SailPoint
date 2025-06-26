import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("token")
  );

  useEffect(() => {
    const verifyUser = async () => {
      const searchParams = new URLSearchParams(location.search);
      const isLogout = searchParams.get("logout") === "true";

      console.log("Navbar: Is logout?", isLogout);
      if (isLogout) {
        console.log("Navbar: Logout detected, clearing token");
        localStorage.removeItem("token");
        localStorage.setItem("isAuthenticated", "false");
        setIsAuthenticated(false);
        navigate("/"); // Reset to frontend root
        return;
      }

      const token = localStorage.getItem("token");
      console.log("Navbar token from localStorage:", token);

      if (!token) {
        console.log("No token found in localStorage");
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
        return;
      }

      try {
        console.log("Verifying token at:", `${BACKEND_URL}/verify`);
        const { data } = await axios.post(
          `${BACKEND_URL}/verify`,
          { token },
          { withCredentials: false, timeout: 60000 }
        );
        console.log("Navbar:Verification response:", data);
        if (data.status) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          throw new Error("Token verification failed");
        }
      } catch (error) {
        console.error("Navbar: Verification error:", error.message);
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.setItem("isAuthenticated", "false");
      }
    };
    verifyUser();
  }, [location.search, navigate]); // Only re-run on search change

  const handleDashboardClick = (e) => {
    e.preventDefault();
    console.log("Navbar: Dashboard clicked, isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      const token = localStorage.getItem("token");
      window.location.href = `${DASHBOARD_URL}?token=${token}`;
    } else {
      navigate("/signup", { state: { fromDashboard: true } });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container px-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "30%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
