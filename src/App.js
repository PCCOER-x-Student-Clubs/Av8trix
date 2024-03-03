import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import AboutUs from "./components/AboutUs/aboutUs";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Sponsor from "./components/Sponsors/sponsor";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

function App() {
  const aboutRef = useRef(null);
  return (
    <>
      <Navbar aboutRef={aboutRef} />
      <Home />
      <AboutUs ref={aboutRef} />
      <Team />
      <ImageSlider />
      <Gallery />
      <Sponsor />

      <div className="contactUs">
        <h1>Contact Us</h1>
        <div className="socialMedia">
          <a href="https://www.instagram.com/team.av8trix?igsh=MWc1eWc0M2ozNXFoag==">
            <button>
              <FaInstagram />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/team-av8trix-6554b7290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button>
              <FaLinkedin />
            </button>
          </a>
        </div>
        <div className="emaPhn">
          <div className="email">
            <MdOutlineMailOutline /> av8trix@pccoer.com
          </div>
          <div className="phnNo">
            <FaPhone /> +91 9970116791
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
