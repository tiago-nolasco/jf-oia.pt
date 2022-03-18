import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoGlobeOutline,
} from "react-icons/io5";
import styled from "styled-components";
import { Spacer } from "../../styles/components/components";
import { DataItem } from "./shared/DataItem";
import { ItemImage } from "./shared/ItemImage";

const ListSocial = styled.div`
  display: flex;

  & > svg {
    width: 24px;
    height: 24px;
  }

  & > svg + svg {
    margin-left: 5px;
  }
`;

function Social() {

  const website = "www.jf-oia.pt/";

  return <>
    SIGA-NOS
    <ListSocial>
      <IoLogoFacebook />
      <IoLogoInstagram />
      <IoLogoYoutube />
    </ListSocial>
    <Spacer height={30} />
    <DataItem strict><IoGlobeOutline /><a href={website} target="_blank" rel="noreferrer">{website}</a></DataItem>
    <Spacer height={30} />
    <ItemImage src="./assets/images/eco-freguesias.png" />
  </>;
}

export default Social;
