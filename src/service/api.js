import axios from 'axios';

const BASE_URL = 'https://5f48-2804-1b3-6601-104c-b0e7-fe62-9932-ba9d.ngrok-free.app';

export const api = axios.create({
    baseURL: BASE_URL,
});