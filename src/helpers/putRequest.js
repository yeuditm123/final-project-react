
import axios from 'axios';
import { baseURL } from "./constants"; 

export default async function PutRequest(url, body) {
    const baseURL = "http://localhost:8080/";

    try {
        const response = await axios.put(`${baseURL}${url}`, body);
        return response.data; // Return the response data
    } catch (error) {
        throw new Error(error.response.data); // Throw an error with the response data
    }
}
