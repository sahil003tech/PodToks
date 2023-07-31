import React from "react";
import "../css/Usage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Usage = () => {
  return (
    <section className="usage-main">
      <div className="usage-inside">
        <h2>Why You Will Love it!</h2>
        <img
          src="https://zukaz.com/assets/img/Path_205.png"
          alt=""
          width={67}
          height={3}
        />
        <div className="list-usage-section">
          {/* list-section */}
          <ul>
            <li className="hash-item">
              <a href="" style={{ textDecoration: "none", cursor: "pointer" }}>
                <h4>
                  <img
                    src="https://zukaz.com/assets/img/Group_5098.png"
                    alt=""
                    width={15}
                    height={18}
                  />
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "black",
                      fontFamily: "Poppins",
                      paddingLeft: "10px",
                    }}
                  >
                    Family Friendly
                  </span>
                </h4>
                <p className="hash-p">
                  A safe and active experience for all ages
                </p>
              </a>
            </li>
            {/* item-2 */}
            <li className="hash-item">
              <a href="" style={{ textDecoration: "none", cursor: "pointer" }}>
                <h4>
                  <img
                    src="https://zukaz.com/assets/img/Group_5098.png"
                    alt=""
                    width={15}
                    height={18}
                  />
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "black",
                      fontFamily: "Poppins",
                      paddingLeft: "10px",
                    }}
                  >
                    Family Friendly
                  </span>
                </h4>
                <p className="hash-p">
                  A safe and active experience for all ages
                </p>
              </a>
            </li>
            {/* item 3 */}
            <li className="hash-item">
              <a href="" style={{ textDecoration: "none", cursor: "pointer" }}>
                <h4>
                  <img
                    src="https://zukaz.com/assets/img/Group_5098.png"
                    alt=""
                    width={15}
                    height={18}
                  />
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "black",
                      fontFamily: "Poppins",
                      paddingLeft: "10px",
                    }}
                  >
                    Family Friendly
                  </span>
                </h4>
                <p className="hash-p">
                  A safe and active experience for all ages
                </p>
              </a>
            </li>
            {/* item 4 */}
            <li className="hash-item">
              <a href="" style={{ textDecoration: "none", cursor: "pointer" }}>
                <h4>
                  <img
                    src="https://zukaz.com/assets/img/Group_5098.png"
                    alt=""
                    width={15}
                    height={18}
                  />
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "black",
                      fontFamily: "Poppins",
                      paddingLeft: "10px",
                    }}
                  >
                    Family Friendly
                  </span>
                </h4>
                <p className="hash-p">
                  A safe and active experience for all ages
                </p>
              </a>
            </li>
            {/* item 5 */}
            <li className="hash-item">
              <a href="" style={{ textDecoration: "none", cursor: "pointer" }}>
                <h4>
                  <img
                    src="https://zukaz.com/assets/img/Group_5098.png"
                    alt=""
                    width={15}
                    height={18}
                  />
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "black",
                      fontFamily: "Poppins",
                      paddingLeft: "10px",
                    }}
                  >
                    Family Friendly
                  </span>
                </h4>
                <p className="hash-p">
                  A safe and active experience for all ages
                </p>
              </a>
            </li>
          </ul>
          {/* image */}
          <div style={{ marginTop: "3em" }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              //   navigation
              autoplay={true}
              //   pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img
                  src="https://zukaz.com/assets/img/love-image4.jpg"
                  alt=""
                  width="100%"
                  height={483}
                  style={{ borderRadius: "2em" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://zukaz.com/assets/img/love-image5.jpg"
                  alt=""
                  width="100%"
                  height={483}
                  style={{ borderRadius: "2em" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://zukaz.com/assets/img/love-image6.jpg"
                  alt=""
                  width="100%"
                  height={483}
                  style={{ borderRadius: "2em" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://zukaz.com/assets/img/love-image1.jpg"
                  alt=""
                  width="100%"
                  height={483}
                  style={{ borderRadius: "2em" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
