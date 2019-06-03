import api from '../services/api';
import localStorage from 'localStorage';
import { flattenProp } from 'recompose';

export const login = async (data) =>{
    const {email,password} = data;
    const response = await api.post('/auth/authenticate',{
        email:email,
        password:password
    });
    const {token,userOperator} = response.data;
    await sessionStorage.setItem(
        '@lotus:token',token,
    );
    await sessionStorage.setItem(
        '@lotus:user',JSON.stringify(userOperator),
    );
    return response;
}
export const isAuthenticated = async () => {
    const token = await sessionStorage.getItem('@lotus:token');
    
    if(token)
        return true;
    else
        return false;
};
export const setDonors = async(data) =>{
    try{
        console.log('Registrando Doador ',data);
        const response = await api.post('/auth/registrarDoador',data);
        return response.data;
    }catch(error){
        return {error:"Não foi possivel completar o registro"}
    }
}
export const getDonorsList = async()=>{
    const response = await api.post('/project/listarDoadores');
    return response.data;
}

