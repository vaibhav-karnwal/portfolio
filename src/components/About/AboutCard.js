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
            <br />
            I am currently working as a Associate Engineer in Altimetrik in Bangalore from Jan 2022. I have a hands-on experience of building websites.
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
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(217 213 166)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
