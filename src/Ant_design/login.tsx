// welcome to login page of facebook made by sushant prasai in react after a fucking long time

import "../App.css";
import { Typography } from "antd";
import { Form , Divider } from "antd";
import { StyledForm , StyledButton , StyledInput} from "./formStyling";


const { Title } = Typography;

export const Login = () => {
  const handleSubmit = () => {};
  return (
    <>
      <Title style={{ color: "#1877f2", fontWeight: "800", fontSize: "45px" }}>
        facebook
      </Title>
      <StyledForm onSubmitCapture={handleSubmit}>
      <Title level={5} style={{color:"#1877f2"}} >Log into Facebook</Title> 
        <Form.Item>
          <StyledInput placeholder="Enter UserName or Phone Number " />
          <StyledInput type="password" placeholder="Password" />
        </Form.Item>
        <StyledButton size="large" type="primary" variant="blue">Log In</StyledButton>
        <Title level={5} style={{color:"#1877f2"}} > Forgotten account?</Title> 
     <Divider style={{ borderColor: "#d8d8d8"}} >Or</Divider>
      <StyledButton size="large" variant = "green" style={{background :"#42b72a"}} >Create New Account </StyledButton>
      </StyledForm>
    </>
  );
};
