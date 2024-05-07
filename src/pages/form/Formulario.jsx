import { Label, Input, Form, Wrapper, Div, Title, Button } from "./StyleForm"

export default function Formulario() {

    const handlePreventDefault = (event) => {
        event.preventDefault()
    }



    return (
        <>
            <Form onSubmit={handlePreventDefault}>
                <Title>Cadastro</Title>

                <Wrapper>
                    <Div>
                        <Label>Nome</Label>
                        <Input type="text" name="name" placeholder="Digite seu nome"/>
                    </Div>
                    <Div>
                        <Label>Sobrenome</Label>
                        <Input type="text" name="lastname" placeholder="Digite seu sobrenome"/>
                    </Div>
                </Wrapper>

                <Wrapper>
                    <Div>
                        <Label>CPF</Label>
                        <Input type="text" name="cpf" placeholder="000.000.000-00"/>
                    </Div>
                    <Div>
                        <Label>Data de nascimento</Label>
                        <Input type="date" name="date"/>
                    </Div>
                </Wrapper>

                <Wrapper>
                    <Div>
                        <Label>Telefone</Label>
                        <Input type="text" name="phone" placeholder="(00) 0 0000-0000"/>
                    </Div>
                    <Div>
                        <Label>E-mail</Label>
                        <Input type="text" name="email" placeholder="exemplo@hotmail.com"/>
                    </Div>
                </Wrapper>

                <Wrapper>
                    <Button>Cadastrar</Button>
                </Wrapper>
            </Form>
        </>
    )
}