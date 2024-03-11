import React from "react";
import "./gallery.css";
import teamMeeting from "../../images/teamMeeting.jpg";
// import img1 from "./images/img1.jpg";
// import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
// import img5 from "./images/img5.jpg";

function gallery() {
  return (
    <div className="gallery_container">
      <div className="gallery_wrapper" id="Gallery">
        <h1>
          <img src="/gallery.png" alt="" />
          Our Gallery
        </h1>
        <div className="imgs">
          <div>
            <img src="/team_img.jpg" alt="" />
          </div>
          <div>
            <img
              src="/gallery2.jpg"
              alt=""
              style={{ objectPosition: "50% 30%" }}
            />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={"/gallery3.jpg"} alt="" />
          </div>
          <div>
            <img src={teamMeeting} alt="" />
          </div>
          {/* <div>
          <img src={teamMeeting} alt="" />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default gallery;
