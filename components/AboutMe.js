import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container
      fluid
      className="border-secondary mb-5"
      id="aboutme"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <h2 className="display-5 text-center">About Me</h2>
      <Row className="pb-5 pt-2">
        <Col xs={4}>
          <img
            className="border border-secondary rounded-circle"
            style={{ marginLeft: "25%" }}
            src="/image.jpeg"
            alt="profilepicture"
            width="200px"
            height="200px"
          />
        </Col>
        <Col>
          <p className="lead">
            My name is Sonal Agrawal. I’m a post-graduate of 2021 from Lovely
            Professional University at Punjab with a degree in Bachelors of
            Computer Application . I'm most passionate about giving back to the
            community, and my goal is to pursue this passion within the field of
            software engineering. In my free time I like working on open source
            projects.
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
