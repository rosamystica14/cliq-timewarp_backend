import axios from "axios";

const BASE = "https://cliq.zoho.com/api/v2";
const CONNECTION = "timewarpbackend";  // Your Cliq connection

export async function cliqGET(path) {
    return axios.get(`${BASE}${path}?zapikey=${CONNECTION}`);
}

export async function cliqPOST(path, data) {
    return axios.post(`${BASE}${path}?zapikey=${CONNECTION}`, data);
}
