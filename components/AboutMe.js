import { Col, Container, Row } from "react-bootstrap";
import '../styles/Home.module.css'
const AboutMe = () => {
  return (
    <Container
      fluid
      className="border-secondary mb-5"
      id="aboutme"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <h2 className="display-5 text-center pt-3">About Me</h2>
      <Row className="pb-5 pt-2">
        <Col xs={4}>
          <img
            className="border border-secondary image"
            src="/photo.jpeg"
            alt="profilepicture"
            width="148px"
            height="200px"
          />
        </Col>
        <Col>
          <p className="lead">
            Results-driven and technically proficient Software Development
            Intern with 6 months of industry exposure. Seeking an entry-level
            position in software development to apply practical skills in
            front-end development acquired during internship. Eager to
            contribute to innovative projects, collaborate with cross-functional
            teams, and continuously enhance expertise in software engineering
            practices.
          </p>

          <p className="lead">
            <a
              className="btn btn-outline-dark btn-lg"
              href="https://drive.google.com/file/d/1m1JEHuimlvxij9rR8rdQvfOXseTNxg4d/view"
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Resume/CV"
            >
              Resume
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMe;
