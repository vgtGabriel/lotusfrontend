import api from '../services/api';
import store from 'localStorage';

export const login = async (data) =>{
    const {email,password} = data;
    const response = await api.post('/auth/authenticate',{
        email:email,
        password:password
    });
    const {token,userOperator} = response.data;
    await store.setItem(
        '@lotus:token',token,
    );
    await store.setItem(
        '@lotus:user',JSON.stringify(userOperator),
    );
    return response;
}
export const isAuthenticated = async () => {
    
    const token = await store.getItem('@lotus:token');
    if(token){
        console.log('true' , token)
        return true;
    }
    else{
        console.log('false', token);
        return false;
    }
};
export const setDonors = async(data) =>{
    console.log('Registrando Doador ',data);
    const response = await api.post('/auth/registrarDoador',data);
    console.log('resposa:', response.data);
    // return response
}
export const getDonorsList = async()=>{
    const response = await api.post('/auth/listarDoadores');
    return response.data;
}
export const loadAccount = async () =>{
    
    const token = await store.getItem('@lotus:token');
    if(token){
        console.log('load true', token)
        return true;
    }
    else{
        console.log('true', token)
        return false;
    }
}
