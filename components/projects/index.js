import CardProject from "./Project";
import { Col, Container, Row } from "react-bootstrap";
const Projects = () => {
  const projectList = [
    {
      title: "Project 1",
      subtitle: "TODO TASK",
      description: "TODO List in NEXT JS by Adding all CRUD Operations in List",
      time: "Updated on May 2024"
    },
    {
      title: "Project 2",
      subtitle: "Mail Box Client",
      description: "TODO List in NEXT JS by Adding all CRUD Operations in List",
      time: "Updated on May 2024"
    },
    {
      title: "Project 3",
      subtitle: "Eccomerce App",
      description: "TODO List in NEXT JS by Adding all CRUD Operations in List",
      time: "Updated on May 2024"
    },
    {
      title: "Project 4",
      subtitle: "Expense Tracker",
      description: "TODO List in NEXT JS by Adding all CRUD Operations in List",
      time: "Updated on May 2024"
    }
  ];
  return (
    <Container id="projects">
      <h1 className="text-center">Personal Projects</h1>
      <Row>
        {projectList.map((li, index) =>
          <Col md={6} style={{ marginTop: "40px" }} key={index}>
            <CardProject list={li} />
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default Projects;
