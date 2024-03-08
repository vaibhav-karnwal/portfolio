import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiReactjsFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJest, SiTypescript } from "react-icons/si";

function Techstack() {
  const icons = [
    RiReactjsFill,
    TbBrandRedux,
    SiTypescript,
    SiJest,
    FaJava,
    DiJavascript1,
    AiFillHtml5,
    FaNodeJs,
    FaSass,
    DiBootstrap,
    AiFillGithub,
    FaCss3,
    RiFlutterFill,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon) => {
        let Icon = icon;
        return (
          <Col xs={4} md={2} onClick={()=>{}} className="tech-icons">
              <Icon/>
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
