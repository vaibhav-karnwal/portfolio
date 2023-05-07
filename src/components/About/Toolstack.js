import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiAndroid} from "react-icons/di";
import {SiVisualstudiocode} from "react-icons/si";

function Toolstack() {
  const icons = [DiAndroid,SiVisualstudiocode]
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon) => {
        const Icon = icon;

        return (
          <Col xs={4} md={2} className="tech-icons">
              <Icon />
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
