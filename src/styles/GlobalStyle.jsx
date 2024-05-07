import { createGlobalStyle } from "styled-components";


export const GlobalStyle =  createGlobalStyle`
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body{
        height: 100vh;
        background-color: ${({theme})=>theme.cor01};
        color: ${({theme})=>theme.cor06};
        position: relative;
    }

    ::-webkit-scrollbar{
        background-color: ${({theme})=>theme.cor03};
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: white;
        border-radius: 5px;
    }
`