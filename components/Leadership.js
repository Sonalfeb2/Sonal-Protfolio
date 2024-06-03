import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useState } from "react";
import "../styles/Home.module.css";
const LeaderShip = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid id="leadership" style={{ backgroundColor: "#F8F9FA" }}>
      <Container>
        <Row className="py-5">
          <h2 className="display-5 text-center pb-5">Leadership</h2>

          <Col lg={6}>
            <p className="lead">
              As a React developer with Internship experience, I bring technical
              expertise, project management skills, and strong communication
              abilities to the table. I have a proven track record of building
              large-scale applications, optimizing code for performance, and
              implementing best practices. Additionally, I have experience
              leading teams and projects, creating and maintaining project
              plans, managing timelines and budgets, and ensuring timely
              delivery of high-quality work. I excel at communicating
              effectively with team members, stakeholders, and clients, both
              verbally and in writing, and am a skilled listener who can provide
              clear and constructive feedback. I am also passionate about
              mentoring and training other developers to help them develop their
              skills and achieve their goals. With my ability to solve complex
              technical problems and think creatively, I am always up-to-date
              with the latest developments in React and related technologies,
              and am able to innovate and inspire a positive, collaborative work
              environment.
            </p>
          </Col>
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect}>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/screenshot1.png"
                  alt="First slide"
                  width={615}
                  height={450}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/screenshot2.png"
                  alt="Second slide"
                  width={615}
                  height={450}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/screenshot3.png"
                  alt="Third slide"
                  width={615}
                  height={450}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default LeaderShip;
