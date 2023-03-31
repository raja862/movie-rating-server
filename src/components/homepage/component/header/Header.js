import React from 'react'
import { Link } from 'react-router-dom'
import"./Header.css"


const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
                     <h1  style={{color:"yellow"}}>My <span style={{color:"red"}}>Choices</span> </h1>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span style={{color:"lightsalmon"}}>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span style={{color:"whitesmoke"}}>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span style={{color:"black"}}>Upcoming</span></Link>
            <h1 style={{color:"blue"}}><span style={{color:"green"}}>H</span>ollywoo<span style={{color:"black"}}>D</span> <span style={{color:"red"}}>MovieS</span></h1>
        </div>
      
    </div>
  )
}

export default Header
