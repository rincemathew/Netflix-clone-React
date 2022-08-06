import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

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
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview: ""}</h1>
        </div>
        <div className="fade">
            
        </div>
    </div>
  )
}

export default Banner