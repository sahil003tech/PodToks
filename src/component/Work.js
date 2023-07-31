import React from "react";
import "../css/Work.css";

const Work = () => {
  return (
    <div style={{ background: "white", width: "100%" }}>
      <div className="main-work">
        <div className="work">
          <h2>How It Works</h2>
          <div className="list-work">
            <div className="inside-work">
              <div>
                <img
                  src="https://zukaz.com/assets/img/explore.png"
                  alt=""
                  width={200}
                  height={200}
                  className="work-image"
                />
              </div>
              <div className="div-work">
                <h2
                  style={{
                    marginTop: "1em",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    textAlign: "left",
                  }}
                >
                  Explore
                </h2>
                <p className="work-p">
                  Open the Zukaz map and browse your surroundings for nearby
                  vouchers.
                </p>
              </div>
            </div>
            {/* second item */}
            <div className="inside-work">
              <div>
                <img
                  src="https://zukaz.com/assets/img/explore.png"
                  alt=""
                  width={200}
                  height={200}
                  className="work-image"
                />
              </div>
              <div className="div-work">
                <h2
                  style={{
                    marginTop: "1em",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    textAlign: "left",
                  }}
                >
                  Explore
                </h2>
                <p className="work-p">
                  Open the Zukaz map and browse your surroundings for nearby
                  vouchers.
                </p>
              </div>
            </div>
            {/* third item */}
            <div className="inside-work">
              <div>
                <img
                  src="https://zukaz.com/assets/img/explore.png"
                  alt=""
                  width={200}
                  height={200}
                  className="work-image"
                />
              </div>
              <div className="div-work">
                <h2
                  style={{
                    marginTop: "1em",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    textAlign: "left",
                  }}
                >
                  Explore
                </h2>
                <p className="work-p">
                  Open the Zukaz map and browse your surroundings for nearby
                  vouchers.
                </p>
              </div>
            </div>
            {/* fourth item */}
            <div className="inside-work">
              <div>
                <img
                  src="https://zukaz.com/assets/img/explore.png"
                  alt=""
                  width={200}
                  height={200}
                  className="work-image"
                />
              </div>
              <div className="div-work">
                <h2
                  style={{
                    marginTop: "1em",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    textAlign: "left",
                  }}
                >
                  Explore
                </h2>
                <p className="work-p">
                  Open the Zukaz map and browse your surroundings for nearby
                  vouchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
