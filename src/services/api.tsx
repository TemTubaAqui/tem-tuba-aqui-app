import axios from "axios";

export const api = axios.create({
  //baseURL: "http://localhost:8000/api/v1/",
  //baseURL: "http://192.168.31.18:8000/api/v1/",
  baseURL: "http://ec2-3-144-41-90.us-east-2.compute.amazonaws.com:8000/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});