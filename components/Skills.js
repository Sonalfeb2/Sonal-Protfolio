import { Col, Container, Tab, Tabs, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  const technicalSkills = [
    {
      title: "HTML/CSS",
      level: 70
    },
    {
      title: "JAVASCRIPT",
      level: 80
    },
    {
      title: "BOOTSTRAP",
      level: 70
    },
    {
      title: "RESTAPI",
      level: 80
    },
    {
      title: "REACT JS/REACT-ROUTING",
      level: 80
    },
    {
      title: "REDUX",
      level: 80
    },
    {
      title: "FIREBASE-AUTHENTICATION",
      level: 70
    },
    {
      title: "NODE JS",
      level: 50
    },
    {
      title: "NEXT JS",
      level: 60
    }
  ];
  return (
    <Container id="skills">
      <h1 className="text-center display-5 py-5">Skills</h1>
          <Tabs
            defaultActiveKey="technical"
            id="uncontrolled-tab-example"
            fill
            className="mb-3"
          >
            <Tab eventKey="technical" title="Technical Skills">
              <Row className="mb-4">
                {technicalSkills.map((skill, index) =>
                  <Col md={6} key={index} className="mb-3">
                    <p className="lead mb-0">
                      {skill.title}
                    </p>
                    <ProgressBar variant="success" now={skill.level} />
                  </Col>
                )}
              </Row>
            </Tab>
            <Tab eventKey="soft" title="Soft Skills">
              <Row className="mb-4">
                <Col>
                  <ProgressBar variant="info" now={80} label="Goal Oriented" />
                </Col>
                <Col>
                  <ProgressBar
                    variant="info"
                    now={80}
                    label="Problem Solving"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <ProgressBar variant="info" now={80} label="Collaboration" />
                </Col>
                <Col>
                  <ProgressBar
                    variant="info"
                    now={80}
                    label="Team Management"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <ProgressBar
                    variant="info"
                    now={80}
                    label="Time Management"
                  />
                </Col>
                <Col>
                  <ProgressBar variant="info" now={80} label="Adaptaility" />
                </Col>
              </Row>
            </Tab>
          </Tabs>
    </Container>
  );
}

export default Skills;
