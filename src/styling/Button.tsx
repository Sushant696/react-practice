import { styled } from "styled-components";

interface myProps {
  variant: string;
}

export const StyledButton = styled.button<myProps>`
background-color : ${(props) => props.variant === "filled" ? "#726351" : "#fff"};
color: ${(props) => (props.variant === "filled" ? "#fff" : "#8A22433")};
border :#828111 3px solid;
padding:.8rem ;
margin:.7rem; 
`;



export const FancyButton = styled(StyledButton)
`
color: #212;
background: linear-gradient(90deg, rgba(132,132,202,0.6098191214470284) 33%, rgba(75,195,219,1) 93%);
&:hover {
  color : red;
  background :#8A2243;
}
`

export const SubmitButton = styled(StyledButton).attrs({
  type : "submit"
})
`background: #0065;
color :#111; 
box-shadow: 0 5px #f1a2c1 ;
`

// const rotate = keyframes `
// from {
//   transform :roatate(0deg);
// }
// to {
//   transform :rotate(360deg);
// }
// `
 










// now gotta add attributes again and do something more a little and i will be good to go with the styling