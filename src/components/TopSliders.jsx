//Packages
import React, { useState,useRef,useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import axios from "axios"
import 'swiper/swiper-bundle.css'; 

// Local imports


//API_ROUTE
export const API_URL = `https://bigbasket-clone-backend.onrender.com`

function TopSliders() {
    // For storing the slider images
    let [sliders,setSliders] = useState([]);
   async function getSliderImages() {
       try {
        let data = await axios({
            method: "GET",
            url: `${API_URL}/home-page/top-sliders`
        })
        // setting the data in the state
        setSliders(data.data.data)
       } catch (err) {
        console.log(err)
       }
   }

   useEffect(() => {
     getSliderImages()  
   },[])

  return (
            <Swiper
                className="swiper-container"
                spaceBetween={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                //  loop={true} 
                 speed={2000}
                // navigation={false} 
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                style={{borderRadius:"10px", width:"91%",zIndex: -1}}
            >
                {/* Dynamically create SwiperSlide for each image */}
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={slider.image} 
                            alt={`slide-${index}`}
                            style={{ width: "100%", height: "310px" }} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
  );
}



export default TopSliders;
