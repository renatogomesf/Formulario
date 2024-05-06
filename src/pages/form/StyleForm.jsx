import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    margin: 30px 0;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;

    &:focus{
        box-shadow: 0px 0px 40px ${({theme})=>theme.cor02};
    }
`

export const Button = styled.button`
    width: 110px;
    margin-top: 50px;
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
