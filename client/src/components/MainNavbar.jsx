import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";




function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="/"><img
              alt="logo"
              src="https://i.postimg.cc/j2Zmr1kX/Pixelite-Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top fw"
            />{' '}PIXEL<span className="one">I</span><span className="two">T</span><span className="three">E</span></Navbar.Brand>
        <div className="d-flex flex-row-reverse">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="me-1">
            <Nav>
              <Nav.Link href="/home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="mx-2">
                About Us
              </Nav.Link>
              <Nav.Link href="/login" className="mx-2">
                Login
              </Nav.Link>
              <Nav.Link href="/signup" className="mx-2">
                SignUp
              </Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/photoshoot_service">
                  Photoshoot
                </NavDropdown.Item>
                <NavDropdown.Item href="/party_planner">
                  Party Planner
                </NavDropdown.Item>
                <NavDropdown.Item href="/event_organizer">
                  Event Organizer <br></br>and Photographer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
