import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/PreviewPageStyle.css'

function PreviewPage() {
  return (
    <>
        <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center intro-container backgroundPreview">
        <Row>
            <Col>
            <h1 className="display-1">PIXEL<span className='one'>I</span><span className='two'>T</span><span className='three'>E</span></h1>
            </Col>
        </Row>
        <Row className="button-group">
            <Col>
            <Button variant="primary" size="lg" className="mx-2 custom-button custom-button-primary fw-bold" href='/home'>Client</Button>
            <Button variant="secondary" size="lg" className="mx-2 custom-button custom-button-secondary fw-bold"  href='/employee'>Employee</Button>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default PreviewPage
