import React from "react";

function Footer() {
  return (
    <div className="container footer border-top" style={{ paddingTop: "36px" }}>
      <div className="row g-5 mb-5">
        <div className="col-12 col-md-3 text-muted">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "65%" }}
            className="mb-2"
          />
          <p className="fs-6 text-muted">
            <small>
              &copy; 2015 - 2025, SailPoint Broking Ltd. <br /> All rights
              reserved.
            </small>
          </p>
          <div className="row pb-3 border-bottom">
            <div className="col">
              <a href="#">
                <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i
                  className="fa fa-facebook-official fa-lg"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row py-3">
            <div className="col">
              <a href="#">
                <i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <i className="fa fa-telegram fa-lg" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <h5 className="mb-3">Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Referral programme</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">SailPoint.tech</a>
            </li>
            <li>
              <a href="#">Open Source</a>
            </li>
            <li>
              <a href="#">Press & media</a>
            </li>
            <li>
              <a href="#">SailPoint Cares(CSR)</a>
            </li>{" "}
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h5 className="mb-3">Support</h5>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Support portal</a>
            </li>
            <li>
              <a href="#">SP-connect blog</a>
            </li>
            <li>
              <a href="#">List of charges</a>
            </li>
            <li>
              <a href="#">Downloads & resources</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Market overview</a>
            </li>
            <li>
              <a href="#">How to file a complaint?</a>
            </li>
            <li>
              <a href="#">Status of your complaints</a>
            </li>{" "}
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h5 className="mb-3">Account</h5>
          <ul>
            <li>
              <a href="#">Open an account</a>
            </li>
            <li>
              <a href="#">Fund transfer</a>
            </li>{" "}
          </ul>
        </div>
      </div>

      <div
        className="row"
        style={{
          color: "9b9b9b",
          fontSize: "11px",
          fontWeight: "500",
          color: "9b9b9b",
          wordSpacing: "1.5px",
          lineHeight: "18px",
          opacity: "0.5",
        }}
      >
        <p>
          SailPoint Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through SailPoint
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through SailPoint Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: SailPoint Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to{" "}
          <a href="#">complaints@SailPoint.com</a>, for DP related to{" "}
          <a href="#">dp@SailPoint.com</a>. Please ensure you carefully read the
          Risk Disclosure Document as prescribed by SEBI | ICF.
        </p>
        <p>
          Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register
          on SCORES portal. Mandatory details for filing complaints on SCORES:
          Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances.
        </p>
        <p className="d-flex text-nowrap">
          <a
            href="https://smartodr.in/"
            target="_blank"
            style={{
              fontSize: "11px",
              fontWeight: "500",
              textDecoration: "none",
              marginRight: "4px",
            }}
          >
            Smart Online Dispute Resolution
          </a>
          <span>|</span>
          <a
            href="https://SailPoint-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
            target="_blank"
            style={{
              fontSize: "11px",
              fontWeight: "500",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            Grievances Redressal Mechanism
          </a>
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1{")"} Stock brokers can accept securities as
          margins from clients only by way of pledge in the depository system
          w.e.f September 01, 2020. 2{")"} Update your e-mail and phone number
          with your stock broker / depository participant and receive OTP
          directly from depository on your e-mail and/or mobile number to create
          pledge. 3{")"}
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of SailPoint and offering such services, please{" "}
          <a href="#">create a ticket here.</a>
        </p>
      </div>

      <div className="row mb-5 mx-5 pl-5 text-muted">
        <ul>
          <li>
            <a href="#">NSE</a>
          </li>
          <li>
            <a href="#">BSE</a>
          </li>
          <li>
            <a href="#">MCX</a>
          </li>
          <li>
            <a href="#">Terms & conditions</a>
          </li>
          <li>
            <a href="#">Policies & procedures</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Disclosure</a>
          </li>
          <li>
            <a href="#">For investor's attention</a>
          </li>
          <li>
            <a href="#">Investor charter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
