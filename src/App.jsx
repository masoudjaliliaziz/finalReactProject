import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Headind";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
  border-radius: 5px;
  text-align: center;
`;

const StyledApp = styled.div`
  background-color: orangered;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as={`h1`}>the wild oaisis</Heading>

        <Heading as={`h2`}>check in & check out</Heading>
        <Button>check in</Button>
        <Button>check out</Button>
        <Heading as={`h3`}>forms</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
