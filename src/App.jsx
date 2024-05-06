import Form from "./pages/form/Formulario"
import styled from "styled-components"


window.addEventListener("mousemove",(event)=>{
  let span = document.querySelector(".move")
  span.style.top = `${event.clientY}px`
  span.style.left = `${event.clientX}px`
})


const Span = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  box-shadow: 0px 0px 300px 90px #5FCDD9;
  z-index: -1;
`


function App() {

  return (
    <>
      <Form></Form>
      <Span className="move"></Span>
    </>
  )
}

export default App
