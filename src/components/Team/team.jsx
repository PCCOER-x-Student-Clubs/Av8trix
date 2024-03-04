import Member from "../member/member";
import "./teams.css";
import React from 'react'
import Captain from "./images/Captian.jpg"
import Team1 from "./images/team1.jpg";
import Team2 from "./images/team2.jpg";
import Team3 from "./images/team3.jpg";
import Team4 from "./images/team4.jpg";
import Team5 from "./images/team5.jpg";



function team() {
  return (
    <div className="team_wrapper" id="team">
        <h1>Our Team</h1>

        <div className="captain">
            <h2>Captain</h2>
            <Member image={Captain} />
        </div>
        <h2>Heads</h2>
        <div className="heads">
          <Member image={Team1} />
          <Member image={Team2} />
          <Member image={Team3} />
          <Member image={Team4} />
          <Member image={Team5} />
        </div>
    </div>
  )
}

export default team
