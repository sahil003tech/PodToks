import React from "react";
import "../css/What.css";

const What = () => {
  return (
    <div className="what-container">
      <div className="inside-what">
        <div className="inside-div">
          {/* what-left */}
          <div className="what-left">
            <h2>What is Zukaz?</h2>
            <p>
              Zukaz is a free, location-based augmented reality app, that allows
              merchants to drop real cash vouchers right into your path.
            </p>
            <p>
              The vouchers can be redeemed in-store or traded on the Zukaz
              trading exchange.
            </p>
          </div>
          {/* what-right */}
          <div className="what-right">
            <img
              src="https://zukaz.com/assets/img/phone2.png"
              alt=""
              width="100%"
              height={436}
              className="what-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
