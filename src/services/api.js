import {create} from 'apisauce'
const api = create({
    baseURL: 'http://lotusbackend.herokuapp.com/',
});
api.addResponseTransform(Response =>{
    if(!Response.ok) throw Response;
});
export default api;