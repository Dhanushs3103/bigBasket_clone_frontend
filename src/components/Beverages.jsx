//packages
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

//local imports
import { API_URL } from './TopSliders';

export default function Beverages() {
    let [allOffers,setAllOffers] = useState([]);

    //function to get the data
    async function getOffers(){
        try {
            let offers = await axios({
                method:"GET",
                url:`${API_URL}/home-page/beverages`
            })
            setAllOffers(offers.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getOffers()
    },[])
  return (
    <div className='all-Offers' style={{width:"90%",margin:"auto",marginTop:"5px",padding:"10px",borderRadius:"10px"}}>
        <p style={{ color: "#202020", fontSize: "21px", fontWeight: "700",fontFamily:"Helvetica",width:"fit-content"}}>Beverages</p>
        {/* Images */}
        <div style={{display:"flex",justifyContent:"center",gap:"25px",width:"100%",margin:"auto",padding:"20px"}}>
            {
                allOffers.map((offer,index)=>{
                    return (
                        <img key={index} src={offer.image} alt={index} style={{width:"160px",height:"156px",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 2px",cursor:"pointer"}}/>
                    )
                })
            }
        </div>
    </div>
  )
}
