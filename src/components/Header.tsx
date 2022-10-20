import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Colors } from "../styles/settings/colors";

interface IMenuItemProps {
  showAsLink: boolean;
}

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
`;

const Logo = styled.div`
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
  display: flex;
  flex: 1;
  border-left-width: 0;
  padding: 0 15px;
`;

const SubMenu = styled.div`
  position: absolute;
  top: calc(50% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: ${Colors.GRAY_20};
  border-top: 2px solid ${Colors.GRAY_50};
  display: none;
`;

const menuSharedStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 0 30px;
  height: 100%;
  white-space: nowrap;

  &:hover {
    & > ${SubMenu} {
      display: block;
    }
  }
`;

const MenuItem = styled.div<Partial<IMenuItemProps>>`
  ${menuSharedStyles}
  color: ${(props) => props.showAsLink ? Colors.GRAY_100 : Colors.GRAY_60};
  cursor: default;
`;

const MenuLink = styled(Link)`
  ${menuSharedStyles}
  color: ${Colors.GRAY_100};
  cursor: pointer;

  &:hover {
    color: ${Colors.BLACK};
  }
`;


function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img alt="logo" src="./assets/images/logo.png" />
        <Name>Junta <small>de</small> Freguesia <small>de</small> Oiã</Name>
      </Logo>
      <Menu>
        <MenuLink to="/"><FormattedMessage id="menu_inicio" defaultMessage="Inicio" /></MenuLink>
        <MenuItem showAsLink>
          <FormattedMessage id="menu_freguesia" defaultMessage="Freguesia" />
          <SubMenu>
            <MenuItem><FormattedMessage id="history" defaultMessage="História / Heráldica" /></MenuItem>
            <MenuLink to="/institutions"><FormattedMessage id="institutions" defaultMessage="Instituições" /></MenuLink>
            <MenuItem><FormattedMessage id="flower_party" defaultMessage="Festa da Flor" /></MenuItem>
            <MenuLink to="/places-to-visit"><FormattedMessage id="places_to_visit" defaultMessage="Locais a Visitar" /></MenuLink>
            <MenuLink to="/where-to-eat-sleep"><FormattedMessage id="eat_sleep" defaultMessage="Onde Comer / Dormir" /></MenuLink>
            <MenuItem><FormattedMessage id="events" defaultMessage="Agenda Eventos" /></MenuItem>
            <MenuItem><FormattedMessage id="galery" defaultMessage="Galeria / Fotografias" /></MenuItem>
            <MenuItem><FormattedMessage id="industry" defaultMessage="A nossa Indústria" /></MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem showAsLink>
          <FormattedMessage id="menu_autarquia" defaultMessage="Autarquia" />
          <SubMenu>
            <MenuItem><FormattedMessage id="last_news" defaultMessage="Notícias da Freguesia" /></MenuItem>
            <MenuItem><FormattedMessage id="last_notices" defaultMessage="Avisos / Editais" /></MenuItem>
            <MenuItem><FormattedMessage id="menu_taxes" defaultMessage="Taxas" /></MenuItem>
            <MenuItem><FormattedMessage id="menu_team" defaultMessage="Orgãos Autarquia" /></MenuItem>
            <MenuLink to="/documents"><FormattedMessage id="menu_documents" defaultMessage="Documentos" /></MenuLink>
            <MenuLink to="/requirements"><FormattedMessage id="menu_requirements" defaultMessage="Requerimentos" /></MenuLink>
            <MenuItem><FormattedMessage id="menu_toponymy" defaultMessage="Toponímia" /></MenuItem>
            <MenuItem><FormattedMessage id="menu_incidents" defaultMessage="Incidentes" /></MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem><FormattedMessage id="menu_info" defaultMessage="Informacoes" /></MenuItem>
        <MenuItem><FormattedMessage id="menu_virtualCounter" defaultMessage="Balcão Virtual" /></MenuItem>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
