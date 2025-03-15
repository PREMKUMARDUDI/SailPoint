import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-2">
      <div className="row text-center">
        <h1 className="mt-5 mb-3 fs-2 ">
          <b>404</b>
        </h1>
        <h1 className="mb-3 fs-2 ">Page Not Found</h1>
        <p className="mt-2 text-muted">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-4">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="p-2 fs-5 mb-5 btn btn-primary signup-btn"
              style={{
                width: "18%",
                backgroundColor: "#387ed1",
              }}
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
