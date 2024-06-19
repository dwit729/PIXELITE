
import moment from "moment";
import Calendar from "./Calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useEffect, useState } from "react";
import axios from "axios";


const u_data = {
  client_id: String(localStorage.getItem("client_id"))
}

console.log(u_data)

export default function ClientCalendar() {

    const [events, setEvents] = useState([
        {
            start: "",
            end: "",
            title: "",
        }
    ]);

    useEffect(() => {
      axios.post("http://localhost:3001/events/getuser_events", u_data).then((response) => {
        const inputArray = response.data
        let outArray = []
        for (let index = 0; index < inputArray.length; index++) {
          outArray.push({
            start: inputArray[index].event_date,
            end: inputArray[index].event_date,
            title: inputArray[index].event_address,
          })
        }

        console.log(outArray)
        setEvents(outArray)

        console.log(events)
        

      })
    }, [])
    

  return(
    <>
        <div className="m-5 rounded p-3" style={{height: "80vh", backgroundColor: "white", color: "black"} }>
             <Calendar events={events} 
                selectable
                
             />;
        </div>
       
    </>
  ) 
}
