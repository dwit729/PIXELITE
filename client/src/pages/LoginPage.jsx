import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CardBody from 'react-bootstrap/esm/CardBody'
import NavBar from '../components/MainNavbar'
import {Formik, Form as MikForm, Field, ErrorMessage} from "formik";
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import * as Yup from 'yup';





function LoginPage() {

    const loginInitialValues = {
        client_email:"",
        client_password:"",
    };


    const loginOnSubmit = (data) =>{
        axios.post("http://localhost:3001/auth/login", data).then((response)=>{
            console.log(response.data)
          })
    };


    const validationSchema = Yup.object().shape({
        client_email: Yup.string().required(),
        client_password: Yup.string().min(8).max(20).required(),
    })

    return (
    <>
        <NavBar></NavBar>
        <div className='h-100 vh-100 d-flex justify-content-center align-items-center'>
        
            <div className='d-flex justify-content-center align-items-center bg-tertiary p-3 pt-5 w-50 rounded min-w-50 border border-white' data-bs-theme='light'
                    style={{
                         minWidth: "400px"
                    }}>            
                <Formik initialValues={loginInitialValues} onSubmit={loginOnSubmit} validationSchema={validationSchema}>
                    <MikForm className='w-75 d-flex flex-column'>
                        <h2>CLIENT LOGIN</h2>
                        <label className="form-label my-3 " for="client_email">Email:</label>
                     
                        <Field 
                            id="client_email" 
                            name="client_email" 
                            placeholder="Enter Email" 
                            className="form-control"
                        />     
                        <ErrorMessage name='client_email' component="span" className='text-danger' />
            
                        <label className="form-label my-3" for="client_password">Password:</label>
                        <Field 
                            id="client_email"
                            type="password" 
                            name="client_password" 
                            placeholder="Enter Password" 
                            className="form-control"
                        />
                        <ErrorMessage name='client_password' component="span" className='text-warning'/>  
                        <Button className='my-4 w-100 btn-info fw-bold color-secondary' type='submit'>LOGIN</Button>
                    </MikForm>
                </Formik>
            </div>
        </div>
    </>
  )
}

export default LoginPage
