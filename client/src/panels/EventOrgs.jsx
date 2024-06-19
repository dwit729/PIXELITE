import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import initialP from "../components/images/initialP.jpg";
import photoshoot from "../components/images/photo-shoot.png";
import manP from "../components/images/manP.jpg";
import NavBar from "../components/MainNavbar";

function EventOrgs() {
  return (
    <div>
      <NavBar />
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <div className="d-flex align-items-center">
          <Col>
            <h1 style={{ textAlign: "center" }} className="m-3">
              PARTY PLANNERS
            </h1>
            <p className=" w-100  text-white text-center">
              Event organizers begin by meeting with clients to understand their
              event goals, budget, timeline, and any specific requirements. They
              may also conduct research to determine the feasibility and scope
              of the event. Overall, event organizers play a crucial role in
              bringing events to life, ensuring they are executed flawlessly
              while delivering memorable experiences for attendees and achieving
              the desired outcomes for their clients or organizations, Their
              expertise and dedication contribute significantly to the success,
              and reputation of the events they manage.{" "}
            </p>
          </Col>
          <Col xs={6} md={4}>
            <div style={{ width: "auto", height: "300px" }}>
              <img
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="m-3 rounded h-100 w-100"
                src={photoshoot}
              />
            </div>
          </Col>
        </div>

        <div style={{ height: "350px" }} className="d-flex align-items-center">
          <Col xs={6} md={4}>
            <h1 style={{ textAlign: "center" }}>EVENT </h1>
            <p className="p-2  text-center">
              During the event, organizers supervise all activities to ensure
              that everything proceeds according to plan. They handle any issues
              or emergencies that arise, coordinate with vendors and staff, and
              manage attendee registration and hospitality.
            </p>
          </Col>
          <Col>
            <div style={{ width: "auto", height: "260px" }}>
              <img
                style={{ objectFit: "cover", objectPosition: "center bottom" }}
                className="m-3 h-100 w-100 rounded"
                src={initialP}
              />
            </div>
          </Col>
          <Col xs={6} md={4} className="m-5 justify-content-center">
            <h1 style={{ textAlign: "center" }}>ORGANIZER</h1>
            <p className="p-2  text-center">
              Based on the client's needs and preferences, organizers develop a
              concept or theme for the event. This includes choosing a venue
              that fits the theme and meets logistical requirements.
            </p>
          </Col>
        </div>

        <div
          style={{ height: "350px" }}
          className="d-flex align-content-center"
        >
          <Col xs={12} md={8}>
            <h1 style={{ textAlign: "center" }}>PHOTOGRAPHER</h1>
            <p className="w-100 p-2 text-center">
              Choosing the right photographer involves a thoughtful process of
              research, communication, and collaboration to ensure that they can
              effectively capture the essence of your event or project while
              meeting your expectations and delivering memorable results.
              Maintain open communication with the photographer leading up to
              the event or session. Provide necessary details, such as
              schedules, locations, and any specific shots or moments you want
              captured. Discuss any changes or updates as they arise. After the
              event or project, evaluate the photographer’s performance based on
              the quality of images delivered, adherence to timelines,
              professionalism, and overall experience. Provide constructive
              feedback to help them improve and consider sharing your positive
              experience through reviews or referrals.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <div style={{ width: "auto", height: "auto" }}>
              <img
                style={{ objectFit: "cover" }}
                className=" m-3 rounded h-100 w-100"
                src={manP}
              />
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default EventOrgs;
