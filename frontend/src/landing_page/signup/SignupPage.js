import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left", autoClose: 5000 });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right", autoClose: 5000 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Signup error:", error.response || error.message);
      handleError("An error occurred during signup");
    }
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="form_parent d-flex flex-column justify-content-center align-items-center p-5">
      <div className="form_container">
        <h2>Signup Account</h2>
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
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
            Already have an account? <Link to="/login">Login</Link>
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

export default Signup;
