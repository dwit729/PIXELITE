import React from "react";
import Button from "react-bootstrap/esm/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from '../Pixelite';





function ProfileNav() {

  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [username, setUserName] = useState("")


  let data = {
    client_id: String(localStorage.getItem("client_id"))
  }

  console.log(data)

  
  axios.post("http://localhost:3001/auth/getuser", data).then((response)=>{
  console.log(response.data.client_name)
  setUserName(response.data.client_name)})
  
  
  
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
                <Nav.Link href="/" className="mx-2" onClick={() =>{
                  localStorage.removeItem("client_id");
                }}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Title className="text-center pb-3">
          Hello, {username}
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
            <Nav.Link href="/profile" className="link-secondary">
              Home
            </Nav.Link>
            <Nav.Link href="/profile/account-settings" className="link-secondary">
              Account Settings
            </Nav.Link>
            <Nav.Link href="/profile/appointments" className="link-secondary">
              My Appointments
            </Nav.Link>
            <Nav.Link href="/profile/reviews" className="link-secondary">
              My Reviews
            </Nav.Link>
            <Nav.Link href="/profile/albums" className="link-secondary">
              My Albums
            </Nav.Link>
            <Nav.Link href="/profile/calendar" className="link-secondary">
              Calendar
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ProfileNav;
