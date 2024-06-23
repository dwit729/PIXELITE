import React from 'react'
import {Formik, Form as MikForm, Field, ErrorMessage} from "formik";
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';

function EmployeeLogin() {

    const loginInitialValues = {
        emp_id:"",
        emp_password:"",
    };
 
    let navigate = useNavigate();

    const loginOnSubmit = (data) =>{
        try{

            axios.post("http://localhost:3001/employee/login", data).then((response)=>{

                if(response.data.error){
                    window.alert(response.data.error)
                }
                else{

                    window.alert("EMPLOYEE IS GOING TO BE LOGGED IN")
                    localStorage.setItem("emp_id", response.data.emp_id)
                    navigate("/employee/home")
                    
                }
              })

        }
        catch(e)
        {
            console.log(e)
            window.alert("WRONG CREDENTIALS")
        }
    };


    const validationSchema = Yup.object().shape({
        emp_id: Yup.string().required(),
        emp_password: Yup.string().min(8).max(20).required(),
    })

    return (
    <>     
            <h1 onClick={()=>{navigate("/")}} className='mt-5 text-center'>PIXEL<span className='one'>I</span><span className='two'>T</span><span className='three'>E</span> EMPLOYEE SIDE</h1>      
            <div className='d-flex justify-content-center align-items-center bg-tertiary p-3 pt-5 w-50 rounded min-w-50 border border-white mx-auto mt-5' data-bs-theme='light'
                    style={{
                         minWidth: "400px"
                    }}>
                         
                <Formik initialValues={loginInitialValues} onSubmit={loginOnSubmit} validationSchema={validationSchema}>
                    <MikForm className='w-75 d-flex flex-column'>
                        <h2>EMPLOYEE LOGIN</h2>
                        <label className="form-label my-3 " htmlFor="emp_id">Employee Code:</label>
                     
                        <Field 
                            id="emp_id" 
                            name="emp_id" 
                            placeholder="Enter Employee Code" 
                            className="form-control"
                        />     
                        <ErrorMessage name='emp_id' component="span" className='text-danger' />
            
                        <label className="form-label my-3" htmlFor="emp_password">Password:</label>
                        <Field 
                            id="emp_password"
                            type="password" 
                            name="emp_password" 
                            placeholder="Enter Password" 
                            className="form-control"
                        />
                        <ErrorMessage name='emp_password' component="span" className='text-danger'/>  
                        <Button className='my-4 w-100 btn-info fw-bold color-secondary' type='submit'>LOGIN</Button>
                    </MikForm>
                </Formik>
            </div>
       
    </>
  )
}

export default EmployeeLogin
