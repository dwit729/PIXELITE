import React from "react";
import MainNavbar from "../components/MainNavbar.jsx";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <div>
      <MainNavbar />

      <Container className="p-2">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="w-200, h-500, m-5">
            <Image
              style={{
                height: "500px",
                width: "50vh",
                objectFit: "cover",
              }}
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8fDE2OTQyNTA5MDd8MA&ixlib=rb-4.0.3&fm=jpg&w=6000&h=4000&fit=max"
              rounded
            />
          </div>
          <div
            style={{ width: "650px", height: "auto", textAlign: "center" }}
            className="m-5"
          >
            <h1 style={{ fontSize: "5rem" }} className="pt-5">
              Hi Pixels!
            </h1>
            <p
              style={{
                textIndent: "3em",
                lineHeight: "1.5",
                fontSize: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum porttitor blandit enim sed faucibus. Sed et nibh
              rutrum, congue odio aliquam, suscipit nisi. Aenean libero nisi,
              dapibus sit amet mollis ut, vestibulum eget tellus. Cras
              sollicitudin, sapien vitae luctus ullamcorper, quam ante rhoncus
              urna, malesuada vehicula nisl augue at quam. Curabitur faucibus
              lorem quis convallis volutpat. Nulla est ipsum, feugiat
              condimentum nunc nec, luctus dignissim tellus. Curabitur lobortis
              tincidunt ante. Fusce rutrum elit semper nunc iaculis, ut
              tincidunt ipsum vulputate. Sed ut ipsum diam. Sed id sagittis
              magna. Vivamus vitae ex vitae velit varius aliquet placerat eu
              dolor. Morbi lobortis tellus est, non pulvinar sapien congue nec.
              Pellentesque vehicula mattis magna, in finibus ex. Sed fermentum,
              orci id convallis sagittis, sapien ante mollis lectus, quis mattis
              nulla metus eu odio.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;

{
  /* <div className="w-500, h-200, d-flex flex-row-reverse">
            <Image
              style={{
                height: "300px",
                width: "100vh",
                objectFit: "cover",
                margin: "-90px 20px 40px 0",
              }}
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8fDE2OTQyNTA5MDd8MA&ixlib=rb-4.0.3&fm=jpg&w=6000&h=4000&fit=max"
              rounded
            />
          </div> */
}
