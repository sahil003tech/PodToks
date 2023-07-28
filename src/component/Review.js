import React from "react";
import "../css/Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Review = () => {
  return (
    <section className="review-container">
      <div className="review-slider">
        <h2 className="review-h2">Hear it From the Hunters</h2>
        <div className="review-div">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            //   navigation
            autoplay={true}
            //   pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div>
                {/* image */}
                <div className="review-image">
                  <img
                    src="https://zukaz.com/assets/img/Tyson_Campbell.png"
                    alt=""
                    width="100%"
                  />
                </div>
                {/* text */}
                <p className="review-p">
                  “From the thrill of racing people to get to the vouchers first
                  and the fitness benefits that come with it, to the real value
                  that can be collected whether you redeem these vouchers
                  yourself or sell them for cash in the marketplace.”
                </p>
                {/* review */}
                <div className="review-star">
                  <img
                    src="https://zukaz.com/assets/img/Group_65.png"
                    alt=""
                    width={110}
                    height={17}
                  />
                </div>
                {/* name */}
                <h4 className="review-inside-h4">- Tyson Campbell</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {/* image */}
                <div className="review-image">
                  <img
                    src="https://zukaz.com/assets/img/Tyson_Campbell.png"
                    alt=""
                    width="100%"
                  />
                </div>
                {/* text */}
                <p className="review-p">
                  “From the thrill of racing people to get to the vouchers first
                  and the fitness benefits that come with it, to the real value
                  that can be collected whether you redeem these vouchers
                  yourself or sell them for cash in the marketplace.”
                </p>
                {/* review */}
                <div className="review-star">
                  <img
                    src="https://zukaz.com/assets/img/Group_65.png"
                    alt=""
                    width={110}
                    height={17}
                  />
                </div>
                {/* name */}
                <h4 className="review-inside-h4">- Tyson Campbell</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {/* image */}
                <div className="review-image">
                  <img
                    src="https://zukaz.com/assets/img/Tyson_Campbell.png"
                    alt=""
                    width="100%"
                  />
                </div>
                {/* text */}
                <p className="review-p">
                  “From the thrill of racing people to get to the vouchers first
                  and the fitness benefits that come with it, to the real value
                  that can be collected whether you redeem these vouchers
                  yourself or sell them for cash in the marketplace.”
                </p>
                {/* review */}
                <div className="review-star">
                  <img
                    src="https://zukaz.com/assets/img/Group_65.png"
                    alt=""
                    width={110}
                    height={17}
                  />
                </div>
                {/* name */}
                <h4 className="review-inside-h4">- Tyson Campbell</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
