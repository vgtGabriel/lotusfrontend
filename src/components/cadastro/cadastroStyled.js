import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    .radio input[type=radio]{
     /* Esconde os inputs */
     display:none;
}
    .radio input[type=radio] + label{
    display:inline-block;
    height:20px;
    padding:0 0 0 25px;
    margin:0 10px 0 0;
    background-image:url(http://www.webcis.com.br/images/imagens-noticias/checkbox/ico-master.png);
    background-repeat:no-repeat;
    background-position:0 0;
    text-align: center;
}
.radio input[type=radio]:checked + label{
    background-position:0 -30px;
}
`;