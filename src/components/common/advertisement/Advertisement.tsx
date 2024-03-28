import { FC } from "react";
import { Row, Col } from "react-bootstrap";

const Advertisement: FC = () => {
  return (
    <Row
      className="flex-row d-flex position-relative text-danger"
      id="scroll-text"
    >
      <Col>Available for freelancing as a Frontend Developer</Col>
      <Col>Contact: 9997243157</Col>
    </Row>
  );
};
export default Advertisement;
