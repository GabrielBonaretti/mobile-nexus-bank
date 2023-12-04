import axios from "axios";

const BASE_URL = "https://2361-2804-1b3-6601-9aed-58b4-14f8-95e-452c.ngrok-free.app";

export const api = axios.create({
  baseURL: BASE_URL,
});
