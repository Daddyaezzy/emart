import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="py-5  mb-5">
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <div className="my-5">
            <h3>Contact Us</h3>
            <hr />
          </div>

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
      <Row className="justify-content-center">
        <Col md={8}>
          <ul className="list-unstyled">
            <li className="mb-3">
              <h5 className="mb-2">Address</h5>
              <p>123 Main Street</p>
              <p>Anytown, USA 12345</p>
            </li>
            <li className="mb-3">
              <h5 className="mb-2">Phone</h5>
              <p>(123) 456-7890</p>
            </li>
            <li className="mb-3">
              <h5 className="mb-2">Email</h5>
              <p>info@example.com</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
