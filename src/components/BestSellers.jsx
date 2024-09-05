//package
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import Navigation and Pagination modules

//local imports
import { API_URL } from "./TopSliders";
import ChildBestSellers from "./ChildBestSellers";
import { div } from "framer-motion/client";

export default function BestSellers() {
  let [bestSellers, setBestSellers] = useState([]);

  // Function to get the data
  async function getBestSellers() {
    try {
      let bSellers = await axios({
        method: "GET",
        url: `${API_URL}/home-page/best-sellers`,
      });
      setBestSellers(bSellers.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBestSellers();
  }, []);

  return (
    <div style={{width:"90%",margin:"auto",marginTop:"50px",backgroundColor:"#F7F7F7"}}>
      {/* heading */}
      <p style={{ color: "#202020", fontSize: "21px", fontWeight: "700",fontFamily:"Helvetica", marginTop: "20px",paddingTop:"25px",marginLeft: "50px" ,width:"fit-content"}}>Best Sellers</p>
      <div style={{ width: "100%", margin: "auto", padding: "10px", borderRadius: "10px" }}>
      <Swiper
        slidesPerView={4} 
        spaceBetween={10} 
        navigation={true}   
        modules={[Navigation, Pagination]} 
        style={{ width: "100%", display: "flex", justifyContent: "center",padding:"10px" }}
      >
        {/* Dynamically create SwiperSlide for each image */}
        {bestSellers.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ChildBestSellers data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </div>
  );
}
