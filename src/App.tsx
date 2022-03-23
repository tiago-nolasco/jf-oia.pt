import React, { useEffect } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { loadI18n } from "./store/actions";
import { i18nSelector } from "./store/selectors/i18n";
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
  const i18n = useSelector(i18nSelector.data);
  const hasI18n = useSelector(i18nSelector.hasData);

  useEffect(() => {
    dispatch(loadI18n());
  }, []);

  return hasI18n ? <>
    <GenericStyles />
    <IntlProvider messages={i18n} locale="pt" defaultLocale="pt">
      <Container>
        <FormattedMessage id="react_intl_test" />
        <Header />
        <Spacer />
        <Home />
        <Spacer />
        <Footer />
      </Container>
    </IntlProvider>
  </> : <>Loading...</>;
}

export default App;
