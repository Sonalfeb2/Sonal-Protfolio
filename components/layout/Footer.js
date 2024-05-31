import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="border-secondary"
      fixed="bottom"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <Row className="pt-5 pb-5">
        <Col md={{ span: 9, offset: 1 }}>
          <h2 className="display-5">Get In Touch</h2>
          <p className="lead">
            I'm currently looking for full-time React Developer/Frontend
            Developer opportunities! If you know of any positions available, if
            you have any questions, or if you just want to say hi, please feel
            free to reach me.
          </p>
          <p>Email : sonalagrawal02@outlook.com</p>
          <p>SecondaryEmail: sonalfeb7@gmail.com</p>
          <p>Address: Bengaluru, Karnataka</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
