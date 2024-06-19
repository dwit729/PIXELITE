import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import NavBar from "../components/MainNavbar";
import StudioRentalP from "../components/images/StudioP.jpg";
import PortraitP from "../components/images/PortraitP.jpg";
import FamilyP from "../components/images/FamilyP.jpg";

export default function Photoshoot() {
  return (
    <section id="body" className="body-block">
      <NavBar />

      <Container fluid>
        <div className="d-flex flex-column align-items-center">
          <h2 className="display-1">PHOTOSHOOT</h2>
          <div className="subtitle">Capturing Moments, Creating Memories</div>
        </div>
        <Col>
          <div
            className="d-flex flex-row flex-wrap justify-content-center align-items-center"
            sm={4}
          >
            <div className="m-2">
              <Card className="m-2" style={{ width: "450px", height: "590px" }}>
                <Card.Img
                  style={{ width: "auto", height: "300px", objectFit: "cover" }}
                  variant="top"
                  className="img-fluid img-thumbnail"
                  src={StudioRentalP}
                />
                <Card.Body>
                  <p>In Studio</p>
                  <Card.Title>Studio Rental</Card.Title>
                  <Card.Text>
                    Studio rentals typically refer to spaces that are leased out
                    for various creative or professional purposes. These studios
                    can vary widely in size and configuration, catering to
                    different needs such as photography, art, music, dance,
                    film, and more.
                  </Card.Text>
                  <a href="#" className="btn btn-primary">
                    Book now <i class="fas fa-chervon-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="m-2">
              <Card className="m-2" style={{ width: "450px", height: "590px" }}>
                <Card.Img
                  style={{ width: "auto", height: "300px", objectFit: "cover" }}
                  variant="top"
                  className="img-fluid img-thumbnail"
                  src={PortraitP}
                />
                <Card.Body>
                  <p>In Studio</p>
                  <Card.Title>Portraiture</Card.Title>
                  <Card.Text>
                    Portraiture, in the realm of visual arts, is the art of
                    creating portraits, typically focusing on capturing the
                    likeness, personality, and mood of a person or group of
                    people through various mediums such as painting,
                    photography, sculpture, or even digital art.
                  </Card.Text>
                  <a href="#" className="btn btn-primary">
                    Book now <i class="fas fa-chervon-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <div className="m-2">
              <Card className="m-2" style={{ width: "450px", height: "590px" }}>
                <Card.Img
                  style={{ width: "auto", height: "300px", objectFit: "cover" }}
                  variant="top"
                  className="img-fluid img-thumbnail"
                  src={FamilyP}
                />
                <Card.Body>
                  <p>In Studio</p>
                  <Card.Title>Family Bundle</Card.Title>
                  <Card.Text>
                    Our family bundle is the perfect solution for creating
                    memorable moments and convenience for your entire family.
                    Tailored to meet the diverse needs of every member, our
                    bundle includes a range of products and services that
                    enhance family life.
                  </Card.Text>
                  <a href="#" className="btn btn-primary">
                    Book now <i class="fas fa-chervon-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
}
