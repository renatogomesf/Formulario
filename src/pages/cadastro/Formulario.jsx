import axios from "axios"
import { Label, Input, Form, Wrapper, Div, Title, Button, Section, Popup } from "./StyleForm"
import { useRef, useState } from "react"

import { IoMdCheckbox } from "react-icons/io";
import { TbCircleLetterXFilled } from "react-icons/tb";
import { LuLoader2 } from "react-icons/lu";


export default function Formulario() {

    const [validation,setValidation] = useState()

    const [loading,setLoading] = useState(false)

    
    const handlePreventDefault = (event) => {
        event.preventDefault()
    }


    const feedBackOk = ()=> {
        return(
            <Popup className="popup">
                <p>
                    Cadastro Realizado com sucesso!
                    <IoMdCheckbox className="check"/>
                </p>
                <hr  className="barra"/>
            </Popup>
        )
    }


    const feedBackErro = ()=> {
        return(
            <Popup className="popup">
                <p>
                    Não foi possível cadastrar. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
                <hr  className="barra"/>
            </Popup>
        )
    }


    const handleFeedBackOk = () => {

        const popup = document.querySelector('.popup')
        const barra = document.querySelector('.barra')

        popup.style.left = '10px'
        popup.style.display = 'flex'
        barra.style.animationName = 'barra'
        barra.style.backgroundColor = '#00df00'

        setTimeout(()=>{
            popup.style.left = '-400px'
        },5000)

        setTimeout(()=>{
            barra.style.animationName = 'none'
        },6000)
    }



    const handleFeedBackErro = () => {

        const popup = document.querySelector('.popup')
        const barra = document.querySelector('.barra')

        popup.style.left = '10px'
        popup.style.display = 'flex'
        barra.style.animationName = 'barra'
        barra.style.backgroundColor = '#cc0000'

        setTimeout(()=>{
            popup.style.left = '-400px'
        },5000)

        setTimeout(()=>{
            barra.style.animationName = 'none'
        },6000) 
    }


    const nomeRef = useRef()
    const sobrenomeRef = useRef()
    const data_nascimentoRef = useRef()
    const telefoneRef = useRef()
    const emailRef = useRef()

    const handleSubmit = async () => {

        if(nomeRef.current.value=='' || sobrenomeRef.current.value=='' || data_nascimentoRef.current.value=='' || telefoneRef.current.value=='' || emailRef.current.value==''){


        }else{
            setLoading(true)

            const data = {
                nome: (nomeRef.current.value),
                sobrenome: (sobrenomeRef.current.value),
                data_nascimento: (data_nascimentoRef.current.value),
                telefone: (telefoneRef.current.value),
                email: (emailRef.current.value)
            }
       
            await axios.post('http://localhost:3000/cadastros', data)
            .then((response)=>{
                if(response.status == 201){
                    setValidation(true)
                    handleFeedBackOk()
                    setLoading(false)
    
                    nomeRef.current.value = ''
                    sobrenomeRef.current.value = ''
                    data_nascimentoRef.current.value = ''
                    telefoneRef.current.value = ''
                    emailRef.current.value = ''
    
                    nomeRef.current.focus()
                }
            })
            .catch((error)=>{
                if(error){
                    setValidation(false)
                    handleFeedBackErro()
                    setLoading(false)
                    console.log(error)
                }
            })
        }
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
                        <Button onClick={handleSubmit}>
                            {loading?<LuLoader2 className="loading"/>:<p>Cadastrar</p>}
                        </Button>
                    </Wrapper>
                </Form>

                {validation?feedBackOk():feedBackErro()}

            </Section>
        </>
    )
}