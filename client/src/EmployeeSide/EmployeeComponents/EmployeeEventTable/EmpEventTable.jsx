import React from 'react'
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'
import {Col, FormGroup, FormLabel, Row,} from 'react-bootstrap'
import DatePickerField from '../../../components/DatePicker'
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
        accessorKey: 'event_id',
        header: 'Event ID'
    },
    {
        accessorKey: 'event_date',
        header: 'Date'
    },
    {
        accessorKey: 'event_address',
        header: 'Event Address'
    },
    {
        accessorKey: 'createdAt',
        header: 'Date Created'
    },
    {
        accessorKey: 'ClientClientId',
        header: 'Client ID'
    },

]

const u_data = {
    emp_id: String(localStorage.getItem("emp_id"))
  }
  


function EmpEventTable() {


    const [sampleState, setSampleState] = useState(false)
    const [tableData, setTableData] = useState([
      {
              event_id: "",
              event_date:"",
              event_address: "",
              createdAt: "",
              updatedAt: "",
              EventTypeTypeID: "",
              ClientClientId: "",
              client_name: ""
      }
    ])

    const [rowSelection, setRowSelection] = useState({});

    const[selectedRow, setSelectedRow] = useState({
      event_date: "2024-06-06"
    });
  
    
  useEffect(() => {
    axios.post("http://localhost:3001/events/emp_events", u_data).then((response) => {
        const inputArray = response.data
        setTableData(inputArray[0])
    })
    }, [sampleState])


    const validationSchema = Yup.object({
      event_date: Yup.string().required('Event Date is required'),
      event_address: Yup.string().required('Event Address is required'),
      EventTypeTypeId: Yup.string().required('Event Type is required'),
      ClientClientId: Yup.string().required('Client ID is required'),
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
      emp_id: String(localStorage.getItem("emp_id"))
    }
    delete submissionData.event_id
    console.log(submissionData)
    
    axios.post("http://localhost:3001/events/add", submissionData).then((response)=>{
      window.alert("Event Added")
      setSampleState(!sampleState)
    })
  }
  const updateApp = (values) => {
    const submissionData = {
      ...values,
    }
    delete submissionData.client_name
    delete submissionData.createdAt
    delete submissionData.updatedAt
    console.log(submissionData)
    try{
    axios.put("http://localhost:3001/events/update", submissionData).then((response)=>{
      window.alert("Event Updated")
      console.log(response.data)
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
    delete submissionData.event_address
    delete submissionData.app_date
    delete submissionData.ClientClientId


    console.log(submissionData)
    try{
    axios.post("http://localhost:3001/events/delete", submissionData).then((response)=>{
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
    <h1 className='text-center'>EVENT DETAILS</h1>
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
              <FormLabel htmlFor="ClientClientId">Client ID:</FormLabel>
              <Field type="text" name="ClientClientId" className="form-control" />
              <ErrorMessage name="ClientClientId" component="div" className="text-danger"/>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="event_address">Event Address:</FormLabel>
              <Field type="text" name="event_address" className="form-control" />
              <ErrorMessage name="event_address" component="div" className="text-danger" />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="EventTypeTypeId">Event Type:</FormLabel>
              <Field type="text" name="EventTypeTypeId" className="form-control" />
              <ErrorMessage name="EventTypeTypeId" component="div" className="text-danger" />
            </FormGroup>


            <DatePickerField
              name="event_date"
              value={values.event_date}
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
                  Add Event
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

export default EmpEventTable
