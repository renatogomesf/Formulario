import { Section, Form, Wrapper, Title, Div, Label, Input } from "./StyleConsulta"


export default function Consulta() {
    return (
        <>
            <Section>
                <Form>
                    <Title>Consulta</Title>
                    <Wrapper>
                        <Div>
                            <Label>Nome</Label>
                            <Input type="text" name="name" placeholder="Digite seu nome" required/>
                        </Div>
                        <Div>
                            <Label>Sobrenome</Label>
                            <Input type="text" name="lastname" placeholder="Digite seu sobrenome" required/>
                        </Div>
                    </Wrapper>
                </Form>
            </Section>
        </>
    )
}