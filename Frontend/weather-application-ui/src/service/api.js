import axios from "axios";

// const BACKEND_BASE_URL = "http://localhost:8081/api";
const BACKEND_BASE_URL = " https://62d8-49-43-201-201.ngrok-free.app/api";


export const getWeather = async (city) => {
    try {
        const response = await axios.get(`${BACKEND_BASE_URL}/weather/v1/${city}`);
        return response.data;
    } catch (err) {
        throw new Error("City not found. Please try again.");
    }
}

export const sendContactUsMessage = async (payload) => {
    try {
        const response = await axios.post(`${BACKEND_BASE_URL}/notification/v1/mail`, payload);
        return response.data;
    } catch (err) {
        console.error("Error sending message:", err);
        throw new Error("Something went wrong. Please try again.");
    }
}
