import React from 'react'
import "./home.css";
import Navbar from '../navbar/navbar';

function home() {
  return (
    <>
    <Navbar />    
    <div className='main_wrapper' id='Home'>
        <h1>AV8TRIX</h1>
        <p>Crafting Dreams, Soaring Realities!</p>
    </div>
    </>

  )
}

export default home