import {create} from 'apisauce'
const api = create({
    baseURL: process.env.REACT_APP_API_URL,
});
api.addResponseTransform(Response =>{
    if(!Response.ok) throw Response;
});
export default api;