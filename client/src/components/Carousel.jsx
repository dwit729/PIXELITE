import Carousel from "react-bootstrap/Carousel";
import grad from "./images/grad.jpg/";
import birthday from "./images/birthday_.jpg/";
import photobooth from "./images/photobooth.jpg/";

function ImgCarousel() {
  return (
    <div>
      <Carousel className="m-5 ">
        <Carousel.Item>
          <img
            style={{
              width: 100,
              height: "50vh",
              objectFit: "cover",
            }}
            className="d-block w-100"
            src={grad}
            alt="First slide"
          />
          <Carousel.Caption className="text-white ">
            <h3 style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 1.2)" }}>
              Graduation Photoshoot
            </h3>
            <p style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 1.2)" }}>
              Celebrate your academic achievements with our professional
              graduate photoshoot services!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              width: 100,
              height: "50vh",
              objectFit: "cover",
              objectPosition: "top",
            }}
            className="d-block w-100"
            src={birthday}
            alt="Second slide"
          />
          <Carousel.Caption className="text-white ">
            <h3 style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 1.2)" }}>
              Event and Party Planning Services
            </h3>
            <p style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 1.2)" }}>
              Make your special occasions unforgettable with our professional
              event and party planning services. Whether it’s a birthday,
              wedding, corporate event, or any other celebration, we handle
              every detail to ensure a seamless and memorable experience.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              width: 100,
              height: "50vh",
              objectFit: "cover",
              objectPosition: "0px -150px",
            }}
            className="d-block w-100"
            src={photobooth}
            alt="Third slide"
          />
          <Carousel.Caption className="text-white position-absolute top-0 end-10">
            <h3 style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 1.5)" }}>
              Event Equipment Rental Services
            </h3>
            <p style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 1.5)" }}>
              Elevate your event with our top-quality equipment rental services!
              Whether you're planning a wedding, corporate event, birthday
              party, or any other special occasion, we offer a wide range of
              equipment to ensure your event is a success. From audiovisual gear
              to tents and furniture, we've got everything you need.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
