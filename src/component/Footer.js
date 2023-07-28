import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inside">
        <div className="footer-first">
          <div className="footer-info">
            <div className="footer-info-logo">
              <img
                src="https://zukaz.com/assets/img/Group_75.png"
                alt=""
                width={120}
                height={34}
              />
            </div>
            <div className="footer-info-detail">
              <div className="info-detail-first">
                <div style={{ fontWeight: "500", marginBottom: "20px" }}>
                  About
                </div>
                <div className="info-detail-div">Company</div>
                <div className="info-detail-div">Press Kit</div>
                <div className="info-detail-div">Legal</div>
              </div>
              {/* second */}
              <div className="info-detail-first">
                <div style={{ fontWeight: "500", marginBottom: "20px" }}>
                  About
                </div>
                <div className="info-detail-div">Company</div>
                <div className="info-detail-div">Press Kit</div>
                <div className="info-detail-div">Legal</div>
              </div>
              {/* third */}
              <div className="info-detail-first">
                <div style={{ fontWeight: "500", marginBottom: "20px" }}>
                  About
                </div>
                <div className="info-detail-div">Company</div>
                <div className="info-detail-div">Press Kit</div>
                <div className="info-detail-div">Legal</div>
              </div>
              {/* four */}
              <div className="info-detail-first">
                <div style={{ fontWeight: "500", marginBottom: "20px" }}>
                  About
                </div>
                <div className="info-detail-div">Company</div>
                <div className="info-detail-div">Press Kit</div>
                <div className="info-detail-div">Legal</div>
              </div>
            </div>
            <div className="footer-info-form">
              <strong>Stay in the loop of our big deals,</strong>
              spical events, key develpoment and all things Podtoks
            </div>
          </div>
        </div>
        {/* second part of footer    */}
        <div className="footer-second">
          <div style={{ width: "50%" }}></div>
          <div className="footer-second-form">
            <form action="">
              <div className="form-part-one">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-form-name"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-form-name input-form-second"
                />
              </div>
              <div className="form-part-one">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-email"
                />
                <button className="form-button">submit</button>
                <div className="form-two-div">
                  <label className="lb-checked">
                    <input
                      type="checkbox"
                      style={{
                        position: "absolute",
                        opacity: "0",
                        cursor: "pointer",
                        height: "0",
                        width: "0",
                      }}
                    />
                    <span className="form-two-span">
                      I agree to receive Marketing emails form Zukaz
                    </span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
