import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import RenderHtml from "../../shared/components/RenderHtml";
import { Spacer } from "../../styles/components/components";
import { DataItem } from "./shared/DataItem";

function Other() {

  const suma = "<b>Recolha Monstros (SUMA)</b><br />234 303 230";
  const cmWebsite = "www.cm-olb.pt";

  return <>
    <DataItem strict><RenderHtml value={suma} /></DataItem>
    <Spacer />
    <DataItem strict><IoGlobeOutline /><a href={cmWebsite} target="_blank" rel="noreferrer">{cmWebsite}</a></DataItem>
  </>;
}

export default Other;
