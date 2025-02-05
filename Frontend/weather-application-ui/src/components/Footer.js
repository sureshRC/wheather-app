import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-white text-center py-5">
            <Container>
                <p className="mb-0">Weather App © {new Date().getFullYear()} | Developed by Suresh</p>
            </Container>
        </footer>
    </>
  )
}

export default Footer