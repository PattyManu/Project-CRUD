import axios from 'axios';

export default axios.create({
    baseURL: 'https://projetotaugor-default-rtdb.firebaseio.com/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});