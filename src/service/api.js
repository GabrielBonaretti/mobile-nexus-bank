import axios from "axios";

const BASE_URL = "https://fb8d-2804-1b3-6601-9aed-c01-a6e7-7874-fd47.ngrok-free.app";

export const api = axios.create({
  baseURL: BASE_URL,
});
