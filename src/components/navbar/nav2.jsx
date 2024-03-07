import React from 'react'
import { useState } from "react";
import "./nav.css";
import smallLogo from "../../images/SmallLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as RouterLink } from 'react-router-dom'; // Import Link
function Nav2() {
    let [menu, setMenu] = useState(false);
  let menustyle = menu ? "desktop-links mobile-links" : "desktop-links";
  return (
    <div className="nav_wrapper navbar">
    <div className="logo">
      <img src={smallLogo} alt="" srcset="" />
    </div>
    <div className={menustyle}>
      <ul>
        <li><RouterLink to="/">Home</RouterLink> </li>
      <li>  <RouterLink to="/blog">Blog</RouterLink> {/* Use RouterLink to link to the Blog page */}</li>
      </ul>
    </div>
    <div
      className="hamburgMenu"
      onClick={() => {
        setMenu((prev) => !prev);
      }}
    >
      <RxHamburgerMenu />
    </div>
  </div>
  )
}

export default Nav2