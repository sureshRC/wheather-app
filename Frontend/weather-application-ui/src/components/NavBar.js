import React from 'react'
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import brand_img from '../assets/nav_brand.png'

const NavBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#" aria-label="Weather App">
                    <Container >
                        <Row className='gx-0 d-flex align-items-center gap-2'>
                            <Col xs="auto">
                                <Image src={brand_img} fluid width="50px" alt="Weather App logo"/>
                            </Col>
                            <Col className='text-center'>
                                <span className='fw-bold'>Weather App</span>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar