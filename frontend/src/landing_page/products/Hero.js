import React from "react";

function Hero() {
  return (
    <div className="container">
      <div
        className="row text-center border-bottom"
        style={{
          paddingBlock: "100px",
        }}
      >
        <div className="col">
          <h1
            style={{
              fontSize: "44px",
              paddingBottom: "10px",
              color: "#424242",
            }}
          >
            SailPoint Products
          </h1>
          <p
            className="text-muted"
            style={{ fontSize: "22px", color: "#9B9B9B" }}
          >
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            Check out our{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
