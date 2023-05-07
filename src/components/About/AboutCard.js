import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="grey">Vaibhav Karnwal </span> I
            am full-stack developer with a passion for building exceptional web
            applications. I was born in Bijnor City, Uttar Pradesh, India on
            December 28, 1995. I am currently 28 years and 4 months old today.
            <br />
            <br />
            I am currently working as a Associate Engineer in Altimetrik in
            Bangalore from Jan 2022. I am working as a Full Stack developer for
            the client. I have a hands-on experience of building websites. I
            have completed my Bachlor's in Computer Science & engineering from
            AKTU University and diploma in Mechanical Engineering.
            <br />
            <br />
            At a age of 26 in 2020, I became fascinated with the world of web
            development. However, I have no idea where to start. It wasn't until
            I met a friend.
            <br />
            In 2020, I created one website and soon discovered its limitations.
            Determined to expand his knowledge and capabilities, I began to
            explore the depths of web development using languages such as HTML,
            CSS, JavaScript, and others. <br />
            <br />
            Now I have a strong foundation in web development technologies such
            as{" "}
            <i className="grey">HTML, CSS, SCSS, JavaScript and TypeScript</i>,
            as well as experience with popular frontend frameworks such as
            <i className="grey"> React, Redux.</i> With my dedication and hard
            work, I honed my skills and became a self-taught full-stack
            developer. Today, I have an impressive portfolio of work that
            showcases my expertise in building dynamic, responsive, and
            visually appealing web applications. <br />
            <br />
            In addition to my technical abilities, I have a keen eye for
            design and aesthetics, which allows him to create stunning and
            functional user interfaces. I am always learning and staying
            up-to-date with the latest trends and technologies in the
            ever-evolving field of web development.
            <br />
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
