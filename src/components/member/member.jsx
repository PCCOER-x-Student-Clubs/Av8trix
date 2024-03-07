import React from "react";
import "./Member.css";

const Member = ({image, position, desc}) => {
  return (
    <div className="Team_Member">
       <img src={image} width={240} height={320} alt="member-position" /> 
        {/* <div className="info">
        <h2>{position}</h2>
        <p>{desc}</p>
       </div>  */}
    </div>
  );
};

export default Member;