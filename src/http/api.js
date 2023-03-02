import axios from "axios";
import Cookies from 'js-cookie'

const BASE_URL = `${import.meta.env.VITE_API_URL}`

export const $axios = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : '',
        withCredentials: true,
    }
})