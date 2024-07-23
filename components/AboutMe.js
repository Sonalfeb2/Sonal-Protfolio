import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/Home.module.css";
const AboutMe = () => {
  return (
    <Container fluid id="aboutme" style={{ backgroundColor: "#F8F9FA" }}>
      <Row className="py-5">
        <Col lg={5} className=" d-flex justify-content-center">
          <img
            className="rounded-circle"
            src="/sonal-image.jpg"
            alt="profilepicture"
            width="375px"
            height="375px"
          />
        </Col>
        <Col>
          <h2 className="display-5 text-center pt-3">About Me</h2>
          <p className="lead">
            Results-driven and technically proficient Software Development
            Intern with 6 months of industry exposure. Seeking an entry-level
            position in software development to apply practical skills in
            front-end development acquired during internship. Eager to
            contribute to innovative projects, collaborate with cross-functional
            teams, and continuously enhance expertise in software engineering
            practices.
          </p>
          <div className="d-flex justify-content-center">
            <Button
              size="lg"
              variant="outline-dark"
              href="https://drive.google.com/file/d/1l_Q0tsEPqswBq4E9mWuel7csDcOadTEx/view?usp=sharing"
            >
              Resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMe;
