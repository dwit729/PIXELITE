import React from 'react'
import EmployeeProfileNav from '../EmployeeComponents/EmployeeProfileNav'
import EmpEventTable from '../EmployeeComponents/EmployeeEventTable/EmpEventTable'

function EmployeeHome() {
  return (
    <div>
      <EmployeeProfileNav/>
      <h1 className='mt-5 text-center'>MY EVENTS</h1>
      <div className='m-5'>
        <EmpEventTable/>
      </div>
    </div>
  )
}

export default EmployeeHome
