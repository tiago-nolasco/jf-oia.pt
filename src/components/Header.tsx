import React from "react";
import styled, { css } from "styled-components";
import { Colors } from "../styles/settings/colors";
import { useSelector } from "react-redux";
import { RootStateType } from "../store/model/RootStateType";

const sharedStyles = css`
  border: 2px dashed ${Colors.GRAY_50};
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const Logo = styled.div`
  ${sharedStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  padding: 0 30px;

  >img {
    width: 100%;
    max-width: 100px
  }
`;

const Name = styled.div`
  padding-left: 20px;
  line-height: 25px;
  font-size: 20px;

  > small {
    font-size: 12px;
  }
`;

const Menu = styled.div`
  ${sharedStyles}
  display: flex;
  flex: 1;
  border-left-width: 0;
  padding: 0 15px;
`;

const MenuItem = styled.div`
  display: flex;  
  align-items: center;
  text-transform: uppercase;
  padding: 0 30px;
  height: 100%;
  cursor: pointer;
  color: ${Colors.GRAY_90};

  &:hover {
    color: ${Colors.BLACK};
  }
`;


function Header() {

  const i18n = useSelector((state: RootStateType) => state.i18n);

  return (
    <HeaderContainer>
      <Logo>
        <img alt="logo" src="./assets/images/logo.png" />
        <Name>Junta <small>de</small> Freguesia <small>de</small> Oiã</Name>
      </Logo>
      <Menu>
        <MenuItem>{i18n.menu_inicio}</MenuItem>
        <MenuItem>{i18n.menu_freguesia}</MenuItem>
        <MenuItem>{i18n.menu_autarquia}</MenuItem>
        <MenuItem>{i18n.menu_informacoes}</MenuItem>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
