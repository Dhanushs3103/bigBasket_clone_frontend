//packages

import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { FaPinterestP } from "react-icons/fa";

//local imports
import "../App.css"

export default function Footer() {
  return (
    <>
     <div style={{border:"1px solid black",width:"100%",height:"fit-content",padding:"25px",backgroundColor:"#101010",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      {/* first row */}
       <div style={{width:"fit-content"}} >
        <p  style={{fontSize:"14px",fontWeight:"600",marginTop:"12px",color:"#FFFFFF"}}>Bigbasket</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>About Us</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Become A bigbasket Rider</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>In News</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Green bigbasket</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Privacy Policy</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Terms and Conditions</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Careers At bigbasket</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>bb Instant</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>bb Daily</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>bb Blog</p>
        <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>bb now</p>
       </div>
      {/* Second row */}
      <div style={{width:"fit-content",marginBottom:"200px"}}>
         <p style={{fontSize:"14px",fontWeight:"600",marginTop:"12px",color:"#FFFFFF"}}>Help</p>
         <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>FAQs</p>
         <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Contact Us</p>
         <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>bb Wallet FAQs</p>
         <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>bb Wallet T&Cs</p>
         <p className='footerP' style={{fontSize:"14px",fontWeight:"400",marginTop:"12px",color:"#FFFFFF"}}>Vendor Connect</p>
      </div>
      {/* logos */}
      <div style={{width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px",marginBottom:"200px"}}>
        <img src="https://i.ibb.co/W6d9kLN/Screenshot-2024-09-05-221300.png" alt="logo" style={{width:"168px",height:"61px"}} />
        <div style={{display:"flex",gap:"35px"}}>
            <img src="https://i.ibb.co/txXmX5t/Screenshot-2024-09-05-221331.png" alt="playstore"  style={{width:"101px",height:"30px"}} />
            <img src="https://i.ibb.co/BLbYsXr/Screenshot-2024-09-05-221344.png" alt="appStore" style={{width:"101px",height:"30px"}}  />
        </div>
        <div style={{display:"flex",gap:"35px",marginTop:"10px"}} >
            <FaFacebookF color='white' fontSize={"22"} cursor={"pointer"} />
            <FaInstagram color='white' fontSize={"25"} cursor={"pointer"}/>
            <RxTwitterLogo color='white'fontSize={"25"} cursor={"pointer"} />
            <FaPinterestP color='white'fontSize={"22"} cursor={"pointer"}/>
        </div>
      </div>
    </div>
    {/* Bottom footer */}
    <div style={{border:"1px solid black",width:"100%",height:"fit-content",padding:"15px",backgroundColor:"#000000",display:"flex",justifyContent:"left",alignItems:"center"}}>
        <p style={{fontSize:"14px",fontWeight:"600",marginTop:"12px",marginLeft:"150px",color:"#FFFFFF"}}>Copyright © 2023-2025 Supermarket Grocery Supplies Pvt Ltd</p>
    </div>
    </>
   
  )
}

