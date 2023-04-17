import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row className="text-center my-5">
        <Col className="mt-4">
          <h3>About Us</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            commodo cursus. Sed vel dapibus urna, quis pharetra ex. Nulla
            facilisi. Pellentesque vestibulum augue nec gravida placerat. Sed
            varius velit vitae est commodo dictum. Praesent eget sapien euismod,
            gravida augue eget, auctor mi. Praesent nec lectus est. Donec
            laoreet, quam eu molestie elementum, nulla dui consequat ex, id
            aliquet ex velit quis est. Sed tristique ante quis dui aliquam, non
            convallis arcu faucibus. Fusce eu augue vel tellus iaculis pulvinar.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img src={image1} alt="1" className="img-fluid" />
        </Col>
        <Col md={6}>
          <img src={image2} alt="2" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
