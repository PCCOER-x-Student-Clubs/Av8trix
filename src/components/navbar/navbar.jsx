import React,{useState, useRef} from 'react';
import './nav.css';
import smallLogo from '../../images/SmallLogo.png'
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar({aboutRef}) {

        const scrollToAbout = () =>{
            aboutRef.current.scrollIntoView({behaviour: 'smooth'});
        }

        let[menu, setMenu]= useState(false);
        let menustyle = menu ? "desktop-links mobile-links":"desktop-links"; 
  return (
    <div className='nav_wrapper'>
        <div className="logo">
            <img src={smallLogo} alt="" srcset="" />
        </div>
        <div className={menustyle}>      
            <ul>
                <li onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}}>Home</li>
                <li onClick={() => {scrollToAbout()}}>About</li>
                <li>Gallery</li>
                <li>Sponsors</li>
                <li>Teams</li>
            </ul>
        </div>
        <div className="hamburgMenu" onClick={()=>{
          setMenu((prev)=> !prev)
         }}>
            <RxHamburgerMenu />
        </div>
    </div>
  )
}

export default Navbar