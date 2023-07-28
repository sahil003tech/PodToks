import React from "react";
import "../css/Image.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Imagesection = () => {
  const [typeEffect] = useTypewriter({
    words: ["Parmas", "smoothies", "tickets", "beers", "shoes", "clothes"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      <div className="image-detail">
        <img
          src="https://zukaz.com/assets/img/zukaz_hero_orange.png"
          alt="image"
          width={100}
          height={697}
          style={{
            position: "relative",
            width: "100%",
            top: "-200px",
            left: "0em",
          }}
        />
      </div>

      <div className="header-banner">
        <div className="banner-left">
          <h1>
            Hunt Real <br /> Cash Vouchers
          </h1>
          <span>
            And Redden For:
            <strong style={{ marginLeft: "10px" }}>{typeEffect}</strong>
          </span>
        </div>

        <div className="banner-right">
          <div className="phone-hand">
            <img
              src="https://zukaz.com/assets/img/hand.png"
              alt="podtoks"
              title="podtoks"
              style={{
                width: "100%",
                position: "relative",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagesection;
