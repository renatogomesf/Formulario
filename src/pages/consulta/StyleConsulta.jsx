import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Article = styled.article`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin: 30px 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 1px 32px black;

    hr{
        width: 100%;
    }
`

export const Title = styled.h1`
    text-align: center;
    margin-top: 30px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 10px;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`

`

export const Input = styled.input`
    width: 250px;
    max-width: 250px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;

    &:focus{
        outline: 3px solid ${({theme})=>theme.cor04};
    }
`

export const Button = styled.button`
    /* width: 190px; */
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    background-color: ${({theme})=>theme.cor03};
    color: white;

    &:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
`



export const Cadastros = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
`

export const Cadastro = styled.li`
    background-color: ${({theme})=>theme.cor06};
    color: black;
    border-radius: 5px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const Dado = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
`