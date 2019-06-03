import api from '../services/api';
import localStorage from 'localStorage';

export const login = async (data) =>{
    const {email,password} = data;
    try{
        const response = await api.post('/auth/authenticate',{
                email:email,
                password:password
        });
        const {token,userOperator} = response.data;
        await localStorage.setItem(
            '@lotus:token',token,
        );
        await localStorage.setItem(
            '@lotus:user',JSON.stringify(userOperator),
        );
        return response;
    }catch(error){
        return {error:'error'}
    }
}
export const isAuthenticated = async(data) => {
    try {
        const token = await localStorage.getItem(
            '@lotus:doadores',JSON.stringify(data.data.token),
        );
        if(token){
            console.log(': ', token);
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
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
    const response = await api.post('/auth/listarDoadores');
    return response.data;
}

