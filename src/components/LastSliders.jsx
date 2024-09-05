// Packages
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

function LastSliders() {
  let images = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80",
  ];
  
  return (
    <Swiper
      spaceBetween={1}
      centeredSlides={true}
      autoplay={false}  // Disable autoplay
      navigation={true}  // Enable navigation
      modules={[Navigation]}
      slidesPerView={1}
      style={{ borderRadius: "10px", width: "91%" }}
    >
      {/* Dynamically create SwiperSlide for each image */}
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "310px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LastSliders;
