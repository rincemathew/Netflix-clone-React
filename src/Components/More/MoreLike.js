import axios from '../../axios'
import React, { useEffect,useState } from 'react'
import './MoreLike.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import { Link} from 'react-router-dom';

function MoreLike(props) {
    // console.log(props.id)

    const [more, moreLike] = useState()

    useEffect(() => {
        axios.get(`discover/movie?api_key=${API_KEY}&with_genres=${props.id}`).then((response)=>{
            moreLike(response.data.results)
            // console.log(response.data.results)
        })  
    }, [])
    

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'90%'}}>
            <div style={{paddingBottom:'10px'}}>
                <h2>More Like This</h2>
            </div>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {more?.map((obj)=>{
                   return(<div style={{height:'auto',width:'25%'}}>
                    <Link style={{textDecoration:'none'}} to={`/details/${obj.id}`} state={{stateParam:true}}>
                   <div className='card-div'>
                    <div>
                    <img style={{width:'100%', height:'auto'}} src={`${imageUrl+obj.backdrop_path}`} alt="more like this" />
                    </div>
                    <div style={{ backgroundColor:'#2f2f2f'}}>
                    <div style={{padding:'5px', fontStyle:'italic', fontWeight:'bolder'}}>
                    {obj.title}
                    </div>
                    <div style={{padding:'5px', color:'green', fontWeight:'bolder'}}>
                    {obj.vote_average+' %'}
                    </div>
                    <div style={{maxHeight:'45px' ,padding:'5px', paddingBottom:'10px', overflow:'hidden', textOverflow:'ellipsis',wordWrap:'break-word',}}>
                    {obj.overview}
                    </div>
                    </div>
                   </div >
                   </Link>
                   </div>)
                })}
            </div>
        </div>
    </div>
  )
}

export default MoreLike