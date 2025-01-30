import axios from "axios";

const BACKEND_BASE_URL = "http://localhost:8081/api/weather";

export const getWeather = async (city) => {
    try {
        const response = await axios.get(`${BACKEND_BASE_URL}/${city}`);
        return response.data;
    } catch (err) {
        throw new Error("City not found. Please try again.");
    }
}