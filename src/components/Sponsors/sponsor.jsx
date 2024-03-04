import React from 'react'
import './sponsor.css'
import gold1 from "../../images/Gold1.png";
import gold2 from "../../images/Gold2.png";
import soft1 from "../../images/Soft1.png";
import soft2 from "../../images/Soft2.png";
import soft3 from "../../images/Soft3.png";


function sponsor() {
  return (
    <div className='sponsor_wrapper' id='Sponsors'>
        <h1>Our Sponsors</h1>
        <div className="goldsponsor">
        <h3>Gold Sponsors</h3>
        <div className="goldImg">
          <img src={gold1} alt="" srcset="" />
          <img src={gold2} alt="" srcset="" />

        </div>
        </div>
        <div className="softsponsor">
          <h3>Software Sponsors</h3>
          <div className="softImg">
            <img src={soft1} alt="" srcset="" />
            <img src={soft2} alt="" srcset="" />
            <img src={soft3} alt="" srcset="" />

          </div>
        </div>
    </div>
  )
}

export default sponsor