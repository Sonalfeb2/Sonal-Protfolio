import CardProject from "./Project";
import { Col, Container, Row } from "react-bootstrap";
const Projects = () => {
  const projectList = [
    { 
      id: 1,
      title: "TODO TASK",
      description:
        "Created a Todo Task Application with daily update , it is user specific application , user can edit, create,delete their own task on daily basis.",
      skills:["Next Js","Mongo DB"],
      time: "Updated on May 2024",
      link:"https://github.com/Sonalfeb2/TODO-LIST-NEXTJS",
      icon:<i className="fa fa-duotone fa-clipboard"></i>
      
    },

    {
      id:2,
      title: "MAIL BOX CLIENT",
      description:
        "Integrated react-draft-wysiwyg editor for composing new email.User can see all the mails they have sent and received by using sidebar tabs.",
      skills:["React", "Redux","Firebase-Authentication"],
      time: "Updated on April 2024",
      link: "https://github.com/Sonalfeb2/MailBoxClient",
      icon :<i className="fa fa-solid fa-envelope"></i>
    },

    {
      id:3,
      title: "ECCOMERCE APP",
      description:
        "E-commerce website is an application that gives users the option to see different products and add them to the cart, manipulating cart data. User needs to log in to access their cart and users can see the product details as well.",
      skills:["React","React-Bootstrap","Redux","React-Router","API","Axios"],
      time: "Updated on March 2024",
      link:"https://github.com/Sonalfeb2/ShoppingCart-Redux",
      icon:<i className="fa fa-duotone fa-cart-plus"></i>
    },
    {
      id:4,
      title: "EXPENSE TRACKER",
      description:
        "Created a tracker of expenses done by user with email verification, password reset functionality , simple dark mode theme for premium users, added feature of download CSV or text format expenses.",
      skills: ["React","React-Bootstrap","Context","API","Firebase"],
      time: "Updated on Feb 2024",
      link:"https://github.com/Sonalfeb2/ExpenseTrackerReact",
      icon:<i className="fa fa-regular fa-calendar-days"></i>
    }
  ];
  return (
    <Container fluid id="projects" style={{ backgroundColor: "#F8F9FA" }}>
      <Container>
      <h1 className="display-4 text-center py-5">Recent Projects</h1>
      <Row >
        {projectList.map((li, index) =>
          <Col md={6} className="d-flex justify-content-center" key={index}>
            <CardProject list={li} key={li.id}/>
          </Col>
        )}
      </Row>
      </Container>
    </Container>
  );
};
export default Projects;
