import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cards.css'

function Cards(props) {
  return <div className='card-container' 
  style={{backgroundColor: props.BgColor, boxShadow: `0px 0px 6px ${props.BgColor}`, 
  marginLeft: props.CSS.L, marginRight: props.CSS.R}}>
    <div className="card-box-style" style={{border: `1px solid ${props.BgColor}`}}>
        <div className="card-title">{props.title}</div>
        <div className="card-box-line" 
            style={{background: `linear-gradient(45deg, ${props.BgColor} 18%, black, transparent)`}
        }></div>
        <div className="card-content">{props.content}</div>
        <Link to={"/Classes#"+props.ID} className={"btn"}>Learn</Link>
    </div>
  </div>
}

export default Cards