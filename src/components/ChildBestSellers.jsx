// Packages
import React from 'react'

// Local imports
import "../App.css"

export default function ChildBestSellers(props) {
  let { price, subTitle, title, images } = props.data; // Correctly destructuring `data` prop
  return (
    <div id="bestSellersParent" style={{ borderRadius:"10px", padding:"10px", width:"fit-content", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",backgroundColor:"white"}}>
      {/* Image div */}
      <div id='imageDiv' style={{width:"fit-content", height:"fit-content", border:"1px solid lightgray", padding:"20px", borderRadius:"10px"}}>
        <img src={images[0]} style={{width:"191px", height:"191px", borderRadius:"5px"}} alt="image" />
      </div>
      {/* Subtitle */}
      <p style={{color:"#909090", fontSize:"14px", fontFamily:"Helvetica", marginTop:"20px", marginLeft:"7px"}}>{subTitle}</p>
      {/* Title */}
      <p style={{color:"#202020", fontSize:"17px", fontFamily:"Helvetica", fontWeight:"450", marginTop:"15px", marginLeft:"7px",whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis",width:"200px"}}>{title}</p>
      {/* Price */}
      <p style={{color:"#202020", fontSize:"17px", fontFamily:"Helvetica", fontWeight:"550", marginTop:"15px", marginBottom:"15px", marginLeft:"7px"}}>₹ {price}</p>
      {/* Add to cart button */}
      <button style={{width:"230px", height:"fit-content", border:"1px solid #CC0000", borderRadius:"5px", padding:"7px", backgroundColor:"white", color:"#CC0000", fontWeight:"550", marginLeft:"5px"}} id="addToCart">Add to Cart</button>
    </div>
  )
}
