import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero" className="mb-5" />
        <h1 className="mt-5 mb-3">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
