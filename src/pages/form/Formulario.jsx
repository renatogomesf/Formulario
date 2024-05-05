import { Label, Input, Form, Wrapper, Div } from "./StyleForm"

export default function Formulario() {
    return (
        <>
            <Form>
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
                        <Input type="text" name="cpf" placeholder="Digite seu cpf"/>
                    </Div>
                    <Div>
                        <Label>Data de nascimento</Label>
                        <Input type="date" name="date"/>
                    </Div>
                </Wrapper>
                <Wrapper>
                    <Div>
                        <Label>E-mail</Label>
                        <Input type="text" name="email" placeholder="Digite seu e-mail"/>
                    </Div>
                </Wrapper>
            </Form>
        </>
    )
}