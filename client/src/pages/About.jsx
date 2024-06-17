import React from "react";
import MainNavbar from "../components/MainNavbar.jsx";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gmail from "../components/images/gmail.png";
import insta from "../components/images/instagram.png";
import fb from "../components/images/facebook.png";
import camera from "../components/images/camera.gif";
import { useTypewriter } from "react-simple-typewriter";

function About() {
  const [title] = useTypewriter({
    words: ["Pixels!"],
    typeSpeed: 250,
    deleteSpeed: 50,
    loop: false,
    delaySpeed: 5000,
  });

  const [text] = useTypewriter({
    words: [
      "Pixelite is a dynamic photo and events company specializing in capturing and creating memorable moments with a keen eye for detail and creativity, Pixelite excels in photography services tailored for weddings, corporate events, and special occasions from exquisite photo documentation to innovative event planning and execution, Pixelite ensures every client's vision is beautifully realized, ensuring lasting impressions and unforgettable experiences.",
    ],
    typeSpeed: 30,
    deleteSpeed: 15,
    loop: false,
    delaySpeed: 9000,
  });

  return (
    <div>
      <MainNavbar />

      <Container className="p-2">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="w-1000, h-500, m-5">
            <Image
              style={{
                height: "500px",
                width: "500px",
                objectFit: "cover",
                objectPosition: "-60px",
              }}
              src={camera}
              rounded
            />
          </div>

          <div style={{ width: "650px", height: "auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "5rem" }}>
              Hi <span>{title}</span>
            </h1>

            <span
              style={{ textIndent: "3em", lineHeight: "1.5", fontSize: "1rem" }}
            >
              {text}
            </span>
          </div>
        </div>
      </Container>
      <Container className="p-3 d-flex flex-wrap justify-content-center">
        <Row className="gap-5">
          <Col>
            <a
              href="#"
              target="_blank"
              style={{
                justifyContent: "center",
                alignContent: "center",
                cursor: "pointer",
              }}
            >
              <img src={gmail}></img>
            </a>
          </Col>
          <Col>
            <a
              href="#"
              target="_blank"
              style={{
                justifyContent: "center",
                alignContent: "center",
                cursor: "pointer",
              }}
            >
              <img src={insta}></img>
            </a>
          </Col>
          <Col>
            <a
              href="#"
              target="_blank"
              style={{
                justifyContent: "center",
                alignContent: "center",
                cursor: "pointer",
              }}
            >
              <img src={fb}></img>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
