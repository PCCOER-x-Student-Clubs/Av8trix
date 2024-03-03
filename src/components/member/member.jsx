import React from "react";
import "./Member.css";

const Member = ({image}) => {
  return (
    <div className="Team_Member">
       <img src={image} width={240} height={320} alt="member-position" /> 
    </div>
  );
};

export default Member;