import React from "react";

function Team() {
  return (
    <div
      className="container align-item-top justify-content-center about-team"
      style={{
        marginBottom: "100px",
      }}
    >
      <div className="row">
        <h2 className="text-center text-muted" style={{ color: "#424242" }}>
          People
        </h2>
      </div>
      <div
        className="row"
        style={{
          paddingTop: "20px",
          marginInline: "48px",
          marginTop: "48px",
          marginBottom: "140px",
          lineHeight: "28px",
          fontSize: "17px",
        }}
      >
        <div className="col-lg-5 col-12 text-center">
          <img
            src="media/images/Profile.PKD.png"
            alt="PKD"
            style={{
              height: "295px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Prem Kumar Dudi</h5>
          <p style={{ color: "#424242" }}>Founder, CEO</p>
        </div>
        <div className="col-lg-6 col-12 pt-3">
          <p>
            Prem bootstrapped and founded SailPoint in 2015 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            SailPoint has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
      {/* <div className="row m-5">
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Nikhil.jpg"
            alt="Nikhil"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Nikhil Kamath</h5>
          <p style={{ color: "#424242" }}>Co-founder, CFO</p>
          <label
            for="checkbox-1"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-1"
              className="checkbox-1"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                Nikhil is an astute and experienced investor, and he heads
                financial planning at SailPoint. An avid reader, he always
                appreciates a good game of chess.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Kailash.jpg"
            alt="Kailash"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Dr. Kailash Nadh</h5>
          <p style={{ color: "#424242" }}>CTO</p>
          <label
            for="checkbox-2"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-2"
              className="checkbox-2"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Venu.jpg"
            alt="Venu"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Venu Madhav</h5>
          <p style={{ color: "#424242" }}> COO</p>
          <label
            for="checkbox-3"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-3"
              className="checkbox-3"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                Venu is the backbone of SailPoint taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of SailPoint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Hanan.jpg"
            alt="Hanan"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Hanan Delvi</h5>
          <p style={{ color: "#424242" }}>CCO</p>
          <label
            for="checkbox-4"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-4"
              className="checkbox-4"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                We take pride in the way we support our clients, and Hanan is
                responsible for this with his never ending flow of energy. He is
                the man behind many of our support initiatives that have helped
                us stay ahead of the game. A free thinker, Hanan can be seen
                posing as one in his free time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Seema.jpg"
            alt="Seema"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Seema Patil</h5>
          <p style={{ color: "#424242" }}>Director</p>
          <label
            for="checkbox-5"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-5"
              className="checkbox-5"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                Seema who has lead the quality team since the beginning of
                SailPoint, is now a director. She is an extremely disciplined
                fitness enthusiast.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Karthik.jpg"
            alt="Karthik"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Karthik Rangappa</h5>
          <p style={{ color: "#424242" }}>Chief of Education</p>
          <label
            for="checkbox-6"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-6"
              className="checkbox-6"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                Karthik "Guru" Rangappa single handledly wrote Varsity,
                SailPoint's massive educational program. He heads investor
                education initiatives at SailPoint and loves stock markets,
                classNameic rock, single malts, and photography.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-lg-4 col-12 text-center">
          <img
            src="media/images/Austin.jpg"
            alt="Austin"
            style={{
              height: "236px",
              marginBottom: "10px",
              borderRadius: "100%",
            }}
          />
          <h5>Austin Prakesh</h5>
          <p style={{ color: "#424242" }}>Director, Strategy</p>
          <label
            for="checkbox-7"
            style={{
              position: "relative",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-7"
              className="checkbox-7"
              style={{
                opacity: "0",
                position: "absolute",
              }}
            />
            <div className="bio">
              Bio <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </label>
          <div className="row">
            <div className="col px-5 pt-4">
              <p>
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organisations
                including grow by optimizing revenue streams and creating growth
                strategies. He is a boxing enthusiast and loves collecting
                exquisite watches.
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div> */}
    </div>
  );
}

export default Team;
