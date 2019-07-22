import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3333',
});
// api.addResponseTransform(Response =>{
//     if(!Response.ok) throw Response;
// });
export default api;