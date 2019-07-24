import api from '../services/api';

export const login = async (data) =>{
    const {email,password} = data;
    const response = await api.post('/auth',{
        email:email,
        password:password
    });
    await sessionStorage.setItem(
        '@lotus:user',JSON.stringify(response.data),
    );
    return response;
}
export const isAuthenticated = async () => {
    
    const user = await JSON.parse(sessionStorage.getItem('@lotus:user'))
    if(user){
        return true
    }
    else{
        return false
    }
}
export const setDonors = async(data) =>{
    const user = await JSON.parse(sessionStorage.getItem('@lotus:user'));
    const config = {
        headers: {'Authorization' : 'bearer '+ user.token}
    }
    const response = await api.post('/donors',data,config)
    return response.data
}
export const getDonorsList = async()=>{
    const user = await JSON.parse(sessionStorage.getItem('@lotus:user'))
    const config = {
        headers: {'Authorization' : 'bearer '+ user.token}
    }
    const response = await api.get('/donors',config)

    console.log('reponse:' , response.data)
    return response.data
}
