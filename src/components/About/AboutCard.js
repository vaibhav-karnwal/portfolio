import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
          className="text-shadow-dark"
            style={{
              textAlign: "justify",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Hi Everyone, I am a Software Developer at Altimetrik India placed at
            Bangaluru, India. I enjoy problem-solving and coding. Always strive
            to bring 100% to the work I do. I have worked on technologies like{" "}
            <i className="grey">
              Java, HTML, CSS, SCSS, JavaScript and TypeScript
            </i>
            {" "} as well as experience with popular frontend frameworks such as
            <i className="grey"> React, Redux</i> during my professional
            Journey. I have 26 months of professional work experience which
            helped me strengthen my experience in TypeScript, React, Redux. I am
            passionate about developing complex and exceptional web applications
            that solve real-world problems impacting millions of users.
            <br />
            Looking for an opportunity to work in a challenging position
            combining my skills in Software Engineering, which provides
            professional development, interesting experiences and personal
            growth.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">Helping Animals</li>
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
