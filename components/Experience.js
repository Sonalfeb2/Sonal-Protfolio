import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <Container
      fluid
      className="border-secondary mb-5"
      id="work"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <h2 className="display-5 text-center pt-3">Work Experience</h2>
      <Row className="pb-5 pt-2">
        <Col md={{ offset: 1 }}>
          <h2 className="display-6">Greenmen Consulting</h2>
          <p>Software Trainee<i>{` (June-2023/Dec-2023)`}</i></p>
          <ul>
            <li>
              Worked on Annotations of React Components by using Pure Code tool.
            </li>
            <li>
              Worked closely with programmers and clients to meet project
              requirements, goals, and desired functionality.
            </li>
            <li>
              Assisted team with debugging tasks on a project in developing
              phase.
            </li>
            <li>
              Created React JS application as per client requirement mentioned
              in Figma .
            </li>
            <li>Worked on live Project in a Team with Seniors .</li>
          </ul>
        </Col>
        <Col xs={4}>
          <img
            style={{ marginLeft: "25%" }}
            src="https://greenmenconsulting.com/wp-content/uploads/2023/03/Group-427322703.svg"
            alt="profilepicture"
            width="200px"
            height="200px"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Experience;
