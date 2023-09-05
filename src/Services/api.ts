import axios from "axios";

export const api = axios.create({
    //baseURL: "http://localhost:8000/api/v1/",
    baseURL: "http://192.168.0.152:8000/api/v1",
    headers: {
        "Content-type": "application/json",
    },
});