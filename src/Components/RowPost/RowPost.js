import React from 'react'
import { useEffect, useState } from 'react'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import { Link} from 'react-router-dom';

function RowPost(props) {
  const posters = document.getElementById(props.url);
  const [nOriginals, setNOriginals] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) =>{
      console.log(props.url)
      console.log(response.data)
      setNOriginals(response.data.results)
    })
  }, [])
  
  return (
    <div className={props.vhSize?'row1':'row'}>
        <h2 className='head'>{props.title}</h2>
        <div style={{display:'flex', alignItems:'center'}}>
        <button onClick={()=>{posters.scrollLeft-=50}} className='button-img' style={{float:'left'}}><MdArrowBackIos/></button>
        <div id={props.url} className='posters'>
        
        {nOriginals.map((obj =>
        // <Routes>
        // <Link to={{pathname:'/details/objid', state:{stateParam:true}}}>
        <Link to={`/details/${obj.id}`} state={{stateParam:true}}>
          <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          </Link>
          // </Routes>
        ))}
        
        </div>
        <button onClick={()=>{posters.scrollLeft+=50}} className='button-img' style={{float:'right'}}><MdArrowForwardIos/></button>
        <div ></div>
        </div>
        
    </div>
  )
}

export default RowPost