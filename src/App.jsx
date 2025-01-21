import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
  border-radius: 5px;
  text-align: center;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>hello mother fucker</H1>
        <Button>check in</Button>
        <Button>check out</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
