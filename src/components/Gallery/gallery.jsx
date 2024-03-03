import React from 'react'
import "./gallery.css";
import teamMeeting from "../../images/teamMeeting.jpg";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"


function gallery() {
  return (
    <div className='gallery_wrapper'>
        <h1>Our Gallery</h1>
        <div className="imgs">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={teamMeeting} alt="" />
            <img src={teamMeeting} alt="" />
        </div>
    </div>
  )
}

export default gallery