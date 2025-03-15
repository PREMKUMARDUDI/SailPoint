import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "rgb(56, 126, 209)",
        color: "white",
        paddingInline: "70px",
      }}
    >
      <div class="container">
        <div
          className="row"
          style={{
            paddingTop: "50px",
            paddingBottom: "40px",
          }}
        >
          <div className="col-8">
            <h5 style={{ fontSize: "20.4px" }}>Support Portal</h5>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <a
              href="#"
              style={{
                color: "white",
                textUnderlineOffset: "5px",
                paddingRight: "20px",
                fontSize: "17px",
              }}
            >
              Track tickets
            </a>
          </div>
        </div>

        <div
          className="row"
          style={{
            paddingBottom: "80px",
          }}
        >
          <div className="col-md-7 col-12">
            <div
              style={{
                minHeight: "64px",
                fontSize: "24px",
                fontWeight: "400",
                paddingRight: "55px",
                margin: "0px 0px 30px",
              }}
            >
              Search for an answer or browse help topics to create a ticket
            </div>
            <div
              style={{
                backgroundColor: "white",
                height: "58px",
                width: "97%",
                fontSize: "21px",
                fontWeight: "400",
                padding: "10px 20px 10px 0px",
                margin: "0px 0px 15px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "2px",
              }}
            >
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                style={{
                  width: "75%",
                  paddingLeft: "20px",
                  fontSize: "16px",
                  border: "none",
                  outline: "none",
                }}
              />
              <div>
                <span>
                  <img src="media/images/search.png" />
                </span>
              </div>
            </div>
            <div>
              <span style={{ marginBottom: "20px", display: "inline-block" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textUnderlineOffset: "9px",
                    marginRight: "20px",
                    fontWeight: "500",
                  }}
                >
                  Track account opening
                </a>
              </span>
              <span style={{ marginBottom: "20px", display: "inline-block" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textUnderlineOffset: "9px",
                    marginRight: "20px",
                    fontWeight: "500",
                  }}
                >
                  Track segment activation
                </a>
              </span>
              <span style={{ marginBottom: "20px", display: "inline-block" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textUnderlineOffset: "9px",
                    marginRight: "20px",
                    fontWeight: "500",
                  }}
                >
                  Intraday margins
                </a>
              </span>
              <br />
              <span style={{ marginBottom: "20px", display: "inline-block" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textUnderlineOffset: "9px",
                    marginRight: "20px",
                    fontWeight: "500",
                  }}
                >
                  Kite user manual
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div style={{ margin: "40px 0px 15px" }}>
              <h5
                style={{
                  fontSize: "21px",
                  fontWeight: "500",
                  marginBottom: "16px",
                }}
              >
                Featured
              </h5>
              <ol>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      display: "inline-block",
                      marginBottom: "20px",
                      fontSize: "17px",
                    }}
                  >
                    Rights Entitlements listing in February 2025
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      display: "inline-block",
                      marginBottom: "20px",
                      fontSize: "17px",
                    }}
                  >
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
