import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-2">
      <div className="row text-center">
        <h1 className="mt-5 mb-3 fs-2 ">Open a SailPoint account</h1>
        <p className="mt-2 text-muted">
          Excellent platforms and apps, ₹0 investments, and flat ₹20 intraday
          and F&O trades.
        </p>
        <button
          className="p-2 mt-4 fs-5 mb-5 btn btn-primary signup-btn"
          style={{ width: "18%", margin: "0 auto", backgroundColor: "#387ed1" }}
        >
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            Sign up for free
          </Link>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
