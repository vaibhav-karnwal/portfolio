import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Karnwal </span>
            from <span className="purple"> Bijnor City, Uttar Pradesh, India. </span>
            I born in <span className="purple"> Muzaffarnagar </span>
            at <span className="purple"> 7:05 AM</span> on <span className="purple"> 28 December 1995.</span>
            <br />
            I am currently working as a Associate Software Engineer in Altimetrik in Bangalore which comes under 25 top companies. I have a hands-on experience of building websites and android applications.
            I have completed my Bachlor's in Computer Science & engineering from AKTU University and diploma in Mechanical Engineering.   
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
             Helping Animals
            </li>
            <li className="about-activity">
             Watching Korean and Chinese Dramas
            </li>
            <li className="about-activity">
             Chatting with Friends
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
