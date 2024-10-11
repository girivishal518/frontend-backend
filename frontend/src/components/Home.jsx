import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Home.css'
function Home() {
  return (
    <>
    <p>this is home..</p>
      <header className='header'>
       {/* <nav className='nav'>
        <NavLink to="http://www.google.com">abc</NavLink>
        <NavLink to={"/service"}>service</NavLink>
        <NavLink>about</NavLink>
        <NavLink>blog</NavLink>
        <NavLink to={"/Form"}>login</NavLink>
       </nav> */}
      </header>
    </>
  )
}

export default Home
