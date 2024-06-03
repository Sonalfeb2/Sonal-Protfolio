import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="border-secondary"
      fixed="bottom"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <Row className="pt-5 pb-5" >
        <Col md={{ span: 9, offset: 1 }}>
          <h2 className="display-5 text-center">Get In Touch</h2>
          <p className="lead text-center">
            I'm currently looking for full-time React Developer/Frontend
            Developer opportunities! If you know of any positions available, if
            you have any questions, or if you just want to say hi, please feel
            free to reach me at - <a className="link">sonalfeb7@gmail.com</a>
          </p>
          <p className="text-center">
            <i className="fa fa-code" /> with <i className="fa fa-heart" /> by {" "}
            <a
              rel="noopener"
              href="https://github.com/Sonalfeb2"
              aria-label="My GitHub"
            ><span className="badge bg-dark">Sonal Agrawal</span></a> using  <img src="/favicon.ico" width={18} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
