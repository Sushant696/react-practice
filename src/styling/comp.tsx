import { useState } from "react";
import { StyledButton, FancyButton, SubmitButton } from "./Button";


export const Compo = () => {
  const handleCLick = () => {
    setData("Welcome to Styled component practice!! ");
  };
  const [data, setData] = useState<string>("Hello sir!!");

  return (
      <>
        <h3>{data}</h3>
        <StyledButton onClick={handleCLick} variant="">
          {" "}
          Event Button{" "}
        </StyledButton>
        <StyledButton variant="filled">styled button </StyledButton>
        <FancyButton variant=""> Fancy Button </FancyButton>
        <SubmitButton type="submit" variant="">
          {" "}
          Submit Button{" "}
        </SubmitButton>
      </>
  );
};

//   i just can't fucking figure out the problem fucking shit will figure out later  i figured out it just now just have to define props in each styled button like the variant props in this case above
