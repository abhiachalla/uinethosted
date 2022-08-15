
   
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from 'react'
import "./featured.scss"
import { useState,useEffect } from "react";



const Anonfeatured = ({list})=> {






    // const [ranmov2,setRanMovie] = useState(null);
    // useEffect(()=>{
    //     const setMovie = async()=> {
    //         try {
    //             const options = {
    //                 method: 'GET',
    //                 headers: {
    //                 'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    //                 'X-RapidAPI-Key': '47ffa63576msh4bb35592f73ecc1p137d0ajsna21fa7d7526b'
    //                 }
    //                 };
                    
    //                 fetch('https://movies-app1.p.rapidapi.com/api/movies', options)
    //                 .then(response => response.json())
    //                 .then(response => {
    //                     console.log(response.results)
    //                     setRanMovie(response.results[0])
    //                 });
            
    //         } catch(err){console.log(err)}
    //     }
    // })


 
  
    
    return(
        <div className='featured'>
  
            <img
        src={list[0].Poster}
        alt=""
      />

<div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
            {list[0].title}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>

        </div>
    );
}

export default Anonfeatured;
