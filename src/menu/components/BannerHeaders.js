import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCreative } from "swiper/modules";

const BannerDashboard = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const images = [
    `${baseUrl}/img/Banner2.jpg`,
    `${baseUrl}/img/Banner1.jpg`,
  ];

  return (
    <section className="banner-dashboard bg-white">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className={`slide-${index + 1}`}>
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="container p-0"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerDashboard;
