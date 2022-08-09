import { Nav, Navbar, Container } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar
      className="nav-color"
      variant="light"
      sticky="top"
      expand="md"
      collapseOnSelect
    >
      <Container>
        <Navbar.Toggle />
        <Navbar.Brand
          mb-0="true"
          h1="true"
          className="d-inline-block"
          href="/songs"
        >
          Tuner App
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/songs/new">New Song</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
