import React from 'react'
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import brand_img from '../assets/nav_brand.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg" fixed='top' className='shadow sh'>
            <Container>
                <Navbar.Brand as={Link} to="/" aria-label="Weather App">
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
                        <Nav.Link as={Link} to="/">Home</Nav.Link>  {/* Link to Home */}
                        <Nav.Link as={Link} to="/about">About</Nav.Link>  {/* Link to About Page */}
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>  {/* Link to Contact Page */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar