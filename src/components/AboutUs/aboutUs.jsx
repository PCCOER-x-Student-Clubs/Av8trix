import React, { useRef } from "react";
import img1 from "../../images/aboutUs.jpg";
import "./aboutUs.css";
// import { MdKeyboardArrowDown } from "react-icons/md";

function AboutUs() {
  // let[container, setContainer] = useState(true);
  // let Containerdisplay = container? {display:"none"} : {display:"flex"};
  // let buttonRotate = container ? { transform: "rotateX(0deg)" } : { transform: "rotateX(180deg)" };
  const aboutRef = useRef("");

  return (
    <>
      <div className="aboutUs" id="about" ref={aboutRef}>
        <h1 color="white">About Us</h1>
        <div className="about_container">
          <div className="leftInfo">
            <h3>Sky Story</h3>
            <p>
              It started as a group project of 3 mechanical engineers trying to
              build a model aircraft with an idea of flying it within a span of
              a month,but quickly realised how complex it is to achieve flight
              even on a scale plane This started a chain process which led to
              the founding of this club in which we all entered as just an
              aircraft enthusiast\ people who loved watching airplanes land and
              take off , childern who dreamt of being a pilot once they were old
              enough, and we keep on working to make the best aircrafts.
            </p>{" "}
          </div>
          <div className="RightImg">
            <img src={img1} alt="" srcset="" />
          </div>
        </div>
        <div className="hiddenContainer">
          <div className="leftInfo">
            <h3>Our Mission</h3>
            <p>
              At AV8TRIX we bring together aero-enthusiasts from diverse
              background for creating a dynamic, interdisciplinary space for
              pushing the boundaries of the flight.
            </p>

            <h3>Vision</h3>
            <p>
              Facilitating young minds to collaborate on nurturing a passion for
              aviation that fosters continuous learning and hands-on exploration
              within this club.
              <br />
              Ensuring open access to resources tools and expertise fostering an
              inclusive and colaboartive atmosphere where all memebers have the
              opportunity to contribute and learn
            </p>
          </div>
          <div className="RightImg">
            <img src={img1} alt="" srcset="" />
          </div>
        </div>

        {/* <button onClick={()=>{
      setContainer((prev)=> !prev)
    }} style={buttonRotate}><MdKeyboardArrowDown /></button> */}
      </div>
    </>
  );
}

export default AboutUs;
