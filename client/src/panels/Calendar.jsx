import React from "react";
import ProfileNav from "../components/ProfileNav";
import ClientCalendar from "../components/Calendar/ClientCalendar";


function Calendar() {
  return (
    <div>
      <ProfileNav/>
      <ClientCalendar/>
    </div>
  );
}

export default Calendar;
