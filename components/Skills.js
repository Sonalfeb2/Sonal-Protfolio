import { Col, Container, Tab, Tabs, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  const technicalSkills = [
    {
      title: "HTML/CSS",
      level: 70
    },
    {
      title: "Javascript",
      level: 80
    },
    {
      title: "Bootstrap",
      level: 70
    },
    {
      title: "RestAPI",
      level: 80
    },
    {
      title: "ReactJS/React-Routing",
      level: 80
    },
    {
      title: "Redux",
      level: 80
    },
    {
      title: "Firebase-Auth",
      level: 70
    },
    {
      title: "NodeJS",
      level: 50
    },
    {
      title: "NextJS",
      level: 60
    }
  ];
  const softSkills = [
    {
      title: "Goal Oriented",
      level: 80
    },
    {
      title: "Time Management",
      level: 80
    },
    {
      title: "Team Management",
      level: 80
    },
    {
      title: "Adaptaility",
      level: 80
    },
    {
      title: "Collaboration",
      level: 80
    },
    {
      title: "Problem Solving",
      level: 80
    }
  ]
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
                    <ProgressBar variant="primary" now={skill.level} />
                  </Col>
                )}
              </Row>
            </Tab>
            <Tab eventKey="soft" title="Soft Skills">
            <Row className="mb-4">
                {softSkills.map((skill, index) =>
                  <Col md={6} key={index} className="mb-3">
                    <p className="lead mb-0">
                      {skill.title}
                    </p>
                    <ProgressBar variant="primary" now={skill.level} />
                  </Col>
                )}
              </Row>
            </Tab>
          </Tabs>
    </Container>
  );
}

export default Skills;
