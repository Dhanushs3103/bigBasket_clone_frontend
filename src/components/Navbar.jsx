//packages
import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input, Text } from "@chakra-ui/react";
import { FaCompass } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Menu,MenuButton,MenuList,MenuItem } from "@chakra-ui/react";
import { useState } from "react";

//local imports
import "../App.css";
export default function Navbar() {
  return (
    <div style={{width:"100%",boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px"}}>
      {/* Navbar top */}
      <div id="Navbar-top">
        <img
          src="https://i.ibb.co/9pPfyxQ/Screenshot-2024-09-05-031836.png"
          alt="logo"
          style={{ width: "135px", height: "43px" }}
        />
        {/* search bar */}
        <div id="search-bar">
          <FiSearch id="searchIcon" />
          <Input placeholder="Search for the products..." id="searchInput" />
        </div>
        {/* location icon */}
        <div id="location-icon">
          <FaCompass />
          <Text id="text">Select Location</Text>
        </div>
        {/* cart icon */}
        <div id="cart-icon">
          <FaBasketShopping id="cartIcon" />
        </div>
      </div>
      {/* Navbar bottom */}
      <div id="Navbar-bottom">
       <Text style={{fontWeight:379, fontSize:"15px", width:'fit-content'}} className="navBotText">Exotic fruits & veggies</Text>
       <Text style={{fontWeight:379, fontSize:"15px", width:'fit-content'}} className="navBotText">Tea</Text>
       <Text style={{fontWeight:379, fontSize:"15px", width:'fit-content'}} className="navBotText">Ghee</Text>
       <Text style={{fontWeight:379, fontSize:"15px", width:'fit-content'}} className="navBotText">Nandini</Text>
       <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
       <Text style={{fontWeight:379, fontSize:"15px", width:'fit-content', paddingRight:'30px'}} className="navBotText">Fresh Vegetable</Text>
       {/* menu icon */}
       <Menu>
          <MenuButton>
            <FaAngleDoubleRight  color="#D63333" />
          </MenuButton>
         <MenuList style={{ zIndex: 9999, position: "absolute" }}>
           <MenuItem className="navBotText">Milk</MenuItem>
           <MenuItem className="navBotText">Yogurt & Shirkhand</MenuItem>
           <MenuItem className="navBotText">Chocolates</MenuItem>
           <MenuItem className="navBotText">Cup Noodles</MenuItem>
           <MenuItem className="navBotText">Hair care</MenuItem>
           <MenuItem className="navBotText">Fresh Chicken</MenuItem>
           <MenuItem className="navBotText">eggs</MenuItem>
           <MenuItem className="navBotText">Honey</MenuItem>
        </MenuList>
       </Menu>
       </div>
       <img src="https://www.bigbasket.com/media/uploads/banner_images/Smart_basket-250124-1.png" alt="smartBaskets" />
       <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png" alt="offers" />
      </div>
    </div>
  );
}
