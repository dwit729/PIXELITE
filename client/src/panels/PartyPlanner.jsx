import React from "react";
import Carousel from "react-bootstrap/Carousel";
import NavBar from "../components/MainNavbar";
import wedding1 from "../components/images/wedding1.jpg";
import wedding2 from "../components/images/wedding2.jpg";
import wedding3 from "../components/images/wedding3.jpg";

import debut1 from "../components/images/debut1.jpg";
import debut2 from "../components/images/debut2.jpg";
import debut3 from "../components/images/debut3.jpg";

import birthday1 from "../components/images/birthday1.jpg";
import birthday2 from "../components/images/birthday2.jpg";
import birthday3 from "../components/images/birthday3.jpg";

import conference1 from "../components/images/conference1.jpg";
import conference2 from "../components/images/conference2.jpg";
import conference3 from "../components/images/conference3.jpg";

function PartyPlanner() {
  return (
    <div>
      <NavBar />
      <div>
        <h1
          className="position-absolute text-center"
          style={{
            marginTop: "150px",
            fontSize: "5svw",
            zIndex: "99",
            marginLeft: "37%",
            marginTop: "10%",
            textShadow:
              "2px 2px 6px rgba(0, 0, 0, 0.7), 4px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          WEDDINGS
        </h1>
        <Carousel className="h-25 my-3">
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="d-block w-100"
              src={wedding1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -60px",
              }}
              className="d-block w-100"
              src={wedding2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -30px",
              }}
              className="d-block w-100"
              src={wedding3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <h1
          className="position-absolute text-center"
          style={{
            marginTop: "150px",
            fontSize: "5svw",
            zIndex: "99",
            marginLeft: "38%",
            textShadow:
              "2px 2px 6px rgba(0, 0, 0, 0.7), 4px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          BIRTHDAYS
        </h1>
        <Carousel className="h-25  my-3">
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -300px",
              }}
              className="d-block w-100"
              src={birthday1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
              className="d-block w-100"
              src={birthday2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -150px",
              }}
              className="d-block w-100"
              src={birthday3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <h1
          className="position-absolute text-center"
          style={{
            marginTop: "150px",
            fontSize: "5svw",
            zIndex: "99",
            marginLeft: "41%",
            textShadow:
              "2px 2px 6px rgba(0, 0, 0, 0.7), 4px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          DEBUTS
        </h1>
        <Carousel className="h-25 my-3">
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="d-block w-100"
              src={debut1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -150px",
              }}
              className="d-block w-100"
              src={debut2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -100px",
              }}
              className="d-block w-100"
              src={debut3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1
          className="position-absolute text-center"
          style={{
            marginTop: "150px",
            fontSize: "5svw",
            zIndex: "99",
            marginLeft: "35%",
            textShadow:
              "2px 2px 6px rgba(0, 0, 0, 0.7), 4px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          CONFERENCE
        </h1>
        <Carousel className="h-25 my-3">
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="d-block w-100"
              src={conference1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -150px",
              }}
              className="d-block w-100"
              src={conference2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="w-100">
            <img
              style={{
                height: "50vh",
                width: "100vh",
                objectFit: "cover",
                objectPosition: "0 -100px",
              }}
              className="d-block w-100"
              src={conference3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default PartyPlanner;
