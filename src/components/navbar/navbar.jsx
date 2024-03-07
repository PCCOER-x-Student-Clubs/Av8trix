import React, { useState } from "react";
import "./nav.css";
import { Link, animateScroll as scroll } from 'react-scroll';
import smallLogo from "../../images/SmallLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as RouterLink } from 'react-router-dom'; // Import Link

const sections = ['About', 'Gallery', 'Sponsors', 'team'];

function Navbar({ aboutRef }) {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (section) => {
    setActiveLink(section);
    scroll.scrollTo(section);
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
          <li><RouterLink to="/">Home</RouterLink> </li>
        {sections.map((section) => (
          <li key={section} className={`nav-link ${activeLink === section ? 'active' : ''}`}>
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-50}
              onClick={() => handleNavLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
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
  );
}

export default Navbar;
