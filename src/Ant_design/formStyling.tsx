import { Form ,Button, Input } from "antd"
import { styled } from "styled-components"

interface myProps {
    variant  : string 
}


export const StyledForm = styled(Form)`
border : none ;
padding:.3rem;
border-radius :6px;
background: #fff;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
` 

export const StyledButton = styled(Button)<myProps>`
min-width:370px;
background-color : ${(props) => props.variant === "blue" ? "#1877f2" : "#42b72a"};
color :#fff;
`

export const StyledInput = styled(Input)`
padding:.8rem .8rem;
line-height :1.4;
margin-top :.8rem;
`


// So  a thing to remember while making your own design with ant design and styled component is that the component that you are going to use should be imported in the file in which you will style in 
// For example : if you're going to style Form or Button for eg then you neeed to import that in the design file as well import the component you need to give design to .... 