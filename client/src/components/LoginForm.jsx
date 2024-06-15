import React from 'react'
import {Formik, Form as MikForm, Field, ErrorMessage} from "formik";
import Button from 'react-bootstrap/esm/Button';



function LoginForm() {
  return (
    <div data-bs-theme="light">
        <Formik>
            <MikForm>
                <label className="form-label my-3" for="client_email">Email:</label>
                <Field 
                    id="client_email" 
                    name="client_email" 
                    placeholder="Enter Email" 
                    className="form-control"
                />     
                
    
                <label className="form-label my-3" for="client_password">Password:</label>
                <Field 
                    id="client_email"
                    type="password" 
                    name="client_email" 
                    placeholder="Enter Password" 
                    className="form-control"
                />  
                <Button className='my-4 w-100 btn-info fw-bold' type='submit'>LOGIN</Button>
            </MikForm>
        </Formik>
    </div>
  )
}

export default LoginForm
