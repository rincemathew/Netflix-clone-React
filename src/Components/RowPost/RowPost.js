import React from 'react'
import { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'

function RowPost() {
  const [nOriginals, setNOriginals] = useState([])
  useEffect(() => {


    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`).then((response) =>{
      console.log(response.data)
      setNOriginals(response.data.results)
    })
  }, [])
  
  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className='posters'>
        {nOriginals.map((obj =>
          <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        ))}
        </div>
    </div>
  )
}

export default RowPost