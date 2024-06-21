import React from "react";
import ProfileNav from "../components/ProfileNav";
import Gallery from "../components/Gallery";
import Button from "react-bootstrap/esm/Button";
import Accordion from 'react-bootstrap/Accordion';



function Albums() {

  




  return (
    <>
          <div>
            <ProfileNav />
    <Accordion defaultActiveKey={['0']} alwaysOpen className="m-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>EVENT</Accordion.Header>
        <Accordion.Body>
              <div className="d-flex flex-column align-items-center mt-5 ">
                  <Gallery folderId={"17ObwstZPzCX9aTm_gyWA-yGTLKa11Zq_"}/>
                </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          
          </div>
    </>
  );
}

export default Albums;
