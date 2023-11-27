import axios from 'axios';

const BASE_URL = 'https://9b07-2804-1b3-6601-104c-8c67-f186-cca2-6742.ngrok-free.app';

export const api = axios.create({
    baseURL: BASE_URL,
});