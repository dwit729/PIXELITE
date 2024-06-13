import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">PIXELITE</Navbar.Brand>
        <div className='d-flex flex-row-reverse'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='me-1'>
            <Nav>
            <Nav.Link href="#" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="#link" className='mx-2'>About Us</Nav.Link>
            <Nav.Link href="#link" className='mx-2'>Login</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Photoshoot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Party Planner
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Event Organizer <br></br>and Photographer</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;