import axios from 'axios';

const api = axios.create({

    baseURL: 'exp://192.168.2.109:19000',

});

export default api;