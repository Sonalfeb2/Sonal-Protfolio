import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
  const experienceList = [
    {
      title: "Software Trainee",
      img:
        "https://greenmenconsulting.com/wp-content/uploads/2023/03/Group-427322703.svg",
      duration: "June 2023-Dec 2023"
    }
  ];
  return (
    <Container fluid id="work" className="py-5">
      <h2 className="display-4 text-center mb-4">Experiences</h2>
      <Row>
        {experienceList.map((list, index) =>
          <Col lg={6} className="d-flex justify-content-center" key={index}>
            <div>
              <img
                src={list.img}
                alt="profilepicture"
                className="mb-3"
                width="300px"
              />
              <p className="lead text-center">
                {list.title}
                <br/>
                {list.duration}
              </p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default Experience;
