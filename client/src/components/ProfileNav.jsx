import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";

function ProfileNav() {
  //button style
  const buttonStyle = {
    backgroundImage:
      "url(https://editors.dexerto.com/wp-content/uploads/2021/09/23/Valorant-Jett-nerfs-episode-3.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "60px",
    height: "60px",
    border: "none",
    cursor: "pointer",
    margin: "auto 30px auto -70px",
  };
  //side menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <div>
            <Button
              style={buttonStyle}
              className="rounded-circle"
              onClick={handleShow}
            ></Button>
            <Navbar.Brand href="#home">PIXELITE</Navbar.Brand>
          </div>
          <div className="d-flex flex-row-reverse">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="me-1">
              <Nav>
                <Nav.Link href="/" className="mx-2">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="mx-2">
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="mx-2">
                  Logout
                </Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Photoshoot
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Party Planner
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Event Organizer <br></br>and Photographer
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Title className="text-center pb-3">
          Hello, Name!
        </Offcanvas.Title>
        <div className="m-auto">
          <img
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              border: "none",
              borderRadius: "50%",
            }}
            src="https://editors.dexerto.com/wp-content/uploads/2021/09/23/Valorant-Jett-nerfs-episode-3.jpg"
            alt="Profile picture"
          />
        </div>

        <Offcanvas.Body>
          <Nav className="d-flex flex-column">
            <Nav.Link href="/" className="link-secondary">
              Home
            </Nav.Link>
            <Nav.Link href="/account-settings" className="link-secondary">
              Account Settings
            </Nav.Link>
            <Nav.Link href="/appointments" className="link-secondary">
              My Appointments
            </Nav.Link>
            <Nav.Link href="/reviews" className="link-secondary">
              My Reviews
            </Nav.Link>
            <Nav.Link href="/albums" className="link-secondary">
              My Albums
            </Nav.Link>
            <Nav.Link href="/calendar" className="link-secondary">
              Calendar
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ProfileNav;
