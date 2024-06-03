import axios from 'axios';
import { baseURL } from "./constants";

export default async function DeleteRequest(url) {

    const baseURL = "http://localhost:8080/"
    return axios.delete(
        `${baseURL}${url}`, {

    }
    ).then((res) => {
        console.log(res);
        return res.data;
    })
        .catch((err) => {
            console.log(err);
            throw err;
        })
}
