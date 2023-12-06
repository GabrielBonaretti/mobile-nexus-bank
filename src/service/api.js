import axios from "axios";

const BASE_URL = "https://42d9-2804-1b3-6601-9aed-78de-233a-8f49-7aed.ngrok-free.app";

export const api = axios.create({
  baseURL: BASE_URL,
});
