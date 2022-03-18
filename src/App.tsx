import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Spacer } from "./styles/components/components";
import GenericStyles from "./styles/generic/generic";
import Home from "./views/home";

const Container = styled.div`
  width: calc(100% - 80px);
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

function App() {
  return <>
    <GenericStyles />
    <Container>
      <Header />
      <Spacer />
      <Home />
      <Spacer />
      <Footer />
    </Container>
  </>;
}

export default App;
