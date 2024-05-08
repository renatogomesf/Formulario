import axios from "axios"
import { Label, Input, Form, Wrapper, Div, Title, Button } from "./StyleForm"
import { useRef } from "react"


export default function Formulario() {

    const handlePreventDefault = (event) => {
        event.preventDefault()
    }

    const nome = useRef()
    const sobrenome = useRef()
    const data_nascimento = useRef()
    const telefone = useRef()
    const email = useRef()

    const handleSubmit = async () => {
        
        const data = {
            nome: (nome.current.value),
            sobrenome: (sobrenome.current.value),
            data_nascimento: (data_nascimento.current.value),
            telefone: (telefone.current.value),
            email: (email.current.value),
        }

        await axios.post('http://localhost:3000/cadastros', data)
        .then((response)=>{
            console.log(response)
            if(response.status == 201){
                alert('Cadastro realizado com sucesso!')

                nome.current.value = ''
                sobrenome.current.value = ''
                data_nascimento.current.value = ''
                telefone.current.value = ''
                email.current.value = ''

                nome.current.focus()
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return (
        <>
            <Form onSubmit={handlePreventDefault}>
                <Title>Cadastro</Title>

                <Wrapper>
                    <Div>
                        <Label>Nome</Label>
                        <Input ref={nome} type="text" name="name" placeholder="Digite seu nome" required/>
                    </Div>
                    <Div>
                        <Label>Sobrenome</Label>
                        <Input ref={sobrenome} type="text" name="lastname" placeholder="Digite seu sobrenome" required/>
                    </Div>
                </Wrapper>

                <Wrapper>
                    <Div>
                        <Label>Data de nascimento</Label>
                        <Input ref={data_nascimento} type="date" name="date" required/>
                    </Div>
                    <Div>
                        <Label>Telefone</Label>
                        <Input ref={telefone} type="text" name="phone" placeholder="(00) 0 0000-0000" required/>
                    </Div>
                </Wrapper>

                <Wrapper>
                    <Div>
                        <Label>E-mail</Label>
                        <Input ref={email} type="email" name="email" placeholder="exemplo@hotmail.com" required/>
                    </Div>
                </Wrapper>

                <Wrapper>
                    <Button onClick={handleSubmit}>Cadastrar</Button>
                </Wrapper>
            </Form>
        </>
    )
}