import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://blog-crud-6ub9.onrender.com/api',
    timeout: 5000
})

export default axiosInstance;