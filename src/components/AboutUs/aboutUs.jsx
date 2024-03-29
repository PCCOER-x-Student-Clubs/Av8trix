import React from "react";
import img1 from "../../images/aboutUs.jpg";
import "./aboutUs.css";
// import { MdKeyboardArrowDown } from "react-icons/md";

function AboutUs() {
  // let[container, setContainer] = useState(true);
  // let Containerdisplay = container? {display:"none"} : {display:"flex"};
  // let buttonRotate = container ? { transform: "rotateX(0deg)" } : { transform: "rotateX(180deg)" };
  // const aboutRef = useRef("");

  return (
    <>
      <div className="aboutUs" id="About">
        <h1 color="white">
          <img
            src="/plainicon.png"
            alt=""
            style={{
              width: "50px",
              display: "inline-block",
              marginRight: "10px",
              marginTop: "10px",
            }}
          />
          About Us
        </h1>
        <div className="about_container">
          <div className="leftInfo ">
            <hr />
            <h3>Sky Story</h3>
            <hr />
            <p className="maitree-medium">
              It started as a group project of 3 mechanical engineers trying to
              build a model aircraft with an idea of flying it within a span of
              a month,but quickly realised how complex it is to achieve flight
              even on a scale plane This started a chain process which led to
              the founding of this club in which we all entered as just an
              aircraft enthusiast people who loved watching airplanes land and
              take off , childern who dreamt of being a pilot once they were old
              enough, and we keep on working to make the best aircrafts.
            </p>{" "}
          </div>
          <div className="RightImg">
            <img src={img1} alt="" srcset="" className="img-1" />
          </div>
        </div>
        <div className="hiddenContainer">
          <div className="leftInfo">
            <hr />
            <h3>Our Mission</h3>
            <hr />
            <p className="maitree-medium">
              At AV8TRIX we bring together aero-enthusiasts from diverse
              background for creating a dynamic, interdisciplinary space for
              pushing the boundaries of the flight.
            </p>

            <hr style={{ marginTop: "3rem" }} />
            <h3>Vision</h3>
            <hr />
            <p className="maitree-medium">
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
            <img src={img1} alt="" srcset="" className="img-2" />
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
