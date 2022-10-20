import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { loadI18n } from "./store/actions";
import { i18nSelector } from "./store/selectors/i18n";
import { Spacer } from "./styles/components/components";
import GenericStyles from "./styles/generic/generic";
import Home from "./views/home";
import { Routes, Route } from "react-router-dom";
import Documents from "./views/documents";
import Requirements from "./views/requirements";
import PlacesToVisit from "./views/placesToVisit";
import WhereToEat from "./views/whereToEat";
import Institutions from "./views/institutions";

const Container = styled.div`
  width: calc(100% - 80px);
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

function App() {

  const dispatch = useDispatch();
  const i18n = useSelector(i18nSelector.data);
  const hasI18n = useSelector(i18nSelector.hasData);

  useEffect(() => {
    dispatch(loadI18n());
  }, []);

  return hasI18n ? <>
    <GenericStyles />
    <IntlProvider messages={i18n} locale="pt" defaultLocale="pt">
      <Container>
        <Header />
        <Spacer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/places-to-visit" element={<PlacesToVisit />} />
          <Route path="/where-to-eat-sleep" element={<WhereToEat />} />
          <Route path="/institutions" element={<Institutions />} />
        </Routes>
        <Spacer />
        <Footer />
      </Container>
    </IntlProvider>
  </> : <>Loading...</>;
}

export default App;
