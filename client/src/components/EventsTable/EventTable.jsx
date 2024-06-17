import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/events`);
      setEvents(response.data);
      console.log(events)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  return (
    <div>
      <h1>Event Table</h1>

      <table className='Table'>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Date</th>
            <th>Event Address</th>
            <th>Client ID</th>
          </tr>
        </thead>
        <tbody>
          {events?.map(eventdata => (
            <tr key={eventdata.event_id}>
              <td>{eventdata.event_id}</td>
              <td>{eventdata.event_date}</td>
              <td>{eventdata.event_address}</td>
              <td>{eventdata.ClientCLientId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
