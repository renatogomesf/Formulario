import styled from "styled-components"


// window.addEventListener("mousemove",(event)=>{

//   const span = document.querySelector("#span")

//   let moveX = event.clientX
//   let moveY = event.clientY

//   span.style.top = moveY
//   span.style.left = moveX

//   // console.log(moveX)
//   // console.log(moveY)
//   // console.log(span)
// })

const cade = ()=>{
  console.log("vixe")
  
}

const mover = document.getElementsByTagName("Mover")
// mover.map((e)=>{
//   console.log(e)
// })

const Mover = styled.span`
  position: absolute;
  background-color: red;
`


export default function Span() {

  return (
    <>
      <p>posição x</p>
      <p>posição y</p>
      <Mover id="span" onClick={cade}>aaaaas</Mover>
    </>
  )
}