import React from "react";
import ProfileNav from "../components/ProfileNav";
import Gallery from "../components/Gallery";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const u_data = {
  client_id: String(localStorage.getItem("client_id"))
}

function Albums() {

  const [folders, setFolders] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
          await axios.post(`http://localhost:3001/mail/getuser_photos`, u_data).then((response)=>{
          setFolders(response.data);
        })
        
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, [u_data]);




  return (
    <>
          <div>
            <ProfileNav />
            <h1 className="text-center mt-3">MY ALBUMS</h1>
              <Accordion alwaysOpen className="m-5">
              {
                  folders.map(((folder, index) => (
                    <div>
                      
                      <Accordion.Item eventKey={index}>
                            <Accordion.Header>{folder.mail_folder_name}</Accordion.Header>
                            <Accordion.Body>
                                  <div className="d-flex flex-column align-items-center mt-5 ">
                                      <Gallery folderId={folder.mail_folder_id}/>
                                    </div>
                            </Accordion.Body>
                          </Accordion.Item>
                    </div>
                  )))

              }
                
              </Accordion>
          
          </div>
    </>
  );
}

export default Albums;
