import { Section, Article, Wrapper, Title, Div, Label, Input, Button, Cadastros, Cadastro, Dados, Dado, Funcao } from "./StyleConsulta"

import axios from "axios"
import { useRef, useState } from "react"

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Consulta() {
    
    const idRef = useRef()
    const nomeRef = useRef()
    const sobrenomeRef = useRef()

    const [data,setData] = useState([])
    console.log(data)

    const handleTodosCadastros = async () => {
        await axios.get('http://localhost:3000/cadastros')
        .then((response)=>{
            const data = response.data
            setData(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return (
        <>
            <Section>
                <Article>
                    <Title>Consulta</Title>
                    <Wrapper>
                        <Div>
                            <Label>ID (Número de cadastro)</Label>
                            <Input ref={idRef} type="number" name="id" placeholder="Digite o ID"/>
                        </Div>
                        <Div>
                            <Label>Nome</Label>
                            <Input ref={nomeRef} type="text" name="name" placeholder="Digite o nome"/>
                        </Div>
                        <Div>
                            <Label>Sobrenome</Label>
                            <Input ref={sobrenomeRef} type="text" name="lastname" placeholder="Digite o sobrenome"/>
                        </Div>
                    </Wrapper>

                    <Wrapper>

                        <Button>Consultar pelo filtro</Button>

                        <Button onClick={handleTodosCadastros}>Ver todos os cadastros</Button>

                    </Wrapper>

                    <hr />

                    <Title>Resultado das pesquisas</Title>

                    <Cadastros>
                        {data.map((item,key)=>{
                            return (
                                <Cadastro key={key}>
                                    <Dados>
                                        <Dado>{item.id}</Dado>
                                        <Dado>{item.nome}</Dado>
                                        <Dado>{item.sobrenome}</Dado>
                                        <Dado>{item.data_nascimento}</Dado>
                                        <Dado>{item.telefone}</Dado>
                                        <Dado>{item.email}</Dado>
                                    </Dados>
                                    <Funcao>
                                        <FaPen className="btn"/>
                                        <FaTrash className="btn"/>
                                    </Funcao>
                                </Cadastro>
                            )
                        })}
                    </Cadastros>

                </Article>
            </Section>
        </>
    )
}