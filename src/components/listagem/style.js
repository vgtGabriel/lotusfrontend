import styled,{createGlobalStyle} from 'styled-components'

export const Normal = styled.h4`
      color:green;
`
export default createGlobalStyle`
 .listaContainer{
                 height: 100%;
                  width: 100%;
                display: flex;
        justify-content: center;
            align-items: center;
    }
.listaContent{
                width: 100%;
                height: 100%;
        border-radius: 6px;
              padding: 20px;
    }
    h2{
                display: flex;
        justify-content: left;
    }
    input{
            background: #fff;
         border-radius: 2rem;
        grid-auto-flow: auto;
               padding: 15px;
                border: 1px solid #3d5170;
         border-radius:2.5rem;
                width: 100%; 
            margin-left:2rem;
            &+input{
            margin-left:2rem;
            }
    }
        .labelName{
            padding-left: 40px;
        }
    .normal{
        color:#00f2c3;
    }
    .pendent{
        color:#fd5d93;
    }
   

`