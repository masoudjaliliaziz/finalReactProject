import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Headind";
import Row from "./ui/Row";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
  border-radius: 5px;
  text-align: center;
`;

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type={"horizontal"}>
          <Heading as={`h1`}>the wild oaisis</Heading>
          <Heading as={`h2`}>check in & check out</Heading>
          <Button variation="primary" size="medium">
            check in
          </Button>
          <Button variation="secendary" size="small">
            check out
          </Button>
        </Row>
        <Row type={"vertical"}>
          <Heading as={`h3`}>forms</Heading>
          <Input type="number" placeholder="Number of guests" />
          <Input type="number" placeholder="Number of guests" />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
