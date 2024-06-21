import React from 'react'
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'
import Button from 'react-bootstrap/esm/Button'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'
import columnDef from './columns'
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useEffect, useState, useMemo } from "react";



const u_data = {
  client_id: String(localStorage.getItem("client_id"))
}

console.log(u_data)





const EventTable =() =>  {

  const [tableData, setTableData] = useState([
    {
      event_id: "",
			event_date:"",
			event_address: "",
			createdAt: "",
			updatedAt: "",
			ClientClientId: "",
			EventTypeTypeId: "",
			client_name: ""
    }
  ])

  useEffect(() => {

    axios.post("http://localhost:3001/events/joined_events", u_data).then((response) => {
        const inputArray = response.data
        setTableData(inputArray[1])
    })
    }, [])


  


  const tableInstance = useReactTable({
      columns: columnDef,
      data: tableData,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel()
    });

  
  return (
    <>
    <Table striped bordered hover>
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
          <Button variant='outline-info' onClick={() => {tableInstance.nextPage()}}>Next</Button>
        </ButtonGroup>
    </div>

    
    </>
  )
}

export default EventTable
