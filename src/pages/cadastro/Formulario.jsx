import axios from "axios"
import { Label, Input, Form, Wrapper, Div, Title, Button, Section } from "./StyleForm"
import { useRef } from "react"


export default function Formulario() {

    const handlePreventDefault = (event) => {
        event.preventDefault()
    }

    const nomeRef = useRef()
    const sobrenomeRef = useRef()
    const data_nascimentoRef = useRef()
    const telefoneRef = useRef()
    const emailRef = useRef()

    const handleSubmit = async () => {
        
        const data = {
            nome: (nomeRef.current.value),
            sobrenome: (sobrenomeRef.current.value),
            data_nascimento: (data_nascimentoRef.current.value),
            telefone: (telefoneRef.current.value),
            email: (emailRef.current.value),
        }

        await axios.post('http://localhost:3000/cadastros', data)
        .then((response)=>{
            console.log(response)
            if(response.status == 201){
                alert('Cadastro realizado com sucesso!')

                nomeRef.current.value = ''
                sobrenomeRef.current.value = ''
                data_nascimentoRef.current.value = ''
                telefoneRef.current.value = ''
                emailRef.current.value = ''

                nomeRef.current.focus()
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return (
        <>
            <Section>
                <Form onSubmit={handlePreventDefault}>
                    <Title>Cadastro</Title>

                    <Wrapper>
                        <Div>
                            <Label>Nome</Label>
                            <Input ref={nomeRef} type="text" name="name" placeholder="Digite seu nome" required/>
                        </Div>
                        <Div>
                            <Label>Sobrenome</Label>
                            <Input ref={sobrenomeRef} type="text" name="lastname" placeholder="Digite seu sobrenome" required/>
                        </Div>
                    </Wrapper>

                    <Wrapper>
                        <Div>
                            <Label>Data de nascimento</Label>
                            <Input ref={data_nascimentoRef} type="date" name="date" required/>
                        </Div>
                        <Div>
                            <Label>Telefone</Label>
                            <Input ref={telefoneRef} type="text" name="phone" placeholder="(00) 0 0000-0000" required/>
                        </Div>
                    </Wrapper>

                    <Wrapper>
                        <Div>
                            <Label>E-mail</Label>
                            <Input ref={emailRef} type="email" name="email" placeholder="exemplo@hotmail.com" required/>
                        </Div>
                    </Wrapper>

                    <Wrapper>
                        <Button onClick={handleSubmit}>Cadastrar</Button>
                    </Wrapper>
                </Form>
            </Section>
        </>
    )
}