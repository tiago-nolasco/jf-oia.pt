import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import apiService from "./shared/services/api/api.service";
import { II18n } from "./shared/services/api/model/II18n";
import { setI18n } from "./store/actions";
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

  const dispatch = useDispatch();
  
  useEffect(() => {
    loadI18n();
  }, []);

  const loadI18n = async () => {
    const i18n: II18n[] = await apiService.getI18n();
    dispatch(setI18n(i18n));
  }

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
