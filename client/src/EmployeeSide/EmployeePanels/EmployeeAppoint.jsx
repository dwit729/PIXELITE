import React from 'react'
import EmployeeProfileNav from '../EmployeeComponents/EmployeeProfileNav'
import EmployeeAppointmentTable from '../EmployeeComponents/EmployeeAppointmentTable/EmployeeAppointmentTable'

function EmployeeAppoint() {
  return (
    <>
    <div>
        <EmployeeProfileNav/>
        <h1 className='mt-5 text-center'>ASSIGNED APPOINTMENTS</h1>
        <div className='m-5'>
           <EmployeeAppointmentTable/>
        </div>
       
    </div>
    </>
  )
}

export default EmployeeAppoint
