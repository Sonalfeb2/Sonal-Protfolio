import { Col, Container, Tab, Tabs, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  return (
    
      <Container id="skills">
        <h1 className="text-center display-5">Skills</h1>
        <Row className="mb-4">
          <Col md={{ span: 9, offset: 1 }} className="shadow p-3 mb-5 bg-white rounded">
            <Tabs 
              defaultActiveKey="technical"
              id="uncontrolled-tab-example"
              fill
              className="mb-3"
            >
              <Tab eventKey="technical" title="Technical Skills">
                <Row className="mb-4">
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={60}
                      label="ALGORITHMS-60%"
                    />
                  </Col>
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={60}
                      label="HTML/CSS-60%"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={80}
                      label="JAVASCRIPT-80%"
                    />
                  </Col>
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={70}
                      label="BOOTSTRAP-70%"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={80}
                      label="RESTAPI-80%"
                    />
                  </Col>
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={80}
                      label="REACT JS/REACT-ROUTING-80%"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <ProgressBar variant="success" now={70} label="REDUX-70%" />
                  </Col>
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={60}
                      label="FIREBASE-AUTHENTICATION-60%"
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={50}
                      label="NEXT JS-50%"
                    />
                  </Col>
                  <Col>
                    <ProgressBar
                      variant="success"
                      now={40}
                      label="NODE JS-40%"
                    />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="soft" title="Soft Skills">
                <Row className="mb-4">
                  <Col>
                    <ProgressBar
                      variant="info"
                      now={80}
                      label="Goal Oriented"
                    />
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
                    <ProgressBar
                      variant="info"
                      now={80}
                      label="Collaboration"
                    />
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
          </Col>
        </Row>
      </Container>
    
  );
}

export default Skills;
