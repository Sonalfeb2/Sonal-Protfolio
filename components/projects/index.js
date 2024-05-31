import CardProject from "./Project";
import { Col, Container, Row } from "react-bootstrap";
const Projects = () => {
  const projectList = [
    {
      title: "TODO TASK",
      description:
        "Created a Todo Task Application with daily update , it is user specific application , user can edit, create,delete their own task on daily basis.",
      skills: "NEXT JS, MONGODB",
      time: "Updated on May 2024",
      link:"https://github.com/Sonalfeb2/TODO-LIST-NEXTJS",
      icon:<i className="fa fa-duotone fa-clipboard"></i>
    },

    {
      title: "MAIL BOX CLIENT",
      description:
        "Integrated react-draft-wysiwyg editor for composing new email.User can see all the mails they have sent and received by using sidebar tabs.",
      skills: "REACT, REDUX, FIREBASE-AUTHENTICATION, REALTIME-DB",
      time: "Updated on April 2024",
      link: "https://github.com/Sonalfeb2/MailBoxClient",
      icon :<i className="fa fa-solid fa-envelope"></i>
    },

    {
      title: "ECCOMERCE APP",
      description:
        "E-commerce website is an application that gives users the option to see different products and add them to the cart, manipulating cart data. User needs to log in to access their cart and users can see the product details as well.",
      skills: "REACT ,REACT-BOOTSTRAP ,REDUX, REACT-ROUTER, API, AXIOS",
      time: "Updated on March 2024",
      link:"https://github.com/Sonalfeb2/ShoppingCart-Redux",
      icon:<i className="fa fa-duotone fa-cart-plus"></i>
    },
    {
      title: "EXPENSE TRACKER",
      description:
        "Created a tracker of expenses done by user with email verification, password reset functionality , simple dark mode theme for premium users, added feature of download CSV or text format expenses.",
      skills: "REACT, REACT-BOOTSTRAP, CONTEXT, API, FIREBASE-AUTHENTICATION",
      time: "Updated on Feb 2024",
      link:"https://github.com/Sonalfeb2/ExpenseTrackerReact",
      icon:<i className="fa fa-regular fa-calendar-days"></i>
    }
  ];
  return (
    <Container id="projects">
      <h1 className="display-5 text-center">Personal Projects</h1>
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
