import Card from "react-bootstrap/Card";
import dwit from "./images/dwit.jpg/";
import pia from "./images/pia.jpg/";
import matt from "./images/matt.jpg/";
import mica from "./images/mica.jpg/";

function CardReview() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-around">
      <Card style={{ width: "18rem" }} className="my-5 mx-3">
        <Card.Img
          style={{
            height: "180px",
            width: "auto",
            objectFit: "cover",
            objectPosition: "0px -60px",
          }}
          variant="top"
          src={pia}
        />
        <Card.Body>
          <Card.Title>Sofia Ilustre</Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "clamp(10px, 1.2sww, 30px)" }}>
            "Having Pixelite as our photographer for my gig was a fantastic
            experience. They were punctual, friendly, and had a keen sense for
            capturing the right moments. The photos turned out great, with a
            good mix of staged shots and natural candids. Would definitely
            recommend!"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="my-5 mx-3">
        <Card.Img
          style={{
            height: "180px",
            width: "auto",
            objectFit: "cover",
            objectPosition: "1px -90px",
          }}
          variant="top"
          src={matt}
        />
        <Card.Body>
          <Card.Title>Matthew Martin</Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "clamp(10px, 1.2sww, 30px)" }}>
            "Pixelite did an incredible job with my casual outdoor photoshoot.
            The photos really captured our true selves and the joy we felt
            during the session. The final images were vibrant and full of life,
            exactly what we were hoping for. I was so happy with how everything
            turned out and will cherish these photos for years to come. Thank
            you, Pixelite!"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="my-5 mx-3">
        <Card.Img
          style={{
            height: "180px",
            width: "auto",
            objectFit: "cover",
            objectPosition: "center",
          }}
          variant="top"
          src={dwit}
        />
        <Card.Body>
          <Card.Title>Dwight Ciervo</Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "clamp(10px, 1.2sww, 30px)" }}>
            "They did an amazing job with our outdoor shoot! The photos look so
            natural and beautiful, capturing the essence of the surroundings
            perfectly. The were very professional, friendly, and made the whole
            experience enjoyable. The final images were delivered quickly and
            exceeded my expectations. I will definitely be booking Pixelite for
            future sessions."
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="my-5 mx-3">
        <Card.Img
          style={{
            height: "180px",
            width: "auto",
            objectFit: "cover",
            objectPosition: "0 -30px",
          }}
          variant="top"
          src={mica}
        />
        <Card.Body>
          <Card.Title>Micaella Silverio</Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "clamp(10px, 1.2sww, 30px)" }}>
            "Pixelite perfectly captured every moment of our wedding day. The
            photos are stunning and truly reflect the joy and love we felt. We
            are so impressed with their professionalism and beautiful work. The
            photos are amazing, Thank you!!"
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardReview;
