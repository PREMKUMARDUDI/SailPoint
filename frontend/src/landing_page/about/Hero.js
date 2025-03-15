import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container about-hero">
      <div
        className="row text-center border-bottom"
        style={{
          paddingBlock: "100px",
        }}
      >
        <div className="col">
          <h2 style={{ lineHeight: "1.5" }}>
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>
      <div
        className="row"
        style={{
          paddingTop: "100px",
          paddingInline: "120px",
          marginBottom: "80px",
          lineHeight: "1.7",
          fontSize: "17px",
        }}
      >
        <div className="col-md-6 col-12">
          <p>
            We kick-started operations on the 15th of August, 2015 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            SailPoint, a combination of "Stock-Sail" and "Point".
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us one of the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-md-6 col-12">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link to="#">Rainmatter</Link>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <Link to="#">blog</Link> or see what the
            media is <Link to="#">saying about us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
