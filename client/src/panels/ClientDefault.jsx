import React from "react";
import ProfileNav from "../components/ProfileNav.jsx";
import EventTable from "../components/EventsTable/EventTable.jsx";

function ClientDefault() {
  return (
    <div>
      <ProfileNav />
      <h1 className="text-center mt-3">MY EVENTS</h1>
      <div className="m-5">
        <EventTable/>
      </div>
      
    </div>
  );
}

export default ClientDefault;
