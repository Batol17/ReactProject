import axios from "axios";


export const fetchApi = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})