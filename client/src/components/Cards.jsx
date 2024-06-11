import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import axios from "axios"; 
import { useEffect } from 'react';


function Cards() {

    
const [listOfClients, setListOfClients] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/clients").then((response)=>{
      setListOfClients(response.data)
    })

  }, [])

  return (
    <>
      <div className='d-flex p-5 mt-5 justify-content-around flex-wrap'>
        {listOfClients.map((value,key) =>{
          return(
            <>
            <Card style={{ width: '18rem' }} className='m-3'>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{value.client_email}</Card.Title>
                    <Card.Text>
                        {value.client_id}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
            </>
        )
        })}
      </div>
    </>

   
  );
}

export default Cards;