import React from "react";

function Education() {
  return (
    <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6">
          <h2 className="mb-3 fs-2">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            13 covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }} className="mb-5">
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
