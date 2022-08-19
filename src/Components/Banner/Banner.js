import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data)
      console.log(response.data.results[0])
      var randomAnswer = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      setMovie(randomAnswer)
      // console.log(movie.title)
    })
  }, [])
  

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}} className='banner'>
        <div className="content">
          <div>
          <h1 style={{paddingBottom:'30px'}} className="title">{movie ? movie.title : ""}</h1>
            <div style={{display:'flex', justifyContent:'center'}} className="banner-buttons">
                <button style={{display:'flex', alignItems:'center'}} className="button">
                <FaPlay/>
                <span style={{paddingLeft:'5px'}}>Play</span></button>
                <button style={{display:'flex', alignItems:'center'}} className="button2">
                <GrCircleInformation/>
                <span style={{paddingLeft:'5px'}}>More Info</span>
                </button>
            </div>
            {/* <h1 className="description">{movie ? movie.overview: ""}</h1> */}
          </div>
        </div>
        <div className="fade">
            
        </div>
    </div>
  )
}

export default Banner