import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-3">
        <div className="col-5 p-3">
          <h2 className="mb-5">Trust with confidence</h2>
          <h5>Customer-first always</h5>
          <p className="pb-4 text-muted">
            That's why 1.5+ crore customers trust SailPoint with 4.5+ lakh
            crores of equity investments and contribute to 15% of daily retail
            exchange volumes in India.
          </p>

          <h5>No spam or gimmicks</h5>
          <p className="pb-4 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h5>The SailPoint universe</h5>
          <p className="pb-4 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5>Do better with money</h5>
          <p className="pb-4 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7 p-3">
          <img
            src="media/images/ecosystem.png"
            alt="eco-system"
            style={{ width: "100%" }}
          />
          <div className="text-center p-3">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
