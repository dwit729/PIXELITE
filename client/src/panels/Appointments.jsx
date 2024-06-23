import React from "react";
import ProfileNav from "../components/ProfileNav";
import AppointmentTable from "../components/AppointmentTable/AppointmentTable";
import AppointmentCalendar from "../components/Calendar/AppointmentCalendar";

function Appointments() {
  return (
    <div>
      <ProfileNav/>
      <h1 className="text-center mt-3">APPOINTMENT CALENDAR</h1>
      <AppointmentCalendar className="mx-0"/>
      <hr/>
      <h1 className="text-center">APPOINTMENT TABLE</h1>
      <div className="m-5">
         <AppointmentTable/>
      </div>
      
     
    </div>
  );
}

export default Appointments;
