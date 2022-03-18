import React from "react";
import { IoMail } from "react-icons/io5";
import { Spacer } from "../../styles/components/components";
import { DataItem } from "./shared/DataItem";
import { ItemImage } from "./shared/ItemImage";

function FlowerParty() {

  const email = "festadaflor@fj-oia.pt";

  return <>
    <ItemImage src="./assets/images/festa-flor.png" />
    <Spacer height={10} />
    <DataItem strict><IoMail /> <a href={`mailto:${email}`}>{email}</a></DataItem>
  </>;
}

export default FlowerParty;
