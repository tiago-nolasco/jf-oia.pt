import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Spacer } from "../styles/components/components";
import { Image } from "../styles/components/components";
import { Colors } from "../styles/settings/colors";

const FooterContainer = styled.div`
  position: relative;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  background: ${Colors.GRAY_100};
  color: ${Colors.GRAY_20};
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-transform: uppercase;
    color
  }
`;

const UnderConstruction = styled.div`
  position: relative;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(45deg, ${Colors.HOKEY_POKEY}, ${Colors.SALOMIE}, ${Colors.HOKEY_POKEY});
  color: ${Colors.GRAY_100};
`;

const I9design = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 10px;
  height: 100%;
  opacity: .6;
`;

const SignatureImage = styled(Image)`
  width: 140px;
  height: 35px;
  align-self: flex-end;
  margin-left: 10px;
`;

function Footer() {
  return <>
    <FooterMenu>
      <div><a href="https://www.livroreclamacoes.pt/inicio" target="_blanc" rel="noopener"><img alt="logo" src="./assets/icons/iCON LivroReclama - Gray60.svg" /></a></div>
      <div><a href="https://www.livroreclamacoes.pt/inicio" target="_blanc" rel="noopener"><img alt="logo" src="./assets/icons/iCON LivroElogios - Gray60.svg" /></a></div>
      <div>Newsletter</div>
      <div>Política de Privacidade</div>
      <div>Home</div>
    </FooterMenu>
    <FooterContainer>
      <FormattedMessage id="signature" defaultMessage="JF Oiã" />
      <I9design>
        2021/2022
        <SignatureImage src="./assets/images/i9design.png" />
      </I9design>
    </FooterContainer>
    <Spacer height={10} />
    <UnderConstruction>WEBSITE EM CONSTRUÇÃO</UnderConstruction>
  </>;
}

export default Footer;
