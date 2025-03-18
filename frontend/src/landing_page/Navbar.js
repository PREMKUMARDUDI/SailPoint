import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Navbar() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      console.log("Navbar cookies:", cookies);

      if (!cookies.token) {
        console.log("No token found in cookies");
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
        return;
      }

      try {
        console.log("Verifying token at:", BACKEND_URL);
        const response = await axios.post(
          BACKEND_URL,
          {},
          { withCredentials: true, timeout: 60000 }
        );
        console.log("Verification response:", response.data);
        setIsAuthenticated(response.data.status);
        localStorage.setItem("isAuthenticated", response.data.status);
      } catch (error) {
        console.error(
          "Verification error:",
          error.response?.data || error.message
        );
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
      }
    };
    verifyUser();
  }, [cookies, location]);

  const handleDashboardClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      window.location.href = DASHBOARD_URL;
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
