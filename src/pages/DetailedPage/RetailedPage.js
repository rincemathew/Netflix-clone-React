import React,{useEffect,useState} from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import axios from '../../axios'
import { FaPlay } from "react-icons/fa";
import {API_KEY, imageUrl} from '../../constants/constants'
import { Link,useParams, useLocation} from 'react-router-dom';

function RetailedPage() {
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
      <div>{movies? movies.original_title: ''}</div>
      <Footer/>
    </div>
  )
}

export default RetailedPage