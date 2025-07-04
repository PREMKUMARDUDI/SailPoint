import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const dropdownRef = useRef(null); // Ref to track the dropdown element
  const token = localStorage.getItem("token");

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    console.log("Menu: Profile clicked, toggling dropdown, user:", user);
    setIsProfileDropdownOpen(!isProfileDropdownOpen); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    console.log("Menu: Logout clicked");
    setIsProfileDropdownOpen(false);
    logout(); // Calls AuthContext logout
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".avatar") // Exclude clicks on the avatar
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isProfileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const menuclass = "menu";
  const activeMenuclass = "menu selected";
  const getLinkPath = (path) =>
    isAuthenticated && token ? `${path}?token=${token}` : path;

  return (
    <div className="menu-container">
      <Link to={process.env.REACT_APP_DASHBOARD_URL}>
        <img src="logo.png" style={{ width: "30px" }} alt="Logo" />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={getLinkPath("/")}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuclass : menuclass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={getLinkPath("/orders")}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuclass : menuclass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={getLinkPath("/holdings")}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuclass : menuclass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={getLinkPath("/positions")}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuclass : menuclass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={getLinkPath("/funds")}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuclass : menuclass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to={FRONTEND_URL}>
              <p
                className={selectedMenu === 0 ? activeMenuclass : menuclass}
                style={{ color: "#000" }}
              >
                Home
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar" onClick={handleProfileClick}>
            <i className="fa fa-user-o" aria-hidden="true"></i>
          </div>
          {isProfileDropdownOpen && isAuthenticated && (
            <div className="profile-dropdown" ref={dropdownRef}>
              <p>
                <strong>Username:</strong> {user?.username || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {user?.email || "N/A"}
              </p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
