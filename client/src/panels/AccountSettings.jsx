import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ProfileNav from "../components/ProfileNav";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../Pixelite";
import axios from "axios";
import { Formik, Form as MikForm, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function AccountSettings() {

  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [username, setUserName] = useState("")


  let data = {
    client_id: String(localStorage.getItem("client_id"))
  }

  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_contact:""
  });



  useEffect(() => {
        axios.post("http://localhost:3001/auth/getuser", data).then((response)=>{
          setFormData({
            client_name: response.data.client_name,
            client_email:  response.data.client_email,
            client_contact: response.data.client_contact
          })
      })
  },[]);

  
  
  const [showPassword, setShowPassword] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true); //para sa disabled state

  const enableFields = () => {
    setIsDisabled(false); // Enable fields
  };

  const validationSchema = Yup.object().shape({
    client_email: Yup.string().required(),
    client_name: Yup.string().required(),
    client_contact: Yup.string().required(),
})

  const handleSubmit = (data) => {
    const submissionData = {
      ...data,
      client_id: localStorage.getItem("client_id"),
    };
    console.log(data)
    axios.put("http://localhost:3001/auth/updateaccount", submissionData).then((response) =>{
      setIsDisabled(true)
    })
  };


  return (
    <div id="main-container">
      <ProfileNav/>
      <div className='h-100 vh-100 d-flex justify-content-center align-items-start'>
            <div className='d-flex justify-content-center align-items-center bg-tertiary p-3 pt-5 w-50 rounded min-w-50' data-bs-theme='dark'
                    style={{
                         minWidth: "80vw"
                    }}>            
                <Formik initialValues={formData} enableReinitialize={true} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <MikForm className='w-75 d-flex flex-column'>
                      <h2>ACCOUNT SETTINGS</h2>
                      <label className="form-label my-3 " htmlFor="client_email">Name:</label>
                        <Field 
                            name="client_name" 
                            className="form-control"
                            autoComplete = "off"
                            disabled = {isDisabled}
                        />     
                        <ErrorMessage name='client_email' component="span" className='text-danger' />
                        
                        <label className="form-label my-3 " htmlFor="client_email">Email:</label>
                        <Field 
                            name="client_email" 
                            className="form-control"
                            autoComplete = "off"
                            disabled = {isDisabled}
                        />     
                        <ErrorMessage name='client_email' component="span" className='text-danger' />

                        <label className="form-label my-3" htmlFor="client_contact">Contact:</label>
                        <Field 
                            name="client_contact" 
                            className="form-control"
                            autoComplete = "off"
                            disabled = {isDisabled}
                        />
                        <ErrorMessage name='client_contact' component="span" className='text-danger'/> 
                        <ButtonGroup className="my-5">
                          <Button variant="outline-secondary" className="me-3" onClick={enableFields}>Edit</Button>
                          <Button variant="outline-success" type='submit'>Submit</Button>
                        </ButtonGroup> 
                    </MikForm>
                </Formik>
            </div>
        </div>
      </div>
  );
}

export default AccountSettings;
