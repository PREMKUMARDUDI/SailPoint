import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left", autoClose: 5000 });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left", autoClose: 5000 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending login request to:", BACKEND_URL);
      const response = await axios.post(
        `${BACKEND_URL}/login`,
        { email, password },
        { withCredentials: false, timeout: 60000 }
      );
      const { data } = response;
      console.log("Login response:", data);
      if (data.success) {
        console.log("Token received:", data.token);
        localStorage.setItem("token", data.token);
        console.log("Token stored:", localStorage.getItem("token"));
        handleSuccess(data.message);
        window.location.href = DASHBOARD_URL;
      } else {
        handleError(data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
      handleError(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="form_parent d-flex flex-column justify-content-center align-items-center p-5">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don’t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
      <div style={{ display: "block", width: "100vw", textAlign: "center" }}>
        <div className="mt-4" style={{ display: "block" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="p-2 fs-5 mb-5 btn btn-primary signup-btn display-inline-block"
              style={{ width: "18%", backgroundColor: "#387ed1" }}
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
