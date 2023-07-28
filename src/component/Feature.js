import React from "react";
import "../css/Feature.css";
import Animated from "./Animated";

const Feature = () => {
  const logos = [
    "https://zukaz.com/assets/img/logo4.png",
    "https://zukaz.com/assets/img/logo5.png",
    "https://zukaz.com/assets/img/logo7.png",
    "https://zukaz.com/assets/img/logo4.png",
    "https://zukaz.com/assets/img/logo5.png",
    "https://zukaz.com/assets/img/logo7.png",
    "https://zukaz.com/assets/img/logo5.png",
    // Add more logo URLs as needed
  ];
  return (
    <div className="section">
      {/* feature section */}
      <section>
        <div className="container">
          <p>Featured in:</p>
          <div className="row-logo">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Animated logos={logos} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
