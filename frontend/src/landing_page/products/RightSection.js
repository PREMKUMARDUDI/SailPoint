import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div
      className="container"
      style={{
        marginBlock: "100px",
      }}
    >
      <div className="row ">
        <div
          class="col-5 d-flex justify-content-center align-items-center"
          style={{
            paddingRight: "150px",
            paddingLeft: "10px",
          }}
        >
          <div className="row">
            <h2
              style={{
                paddingBottom: "15px",
                color: "#424242",
              }}
            >
              {productName}
            </h2>
            <p
              style={{
                lineHeight: "2",
                color: "#424242",
                lineHeight: "1.8",
              }}
            >
              {productDescription}
            </p>
            <div className="row">
              <div className="col">
                <a
                  href={learnMore}
                  style={{
                    textDecoration: "none",
                    color: "#387ed1",
                    fontWeight: "500",
                  }}
                >
                  Learn more &nbsp;
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 text-center align-items-start">
          <img
            src={imageURL}
            style={{
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
