import Update from '../../components/Update/Update'

import { Section, Article, Wrapper, Title, Div, Label, Input, Button, Cadastros, Cadastro, Dados, Dado, Funcao, TelaUpdate } from "./StyleConsulta"

import axios from "axios"
import { useRef, useState } from "react"

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";



export default function Consulta() {
    
    const idRef = useRef()
    const nomeRef = useRef()
    const sobrenomeRef = useRef()

    const [dadosUpdate, setDadosUpdate] =useState([])


    const [data,setData] = useState([])


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



    const handleDelete = async (itemId) => {

        const id = itemId

        await axios.delete('http://localhost:3000/cadastros/' + id)
        .then((response)=>{
            console.log(response)
            if(response.status == 200){
                alert('Cadastro deletado com sucesso!')
                handleTodosCadastros()
            }
        })
        .catch((error)=>{
            console.log(error)
        })


        console.log(itemId)
    }


    const handleShow = (item) => {
        const update = document.querySelector('.update')
        update.style.display = 'block'

        setDadosUpdate(item)
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
                                        <Dado className="id">{item.id}</Dado>
                                        <Dado>{item.nome}</Dado>
                                        <Dado>{item.sobrenome}</Dado>
                                        <Dado>{item.data_nascimento}</Dado>
                                        <Dado>{item.telefone}</Dado>
                                        <Dado>{item.email}</Dado>
                                    </Dados>

                                    <Funcao>
                                        <button className="btnUpdate" onClick={()=>handleShow(item)}>
                                            <FaPen />   
                                        </button>

                                        <button className="btnDelete" onClick={()=>handleDelete(item.id)} >
                                            <FaTrash />
                                        </button>
                                    </Funcao>
                                </Cadastro>
                            )
                        })}

                    </Cadastros>


                </Article>
                <TelaUpdate className='update'>
                    <Update dadosUpdate={dadosUpdate}/>
                </TelaUpdate>
                
            </Section>
        </>
    )
}
