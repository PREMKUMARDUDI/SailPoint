import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5 mb-4 support-ticket">
      <h2
        style={{
          color: "#666666",
          fontSize: "21px",
          fontWeight: "400",
          paddingBottom: "10px",
        }}
      >
        To create a ticket, select a relevant topic
      </h2>

      <div className="row mb-1">
        <div className="col p-3">
          <h3>
            <a href="#">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              &nbsp; Account Opening
            </a>
          </h3>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <a href="#">Getting started</a>
            </li>
            <li>
              <a href="#">Online</a>
            </li>
            <li>
              <a href="#">Offline</a>
            </li>
            <li>
              <a href="#">Charges</a>
            </li>
            <li>
              <a href="#">Company, Partnership and HUF</a>
            </li>
            <li>
              <a href="#">Non Resident Indian (NRI)</a>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h3>
            <a href="#">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              &nbsp; Your SailPoint Account
            </a>
          </h3>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <a href="#">Login credentials</a>
            </li>
            <li>
              <a href="#">Your Profile</a>
            </li>
            <li>
              <a href="#">Account modification and segment addition</a>
            </li>
            <li>
              <a href="#">CMR & DP ID</a>
            </li>
            <li>
              <a href="#">Nomination</a>
            </li>
            <li>
              <a href="#">Transfer and conversion of shares</a>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h3>
            <a href="#">
              <i className="fa fa-signal" aria-hidden="true"></i>
              &nbsp; Trading and Markets
            </a>
          </h3>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <a href="#">Trading FAQs</a>
            </li>
            <li>
              <a href="#">Kite</a>
            </li>
            <li>
              <a href="#">Margins</a>
            </li>
            <li>
              <a href="#">Product and order types</a>
            </li>
            <li>
              <a href="#">Corporate actions</a>
            </li>
            <li>
              <a href="#">Kite features</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col p-3">
          <h3>
            <a href="#">
              <i className="fa fa-credit-card" aria-hidden="true"></i>
              &nbsp; Funds
            </a>
          </h3>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <a href="#">Fund withdrawal</a>
            </li>
            <li>
              <a href="#">Adding funds</a>
            </li>
            <li>
              <a href="#">Adding bank accounts</a>
            </li>
            <li>
              <a href="#">eMandates</a>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h3>
            <a href="#">
              <img
                src="media/images/search-circle.png"
                style={{ height: "18px" }}
              />
              &nbsp; Console
            </a>
          </h3>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <a href="#">IPO</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Funds statement</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Referral program</a>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h3>
            <a href="#">
              <img
                src="media/images/coin-rupee.png"
                style={{ height: "20px" }}
              />
              &nbsp; Coin
            </a>
          </h3>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>
              <a href="#">Understanding mutual funds and Coin</a>
            </li>
            <li>
              <a href="#">Coin app</a>
            </li>
            <li>
              <a href="#">Coin web</a>
            </li>
            <li>
              <a href="#">Transactions and reports</a>
            </li>
            <li>
              <a href="#">National Pension Scheme (NPS)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
