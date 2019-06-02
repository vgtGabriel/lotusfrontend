import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import bg from '../../images/lotus.svg'

export const LoginContent = styled.div`
        width:100%;
        max-width:30rem;
        background:none;
`
export const InputBorder = styled.div`
    display: flex;
    align-items: center;
    background-color: none;
    border: 1px solid #e4e7ea;
    border-radius:4rem;
`
export const InputsLogin = styled.input`
border: 1px solid #e4e7ea;
    border-radius:2.5rem;
    width:100%;
    display:flex;
    background:#fff;
    border-radius: 2.1rem;
    font-size: 16px;
    padding:1rem 1rem;
    margin-left:2rem;      

`
export const BtnLogin = styled.button`
    width: 100%;
    background: #006699;
    padding: 10px;
    font-size: 20px;
    display: block;
    border: none;
    color: #fff;
    border-radius: 5rem;
    &:hover {
    background: #1bc6a4;
    }`

export default createGlobalStyle`
    i{
     margin-left:1.5rem;
    }
    .test{
        margin-left:1.5rem;
        color:#fff;
    }

    .LoginContainer{
        height : 100%;
        width:100%;
        display: flex;
        justify-content: center;
        align-items:center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url(${bg});
    }
`
