import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div
      className="container"
      style={{
        marginBlock: "80px",
      }}
    >
      <div className="row mx-3">
        <div class="col-7 pl-5">
          <img src={imageURL} />
        </div>
        <div
          class="col-5 pt-5"
          style={{
            paddingInlineStart: "110px",
            paddingInlineEnd: "10px",
          }}
        >
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
            }}
          >
            {productDescription}
          </p>
          <div className="row">
            <div className="col-5">
              <a
                href={tryDemo}
                style={{
                  textDecoration: "none",
                  color: "#387ed1",
                  fontWeight: "500",
                }}
              >
                Try demo &nbsp;
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-7">
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
          <div className="row pt-4">
            <div className="col">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="googlePlay"
                  style={{ height: "45px" }}
                />
              </a>
            </div>
            <div className="col">
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="appStore"
                  style={{ height: "45px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
