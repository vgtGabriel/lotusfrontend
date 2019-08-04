import axios from 'axios'
const api = axios.create({
    baseURL:'https://lotusbackendmaster.herokuapp.com/'
});
export default api;