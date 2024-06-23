import React from 'react'
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'
import {Col, FormGroup, FormLabel, Row,} from 'react-bootstrap'
import DatePickerField from '../DatePicker'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import Button from 'react-bootstrap/esm/Button'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { FormCheck } from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css';

const columnDef = [
  {
      id: 'select-col',
      header: "Select",
      cell: ({ row }) => (
        <FormCheck
          type="checkbox"
          checked={row.getIsSelected()} 
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
  {
      accessorKey: 'app_id',
      header: 'Event ID'
  },
  {
      accessorKey: 'app_date',
      header: 'Date'
  },
  {
      accessorKey: 'app_address',
      header: 'Address'
  },
  {
      accessorKey: 'client_name',
      header: 'Client Name'
  }
]


const u_data = {
  client_id: String(localStorage.getItem("client_id"))
}

console.log(u_data)




const AppointmentTable =() =>  {

  const [sampleState, setSampleState] = useState(false)
  const [tableData, setTableData] = useState([
    {
      app_id: "",
			app_date:"",
			app_address: "",
			createdAt: "",
			updatedAt: "",
			ClientClientId: "",
			client_name: ""
    }
  ])

  const [rowSelection, setRowSelection] = useState({});

  const[selectedRow, setSelectedRow] = useState({
    app_date: "2024-06-06"
  });


  useEffect(() => {
    axios.post("http://localhost:3001/appointments/joined_appointments", u_data).then((response) => {
        const inputArray = response.data
        setTableData(inputArray[1])
    })
    }, [sampleState])


    const validationSchema = Yup.object({
      app_id: Yup.string().required('App ID is required'),
      app_address: Yup.string().required('App Address is required'),
    });

  const tableInstance = useReactTable({
      columns: columnDef,
      data: tableData,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onRowSelectionChange:setRowSelection,
      state: {
        rowSelection: rowSelection,
      },
      enableRowSelection: true,
      enableMultiRowSelection: false,
      
    });

  const createApp = (values) => {
    const submissionData = {
      ...values,
      ClientClientId: String(localStorage.getItem("client_id"))
    }
    delete submissionData.client_name
    delete submissionData.app_id
    delete submissionData.createdAt
    delete submissionData.updatedAt
    console.log(submissionData)
    
    axios.post("http://localhost:3001/appointments/add", submissionData).then((response)=>{
      window.alert("Appointment Added")
      setSampleState(!sampleState)
    })
  }
  const updateApp = (values) => {
    const submissionData = {
      ...values,
      ClientClientId: String(localStorage.getItem("client_id"))
    }
    delete submissionData.client_name
    delete submissionData.createdAt
    delete submissionData.updatedAt
    console.log(submissionData)
    try{
    axios.put("http://localhost:3001/appointments/update", submissionData).then((response)=>{
      window.alert("Appointment Updated")
      setSampleState(!sampleState)
    })
    }
    catch(err){
        console.log(err)
    }

  }
  const deleteApp = (values) => {
    const submissionData = {
      ...values,
    }
    delete submissionData.client_name
    delete submissionData.createdAt
    delete submissionData.updatedAt
    delete submissionData.app_address
    delete submissionData.app_date
    delete submissionData.ClientClientId


    console.log(submissionData)
    try{
    axios.post("http://localhost:3001/appointments/delete", submissionData).then((response)=>{
      window.alert("Appointment Canceled")
      setSampleState(!sampleState)
    })
    }
    catch(err){
        console.log(err)
    }
  }


  return (
    <>
    <Table striped bordered hover onClickCapture={() => {
        try{
          setSelectedRow(tableInstance.getSelectedRowModel().flatRows[0].original)
          console.log(selectedRow)
        }
        catch(err){
        }}}>
      <thead>
        {tableInstance.getHeaderGroups().map((headerElement)=>{
            return <tr key={headerElement.id}>
            {headerElement.headers.map(columnElement =>{
              return <th key={columnElement.id} colSpan={columnElement.colSpan}>
                {
                  flexRender(
                    columnElement.column.columnDef.header,
                    columnElement.getContext()
                  )
                }
              </th>
            })}</tr>
        })}
      </thead>
      <tbody>
          {tableInstance.getRowModel().rows.map(rowElement =>{
            return <tr key={rowElement.id}>
              {rowElement.getVisibleCells().map(cellElement => {
                return <td key={cellElement.id}> 
                  {flexRender(cellElement.column.columnDef.cell, cellElement.getContext())}</td>
              })}
            </tr>
          })}
      </tbody>
    </Table>
    <hr/>
    <div className='d-flex flex-row justify-content-center'>
        <ButtonGroup className='gap-2'>
          <Button variant='outline-info' onClick={() => {tableInstance.previousPage()}}>Previous</Button>
          <Button variant='outline-info' onClick={() => {tableInstance.nextPage()}} >Next</Button>
        </ButtonGroup>
    </div>
    <hr/>
    <h1 className='text-center'>APPOINTMENT DETAILS</h1>
    <div className="m-5">
    <Formik
      enableReinitialize={true}
      initialValues={selectedRow}
      validationSchema={validationSchema}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue
        } = props;
        return (
          <form  className='d-flex flex-column gap-3'>

            <FormGroup>
              <FormLabel htmlFor="app_address">App Address:</FormLabel>
              <Field type="text" name="app_address" className="form-control" />
              <ErrorMessage name="app_address" component="div" />
            </FormGroup>

            <DatePickerField
              name="app_date"
              value={values.app_date}
              onChange={setFieldValue}
            />
            <ButtonGroup className='gap-3'>
              <Button
                  className='fw-bold'
                  onClick={() => {deleteApp(props.values)}}
                  variant='warning'
                >
                  Delete
                </Button>
                <Button
                  className='fw-bold'
                  onClick={() => {updateApp(props.values)}}
                  variant='info'
                >
                  Update
                </Button>
                <Button
                  variant='primary'
                  className='fw-bold tex' 
                  onClick={() => {createApp(props.values)}}
                  disabled={isSubmitting}>
                  Add Appointment
                </Button>
            </ButtonGroup>

          </form>
        );
      }}
    </Formik>
  </div>
    </>
  )
}

export default AppointmentTable
