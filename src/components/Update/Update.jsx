import axios from "axios"
import { Label, Input, Form, Wrapper, Div, Title, Button, Section } from "./StyleUpdate"
import { useRef } from "react"

import { TelaUpdate } from "../../pages/consulta/StyleConsulta"

export default function Update(props) {

    const handlePreventDefault = (event) => {
        event.preventDefault()
    }

    const nomeRef = useRef()
    const sobrenomeRef = useRef()
    const data_nascimentoRef = useRef()
    const telefoneRef = useRef()
    const emailRef = useRef()


    const handleClose = () => {
        <TelaUpdate className="update"/>

        const update = document.querySelector(".update")
        update.style.display = 'none'
    }  


    const handleSubmit = async () => {
        
        const data = {
            nome: (nomeRef.current.value),
            sobrenome: (sobrenomeRef.current.value),
            data_nascimento: (data_nascimentoRef.current.value),
            telefone: (telefoneRef.current.value),
            email: (emailRef.current.value),
        }

        await axios.post('http://localhost:3000/cadastros/', data)
        .then((response)=>{
            console.log(response)
            if(response.status == 201){
                alert('Cadastro atualizado com sucesso!')

                nomeRef.current.value = ''
                sobrenomeRef.current.value = ''
                data_nascimentoRef.current.value = ''
                telefoneRef.current.value = ''
                emailRef.current.value = ''

            }

            handleClose()
        })
        .catch((error)=>{
            console.log(error)
        })
    }

 
    console.log(props.dadosUpdate)

    return (
        <>
            <Section>
                <Form onSubmit={handlePreventDefault}>
                    <Title>Atualizar</Title>

                    <Wrapper>
                        <Div>
                            <Label>Nome</Label>
                            <Input ref={nomeRef} type="text" name="name" value={props.dadosUpdate.nome} placeholder="Digite seu nome" required/>
                        </Div>
                        <Div>
                            <Label>Sobrenome</Label>
                            <Input ref={sobrenomeRef} type="text" name="lastname" value={props.dadosUpdate.sobrenome} placeholder="Digite seu sobrenome" required/>
                        </Div>
                    </Wrapper>

                    <Wrapper>
                        <Div>
                            <Label>Data de nascimento</Label>
                            <Input ref={data_nascimentoRef} type="date" name="date" value={props.dadosUpdate.data_nascimento} required/>
                        </Div>
                        <Div>
                            <Label>Telefone</Label>
                            <Input ref={telefoneRef} type="text" name="phone" value={props.dadosUpdate.telefone}  placeholder="(00) 0 0000-0000" required/>
                        </Div>
                    </Wrapper>

                    <Wrapper>
                        <Div>
                            <Label>E-mail</Label>
                            <Input ref={emailRef} type="email" name="email" value={props.dadosUpdate.email}  placeholder="exemplo@hotmail.com" required/>
                        </Div>
                    </Wrapper>

                    <Wrapper>
                        <Button onClick={handleClose}>Atualizar</Button>
                    </Wrapper>
                </Form>
            </Section>
        </>
    )
}