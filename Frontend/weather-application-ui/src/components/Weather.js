import React, { useState } from 'react'
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { WiDaySunny, WiCloudy, WiRain, WiFog, WiWindy } from "react-icons/wi";
import axios from "axios";


const Weather = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const BACKEND_URL = "http://localhost:8081/api/weather";

    const getWeatherIcon = (main) => {
        switch (main) {
            case "Clear":
                return <WiDaySunny size={50} />;
            case "Clouds":
                return <WiCloudy size={50} />;
            case "Rain":
                return <WiRain size={50} />;
            case "Haze":
            case "Mist":
            case "Fog":
                return <WiFog size={50} />;
            case "Wind":
                return <WiWindy size={50} />;
            default:
                return <WiDaySunny size={50} />;
        }
    };


    const fetchWeather = async () => {
        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const response = await axios.get(`${BACKEND_URL}/${city}`);
            setWeather(response.data);
        } catch (err) {
            setError("City not found. Please try again.");
        }

        setLoading(false);
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };


  return (
    <>
        <Container className="mt-3">
                <Card className="shadow-lg p-4 text-center">
                    <h3 className="mb-4 text-primary">Check Weather</h3>

                    <Form>
                        <Row className="mb-3">
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter city name"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant="primary" onClick={fetchWeather} className="w-100">
                                    Get Weather
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    {loading && <Spinner animation="border" variant="primary" className="my-3" />}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {weather && weather.data && (
                        <Card.Body>
                            <h3 className="text-dark">{weather.data.name}, {weather.data.sys.country}</h3>
                            <p className="lead">{getWeatherIcon(weather.data.weather[0].main)} {weather.data.weather[0].description}</p>

                            <Row className="mt-3">
                                <Col md={6}>
                                    <h4 className="text-primary">{weather.data.main.temp}°C</h4>
                                    <p>🌡️ Temperature</p>
                                </Col>
                                <Col md={6}>
                                    <h4 className="text-info">{weather.data.main.humidity}%</h4>
                                    <p>💧 Humidity</p>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col md={6}>
                                    <h5 className="text-warning">🌅 {formatTime(weather.data.sys.sunrise)}</h5>
                                    <p>Sunrise</p>
                                </Col>
                                <Col md={6}>
                                    <h5 className="text-warning">🌇 {formatTime(weather.data.sys.sunset)}</h5>
                                    <p>Sunset</p>
                                </Col>
                            </Row>

                            <div className="mt-4">
                                <h5 className="text-secondary">💨 {weather.data.wind.speed} m/s</h5>
                                <p>Wind Speed</p>
                            </div>
                        </Card.Body>
                    )}
                </Card>
            </Container>
    </>
  )
}

export default Weather