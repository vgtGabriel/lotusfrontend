import api from '../services/api';
import localStorage from 'localStorage';

export const login = async (data) =>{

        const {email,password} = data;

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
        )
    return response;
}
export const createDoador = async(data) =>{
    console.log(data);
}
