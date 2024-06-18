import React from "react";
import { Formik, Form as MikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/esm/Button";
import NavBar from "../components/MainNavbar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import axios from "axios";

function Register() {
  const loginInitialValues = {
    client_fName: "",
    client_lName: "",
    client_name: "",
    client_contact: "",
    client_email: "",
    client_password: "",
    client_passwordConfirm: "",
  };

  const loginOnSubmit = (data) => {
    const fullName = `${data.client_fName} ${data.client_lName}`;
    const submissionData = {
      ...data,
      client_name: fullName,
    };
    delete submissionData.client_passwordConfirm;
    delete submissionData.client_fName;
    delete submissionData.client_lName;

    axios.post("http://localhost:3001/auth/signup", submissionData).then((response)=>{
      console.log(response.data)
    }).then(() =>{
      window.alert("CLIENT REGISTERED")
    })
  };

  const validationSchema = Yup.object().shape({
    client_fName: Yup.string().required(),
    client_lName: Yup.string().required(),
    client_contact: Yup.string().max(11).required(),
    client_email: Yup.string().required(),
    client_password: Yup.string().min(8).max(20).required(),
    client_passwordConfirm: Yup.string()
      .oneOf([Yup.ref("client_password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  return (
    <>
    <div>
      <NavBar></NavBar>
      <div className="h-100 d-flex justify-content-center align-items-center mt-5">
        <div
          className="d-flex justify-content-center align-items-center bg-tertiary p-3 pt-5 w-50 rounded min-w-50 border border-white"
          data-bs-theme="light"
          style={{
            minWidth: "400px",
          }}
        >
          <Formik
            initialValues={loginInitialValues}
            onSubmit={loginOnSubmit}
            validationSchema={validationSchema}
          >
            <MikForm className="w-75 d-flex flex-column">
              <h2>CLIENT REGISTER</h2>
              <Row>
                <Col>
                  <label className="form-label my-3 " for="client_fName">
                    First Name:
                  </label>

                  <Field
                    id="client_fName"
                    name="client_fName"
                    type="text"
                    placeholder="Enter First Name"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="client_fName"
                    component="span"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <label className="form-label my-3 " for="client_lName">
                    Last Name:
                  </label>

                  <Field
                    id="client_lName"
                    name="client_lName"
                    type="text"
                    placeholder="Enter Last Name"
                    className="form-control"
                  />

                  <ErrorMessage
                    name="client_lName"
                    component="span"
                    className="text-danger"
                  />
                </Col>
              </Row>

              <label className="form-label my-3 " for="client_email">
                Email:
              </label>

              <Field
                id="client_email"
                name="client_email"
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
              <ErrorMessage
                name="client_email"
                component="span"
                className="text-danger"
              />
              <label className="form-label my-3 " for="client_email">
                Contact Number:
              </label>

              <Field
                id="client_contact"
                name="client_contact"
                type="text"
                placeholder="Enter Contact Number"
                className="form-control"
              />
              <ErrorMessage
                name="client_contact"
                component="span"
                className="text-danger"
              />

              <label className="form-label my-3" for="client_password">
                Password:
              </label>
              <Field
                id="client_password"
                type="password"
                name="client_password"
                placeholder="Enter Password"
                className="form-control"
              />
              <ErrorMessage
                name="client_password"
                component="span"
                className="text-warning"
              />
              <label className="form-label my-3" for="client_password">
                Confirm Password:
              </label>
              <Field
                id="client_passwordConfirm"
                type="password"
                name="client_passwordConfirm"
                placeholder="Confirm Password"
                className="form-control"
              />
              <ErrorMessage
                name="client_passwordConfirm"
                component="span"
                className="text-warning"
              />
              <Button
                className="my-5 w-100 btn-info fw-bold color-secondary"
                type="submit"
              >
                REGISTER
              </Button>
            </MikForm>
          </Formik>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
