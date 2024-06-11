import { useState } from 'react'
import axios from "axios"; 
import { useEffect } from 'react';

function App() {
const [listOfClients, setListOfClients] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/clients").then((response)=>{
      setListOfClients(response.data)
    })

  }, [])

  
  return (
    <>
      <div className='App'>
        {listOfClients.map((value,key) =>{
          return(
            <>
            <div className='post'>
            {value.client_id}
            </div>

            <div className='post'>
            {value.client_email}
            </div>
            </>
        )
        })}
      </div>
      <div className='container'>
      
      </div>
    </>
  );
}

export default App
