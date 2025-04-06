import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const fetchBeamSplices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}beam-splices/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching beam splices:", error);
        return [];
    }
};

export const addBeamSplice = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}beam-splices/`, data);
        return response.data;
    } catch (error) {
        console.error("Error adding beam splice:", error);
        return null;
    }
};
