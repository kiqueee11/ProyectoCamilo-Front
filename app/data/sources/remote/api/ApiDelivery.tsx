import axios from "axios";

const ApiDelivery = axios.create({
    //baseURL: "http://10.0.2.2:8000/api",
    baseURL: "http://192.168.1.163:8000/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export {ApiDelivery};