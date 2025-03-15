import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div
        className="row text-center"
        style={{
          paddingTop: "80px",
          paddingBottom: "45px",
        }}
      >
        <div className="col">
          <h1
            style={{
              fontSize: "32px",
              paddingBottom: "15px",
              color: "#424242",
            }}
          >
            The SailPoint Universe
          </h1>
          <p
            className="text-muted"
            style={{ fontSize: "16px", color: "#424242" }}
          >
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row m-3 text-center">
        <div className="col px-5">
          <img
            src="media/images/logo.svg"
            style={{ width: "55%", marginBottom: "2px" }}
          />
          <h4 style={{ color: "#387ed1" }}>
            <b> Fund House</b>
          </h4>
          <p style={{ fontSize: "12px", fontWeight: "500", color: "#9b9b9b" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col px-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "85%", marginBottom: "35px" }}
          />
          <p style={{ fontSize: "12px", fontWeight: "500", color: "#9b9b9b" }}>
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col px-5">
          <img
            src="media/images/tijori.svg"
            style={{ width: "55%", marginBottom: "20px" }}
          />
          <p style={{ fontSize: "12px", fontWeight: "500", color: "#9b9b9b" }}>
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mt-5 px-5 text-center">
        <div
          className="col"
          style={{
            paddingRight: "80px",
          }}
        >
          <img
            src="media/images/streakLogo.png"
            style={{ width: "65%", marginBottom: "22px" }}
          />
          <p style={{ fontSize: "12px", fontWeight: "500", color: "#9b9b9b" }}>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div
          className="col"
          style={{
            paddingRight: "80px",
          }}
        >
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <p style={{ fontSize: "12px", fontWeight: "500", color: "#9b9b9b" }}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div
          className="col"
          style={{
            paddingLeft: "10px",
          }}
        >
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "50%", marginBottom: "20px" }}
          />
          <p style={{ fontSize: "12px", fontWeight: "500", color: "#9b9b9b" }}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
      </div>

      <div className="row text-center my-4">
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

export default Universe;
