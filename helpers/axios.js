import axios from 'axios';
import {BASE_URL} from './constant';

export const instance = axios.create({
    baseURL:BASE_URL,
})