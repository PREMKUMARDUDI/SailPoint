import React from "react";

function Hero() {
  return (
    <div className="container" style={{ paddingBottom: "50px" }}>
      <div
        className="row text-center"
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
            Charges
          </h1>
          <p
            className="text-muted"
            style={{ fontSize: "22px", color: "#9B9B9B" }}
          >
            List of all charges and taxes
          </p>
        </div>
      </div>

      <div className="row" style={{ paddingTop: "50px" }}>
        <div className="col p-4 text-center">
          <img
            src="media/images/pricingMF.svg"
            style={{
              width: "250px",
              fontSize: "28px",
              color: "#424242",
              marginBottom: "15px",
            }}
          />
          <h2
            style={{ color: "#424242", marginBottom: "20px", fontSize: "28px" }}
          >
            Free equity delivery
          </h2>
          <p
            style={{
              color: "#666666",
              margin: "16px 0px 15px",
              lineHeight: "1.8",
              wordSpacing: "1.9px",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-4 text-center">
          <img
            src="media/images/intradayTrades.svg"
            style={{
              width: "250px",
              fontSize: "28px",
              color: "#424242",
              marginBottom: "15px",
            }}
          />
          <h2
            style={{ color: "#424242", marginBottom: "20px", fontSize: "28px" }}
          >
            Intraday and F&O trades
          </h2>
          <p
            style={{
              color: "#666666",
              margin: "16px 0px 15px",
              lineHeight: "1.8",
              wordSpacing: "1.9px",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-4 text-center">
          <img
            src="media/images/pricingMF.svg"
            style={{
              width: "250px",
              fontSize: "28px",
              color: "#424242",
              marginBottom: "15px",
            }}
          />
          <h2
            style={{ color: "#424242", marginBottom: "20px", fontSize: "28px" }}
          >
            Free direct MF
          </h2>
          <p
            style={{
              color: "#666666",
              margin: "16px 0px 15px",
              lineHeight: "1.8",
              wordSpacing: "1.9px",
            }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
