
// IMPORTE DE COMPONENTE
import Update from '../../components/Update/Update'


// IMPORTE DE TAGS ESTILIZADAS
import { Section, Article, Wrapper, Title, Div, Label, Input, Button, Cadastros, Cadastro, Dados, Dado, Funcao, TelaUpdate, Popup } from "./StyleConsulta"


// IMPORTE DE BIBLIOTECAS
import axios from "axios"
import { useRef, useState } from "react"


// IMPORTE DE ICONES DO REACT-ICONS
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { TbCircleLetterXFilled } from "react-icons/tb";
import { MdError } from "react-icons/md";



export default function Consulta() {
    

    // useRef QUE RECEBE OS VALORES DOS IMPUTS DA CONSULTA PELO FILTRO
    const idRef = useRef()
    const nomeRef = useRef()
    const sobrenomeRef = useRef()

    
    // RECEBE OS DADOS QUANDO CLICA PARA ATUALIZAR E MANDA PRO COMPONENTE DE UPDATE
    const [dadosUpdate, setDadosUpdate] =useState([])


    // RECEBE OS DADOS DAS RESPOSTAS DE REQUISIÇÃO (response.data)
    const [data,setData] = useState([])


    // RECEBE OS RETORNOS DEFINIDOS DE CADA REQUISIÇÃO QUE DER CERTO OU ERRADO PARA SER USADO NOS POPUPS
    const [retorno,setRetorno] = useState()


    // FUNÇÃO QUE MANIPULA A APARIÇÃO DOS POPUPS EM TELA
    const handleFeedBack = (cor) => {
        const popup = document.querySelector('.popup')
        const barra = document.querySelector('.barra')
        popup.style.left = '10px'
        barra.style.animationName = 'barra'
        barra.style.backgroundColor = cor
        setTimeout(()=>{
            popup.style.left = '-400px'
        },5000)
        setTimeout(()=>{
            barra.style.animationName = 'none'
        },6000) 
    }


    // FUNÇÃO PARA FAZER UM GET E RETORNAR TODOS OS CADASTROS DO BANCO DE DADOS
    const handleTodosCadastros = async () => {
        await axios.get('http://localhost:3000/cadastros')
        .then((response)=>{
            const data = response.data
            setData(data)
        })
        .catch(()=>{
            setRetorno(
                <p>
                    Não foi possível realizar a consulta. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
            )
            const cor = '#cc0000'
            handleFeedBack(cor)
        })
    }


    // FUNÇÃO QUE BUSCA CADASTROS NO BANCO DE ACORDO COM O QUE FOI FORNECIDO NA PESQUISA POR FILTRO
    const handleFiltroCadastros = async () => {


        // VERIFICA SE EXISTE ALGUM CAMPO VAZIO E, CASO UM OU MAIS CAMPOS SEJAM PREENCHIDOS, OS VALOS SÃO INSERIDOS NO PARÂMETRO PARA CONSULTA
        if(idRef.current.value == '' && nomeRef.current.value == '' && sobrenomeRef.current.value == ''){
            setRetorno(
                <p>
                    Preencha algum campo para <br/> realizar a pesquisa por filtro.
                    <MdError className='alert'/>
                </p>
            )
            const cor = '#d0df00'
            handleFeedBack(cor)

        }else if(idRef.current.value !== ''){

            const id = idRef.current.value

            await axios.get('http://localhost:3000/cadastrosId/' + id)
            .then((response)=>{
                if(response.data.length == 0){
                    setRetorno(
                        <p>
                            ID "{id}" não encontrado!
                            <MdError className='alert'/>
                        </p>
                    )
                    const cor = '#d0df00'
                    handleFeedBack(cor)
                }else if(response.data.length !== 0){
                    const data = response.data
                    setData(data)
                }
            })
            .catch(()=>{
                setRetorno(
                    <p>
                        Não foi possível realizar a consulta. <br/> Tente novamente mais tarde.
                        <TbCircleLetterXFilled  className="erro"/>
                    </p>
                )
                const cor = '#cc0000'
                handleFeedBack(cor)
            })

        }else if(nomeRef.current.value !== ''){

            const nome = nomeRef.current.value

            await axios.get('http://localhost:3000/cadastrosNome/' + nome)
            .then((response)=>{
                if(response.data.length == 0){
                    setRetorno(
                        <p>
                            Nome "{nome}" não encontrado!
                            <MdError className='alert'/>
                        </p>
                    )
                    const cor = '#d0df00'
                    handleFeedBack(cor)
                }else if(response.data.length !== 0){
                    const data = response.data
                    setData(data)
                }
            })
            .catch(()=>{
                setRetorno(
                    <p>
                        Não foi possível realizar a consulta. <br/> Tente novamente mais tarde.
                        <TbCircleLetterXFilled  className="erro"/>
                    </p>
                )
                const cor = '#cc0000'
                handleFeedBack(cor)
            })

        }else if(sobrenomeRef.current.value !== ''){

            const sobrenome = sobrenomeRef.current.value

            await axios.get('http://localhost:3000/cadastrosSobrenome/' + sobrenome)
            .then((response)=>{
                if(response.data.length == 0){
                    setRetorno(
                        <p>
                            Sobrenome "{sobrenome}" não encontrado!
                            <MdError className='alert'/>
                        </p>
                    )
                    const cor = '#d0df00'
                    handleFeedBack(cor)
                }else if(response.data.length !== 0){
                    const data = response.data
                    setData(data)
                }
            })
            .catch(()=>{
                setRetorno(
                    <p>
                        Não foi possível realizar a consulta. <br/> Tente novamente mais tarde.
                        <TbCircleLetterXFilled  className="erro"/>
                    </p>
                )
                const cor = '#cc0000'
                handleFeedBack(cor)
            })
        }

        
        // RESETA OS CAMPOS
        idRef.current.value = ''
        nomeRef.current.value = ''
        sobrenomeRef.current.value = ''
    }


    // FUNÇÃO QUE DELETA UM CADASTRO DESEJADO DE ACORDO COM O ID
    const handleDelete = async (itemId) => {

        const id = itemId

        await axios.delete('http://localhost:3000/cadastros/' + id)
        .then((response)=>{
            if(response.status == 200){
                setRetorno(
                    <p>
                        Cadastro deletado com sucesso!
                        <IoMdCheckbox className="check"/>
                    </p>
                )
                const cor = '#00df00'
                handleFeedBack(cor)
                handleTodosCadastros()
            }
        })
        .catch(()=>{
            setRetorno(
                <p>
                    Não foi possível deletar. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
            )
            const cor = '#cc0000'
            handleFeedBack(cor)
        })
    }


    // FUNÇÃO MOSTRA A TELA PARA ATUALIZAR UM CADASTRO
    const handleShow = (item) => {
        const update = document.querySelector('.update')
        update.style.display = 'block'
        setDadosUpdate(item)
    }


    // FUNÇÕA QUE RETORNA SE A ATUALIZAÇÃO DE CERTO OU ERRADO
    const handleUpdate = (num)=> {
        if(num == 1){
            setRetorno(
                <p>
                    Cadastro atualizado com sucesso!
                    <IoMdCheckbox className="check"/>
                </p>
            )
            const cor = '#00df00'
            handleFeedBack(cor)

        }else if(num == 2){
            setRetorno(
                <p>
                    Não foi possível atualizar. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
            )
            const cor = '#cc0000'
            handleFeedBack(cor)
        }
    }


    return (
        <>
            <Section>
                <Article>

                    {/* ÁREA COM CAMPOS PARA CONSULTA DE CADASTRO */}
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

                        <Button onClick={handleFiltroCadastros}>
                            Consultar pelo filtro
                        </Button>
                        <Button onClick={handleTodosCadastros}>
                            Ver todos os cadastros
                        </Button>
                    </Wrapper>
                    <hr />

                    {/* ÁREA DOS RESULTADOS DAS PESQUISAS */}
                    <Title>Resultado das pesquisas</Title>

                    {/* RECEBE OS CADASTROS DO BANCO DE DADOS E FAZ TODA A CRIAÇÃO E ORGANZAÇÃO NA TELA PRO USUÁRIO PODER VER, ATUALIZAR OU APAGAR */}
                    <Cadastros>
                        {data.map((item,key)=>{
                            return (
                                <Cadastro key={key}>
                                    <Dados>
                                        <Dado className="id">{item.id}</Dado>
                                        <Dado><span>Nome</span>{item.nome}</Dado>
                                        <Dado><span>Sobrenome</span>{item.sobrenome}</Dado>
                                        <Dado><span>Data nasci.</span>{item.data_nascimento}</Dado>
                                        <Dado><span>Telefone</span>{item.telefone}</Dado>
                                        <Dado><span>E-mail</span>{item.email}</Dado>
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
                
                {/* RECEBE A TELA PARA ATUALIZAR UM CADASTRO */}
                <TelaUpdate className='update'>
                    <Update dadosUpdate={dadosUpdate} todosCadastros={handleTodosCadastros} update={handleUpdate}/>
                </TelaUpdate>

                {/* MOSTRA OS POPUPS DE SUCESSO OU ERRO */}
                <Popup className="popup">
                    {retorno}
                    <hr  className="barra"/>
                </Popup>
            </Section>
        </>
    )
}
