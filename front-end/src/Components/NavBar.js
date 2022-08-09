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
          href="/songs"
          style={{ color: "white" }}
        >
          Tuner App
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/songs/new" style={{ color: "white" }}>
              New Song
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
