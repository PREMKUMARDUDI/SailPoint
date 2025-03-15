import React from "react";

function Brokerage() {
  return (
    <div
      className="container text-center border-top"
      style={{ paddingBottom: "50px" }}
    >
      <div className="row" style={{ paddingTop: "40px" }}>
        <div className="col-8 p-4 text-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5" style={{ paddingRight: "200px" }}>
              Brokerage calculator
            </h3>
          </a>
          <ul
            className="text-muted"
            style={{ textAlign: "left", marginTop: "30px", fontSize: "12px" }}
          >
            <li>
              <p>
                {" "}
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </p>
            </li>
            <li>
              <p>Digital contract notes will be sent via e-mail.</p>
            </li>

            <li>
              <p>
                Physical copies of contract notes, if required, shall be charged
                *20 per contract note. Courier charges apply.
              </p>
            </li>
            <li>
              <p>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                If the account is in debit balance, any order placed will be
                charged 240 per executed ord instead of 20 per executed order.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4 text-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5" style={{ paddingRight: "120px" }}>
              List of charges
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
