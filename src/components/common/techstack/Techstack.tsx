import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectedSkillSet } from "../../../state/selectors/selectGlobeData";
import Icon from "../icons/Icon";

const Techstack: FC = () => {
  const icons = useSelector(selectedSkillSet);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons?.map((icon: string, index: number) => {
        return (
          <Col
            key={index}
            xs={4}
            md={2}
            onClick={() => {}}
            className="tech-icons"
          >
            <Icon name={icon} fill={"white"} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Techstack;
