import axios from 'axios';

const instance = axios.create({
    baseURL:"http://68.183.119.148/api"
})

export default instance;