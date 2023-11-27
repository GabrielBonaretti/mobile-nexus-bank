import axios from 'axios';

const BASE_URL = 'https://f4a6-189-57-188-42.ngrok-free.app';

export const api = axios.create({
    baseURL: BASE_URL,
});