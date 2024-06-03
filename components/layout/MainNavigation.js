import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
function MainNavigation() {
  return (
    <header>
      <Navbar expand="lg" fixed="top" className="navbar-transparent">
        <Container fluid>
          <Navbar.Brand href="#home">{`<Sonal />`}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#work">Experience</NavLink>
              <NavLink href="#aboutme">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavigation;
