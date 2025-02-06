import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import img1 from '../assets/carousal-img-1.png';
import img2 from '../assets/carousal-img-2.png';
import img3 from '../assets/carousal-img-3.png';
import img4 from '../assets/carousal-img-4.png';
import "../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-hero d-flex align-items-center mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-section mb-5 mt-5">
            <h1 className="fw-bold display-4 text-dark">About Us</h1>
            <p className="lead text-black">
              Welcome to the Weather App, your trusted source for accurate and
              real-time weather information. Plan your day with confidence.
            </p>
            <Button variant="primary" className="w-40 w-md-auto mt-3">
              Learn More
            </Button>
          </Col>
          
          <Col md={6}>
          <Carousel interval={1500} className="shadow-lg rounded overflow-hidden">
            {[img1, img2, img3, img4].map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} style={{ objectFit: "cover" }} />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
                  <h5>Weather Insights</h5>
                  <p>Get the latest updates and plan your day accordingly.</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
