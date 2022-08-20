import React,{useEffect,useState} from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import axios from '../../axios'
import { FaPlay } from "react-icons/fa";
import {API_KEY, imageUrl} from '../../constants/constants'
import { Link,useParams, useLocation} from 'react-router-dom';
import './DetailedPage.css'

function DetailedPage() {
  const [movies, setMovies] = useState()
  // const type = useParams().type; same down
  const {id} = useParams();
  const stateParam = useLocation().state;
  console.log(id)
  console.log(stateParam)
  useEffect(() => {
    axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response)
      setMovies(response.data)
    })
  }, [])

  function callMovie(hello) {
    return hello.map((respnse)=>{
      return `${respnse.name} `
    })
  }
  
  return (
    <div>
      <NavBar/>
      <div>
        <div style={{backgroundImage:`url(${movies ? imageUrl+movies.backdrop_path: ""})`}} className='banner'>
          <div className='one' style={{ position:'relative',height:'100%'}}>
            <div className='two' style={{ paddingLeft:'40px',position:'absolute',bottom:'0', paddingBottom:'20px'}}>
            <h1 style={{paddingBottom:'30px',fontSize:'60px'}} className="title">{movies ? movies.title : ""}</h1>
        <div style={{}} className="banner-buttons">
        <button style={{display:'flex', alignItems:'center'}} className="button">
                <FaPlay/>
                <span style={{paddingLeft:'5px'}}>Play</span></button>
        </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className='fade1'></div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'90%', padding:'20px'}}>
          <div style={{display:'flex'}}>
            <div style={{paddingRight:'20px', color:'#20fc03'}}>
            {movies? movies.vote_average+'%': ''}
            </div>
            <div style={{paddingRight:'20px'}}>
            {movies? movies.release_date: ''}
            </div>
            <div style={{color:'#fa00a2'}}>
            {movies? ''+movies.adult==='false' ? 'U/A':'A': ''}
            </div>
          </div>
          <div style={{paddingTop:'20px', fontSize:'large', fontStyle:'italic'}}>
          {movies? movies.tagline: ''}
          </div>
          <div style={{paddingTop:'20px', fontWeight:'bold'}}>
          {movies? movies.overview: ''}
          </div>  
          <div style={{paddingTop:'10px', paddingBottom:'20px'}}>
            {movies ? 'Genres: '+callMovie(movies.genres):''}
          </div>  
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DetailedPage