import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import styled from "styled-components";
import { H1, Hr } from "../../styles/elements/elements";
import { Colors } from "../../styles/settings/colors";
import Address from "./Address";
import Emails from "./Emails";
import Emergency from "./Emergency";
import FlowerParty from "./FlowerParty";
import Health from "./Health";
import { DataItem } from "./shared/DataItem";
import Social from "./Social";
import Other from "./Other";

const ContactsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${Colors.GRAY_10};
  margin-top: 10px;
  font-size: 12px;
`;

interface IItemProps {
  alignTop: boolean;
  strict: boolean;
}
const Item = styled.div<Partial<IItemProps>>`
  display: flex;
  flex-flow: column;
  justify-content: ${props => (props.alignTop && "start") || "center"};
  flex: ${props => props.strict ? 0 : 1};
  padding: 10px 20px;
  white-space: nowrap;

  & ~ & {
    border-left: 1px solid ${Colors.WHITE};
  }

  > p {
    margin: 0;
  }
`;

const ItemFestaFLor = styled(Item)`
  background: transparent url("./assets/images/cruzeiro.png") no-repeat right -10px bottom;
  background-size: 100px auto;
`;

const ContainerTitle = styled.div`
  background: ${Colors.GRAY_20};
  padding: 5px 20px;
  width: 100%;
  text-transform: uppercase;
`;

function Contacts() {
  return <>
    <H1>Contactos</H1>
    <ContactsContainer>
      <Item><Address /></Item>
      <Item><Emails /></Item>
      <Item><Social /></Item>
      <ItemFestaFLor alignTop><FlowerParty /></ItemFestaFLor>
    </ContactsContainer>
    <Hr />
    <ContactsContainer>
      <ContainerTitle>
        <DataItem><IoShareSocialSharp />Outros contactos úteis da freguesia / concelho:</DataItem>
      </ContainerTitle>
      <Item><Emergency /></Item>
      <Item><Health /></Item>
      <Item alignTop><Other /></Item>
    </ContactsContainer>
  </>;
}

export default Contacts;
