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


function EmployeeProfileNav() {

    const [username, setUserName] = useState("")
  
  
    let data = {
      emp_id: String(localStorage.getItem("emp_id"))
    }
  
    useEffect(() => {
        console.log(data)
        axios.post("http://localhost:3001/employee/get_emp", data).then((response)=>{
        console.log(response.data.emp_name)
        setUserName(response.data.emp_name)})
    },[]);
    
    
    
    //button style
    const buttonStyle = {
      backgroundImage:
        "url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png)",
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
                  <Nav.Link href="/employee" className="mx-2" onClick={() =>{
                    localStorage.removeItem("emp_id");
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
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Profile picture"
            />
          </div>
  
          <Offcanvas.Body>
            <Nav className="d-flex flex-column">
              <Nav.Link href="/employee/home" className="link-secondary">
                Events
              </Nav.Link>
              <Nav.Link href="/employee/app" className="link-secondary">
                Appointments
              </Nav.Link>
              <Nav.Link href="/employee/equip" className="link-secondary">
                Equipment
              </Nav.Link>
              <Nav.Link href="/employee/fold" className="link-secondary">
                Manage Folders
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
}

export default EmployeeProfileNav
