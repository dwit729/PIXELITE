import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ProfileNav from "../components/ProfileNav";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useState } from "react";

function AccountSettings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isDisabled, setIsDisabled] = useState(true); //para sa disabled state

  const enableFields = () => {
    setIsDisabled(false); // Enable fields
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
    setIsDisabled(true); //para madisable after submit
  };

  return (
    <div id="main-container">
      <ProfileNav />
      <div id="form-container">
        <Form className="m-5" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Control
                type="text"
                placeholder="Alice Guo"
                disabled={isDisabled}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="walang _Nanay@example.com"
                disabled={isDisabled}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                disabled={isDisabled}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="sa Farm St. " disabled={isDisabled} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control disabled={isDisabled} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control disabled={isDisabled} />
            </Form.Group>
          </Row>

          <ButtonToolbar className="d-flex gap-2 mt-5">
            <ButtonGroup className="me-2">
              <Button variant="outline-secondary" onClick={enableFields}>
                Edit
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2">
              <Button type="submit" variant="outline-success">
                Submit
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>
    </div>
  );
}

export default AccountSettings;
