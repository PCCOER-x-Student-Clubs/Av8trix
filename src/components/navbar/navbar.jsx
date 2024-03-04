
import React, { useState } from "react";
import "./nav.css";
import { Link, animateScroll as scroll } from 'react-scroll';
import smallLogo from "../../images/SmallLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";


const sections = ['Home', 'About', 'Gallery', 'Sponsors', 'team']; 
function Navbar({ aboutRef }) {
  const [activeLink, setActiveLink] = useState(''); // State for active navbar link

  const handleNavLinkClick = (section) => {
    setActiveLink(section);
    scroll.scrollTo(section); // Smooth scroll to clicked section
  };

  let [menu, setMenu] = useState(false);
  let menustyle = menu ? "desktop-links mobile-links" : "desktop-links";
  return (
    <div className="nav_wrapper navbar">
      <div className="logo">
        <img src={smallLogo} alt="" srcset="" />
      </div>
      <div className={menustyle}>
        <ul>
        {sections.map((section) => (
          <li key={section} className={`nav-link ${activeLink === section ? 'active' : ''}`}>
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-50} // Adjust offset for navbar height if needed
              onClick={() => handleNavLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
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
  );
}

export default Navbar;
