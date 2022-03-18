import React from "react";
import RenderHtml from "../../shared/components/RenderHtml";
import { Flex, Spacer } from "../../styles/components/components";
import { DataItem } from "./shared/DataItem";

function Emergency() {

  const data = {
    firefighters: "<b>Bombeiros V. Oliveira do Bairro:</b><br />234 740 377 (Secretaria)<br />234 740 370 (Transporte Doentes/Serviços Operacionais)",
    policeOBairro: "<b>GNR - Oliveira do Bairro</b><br />234 748 318",
    policeBustos: "<b>GNR - Bustos</b><br />234 750 520",
  };

  return <>
    <DataItem strict><RenderHtml value={data.firefighters} /></DataItem>
    <Spacer />
    <Flex>
      <DataItem strict><RenderHtml value={data.policeOBairro} /></DataItem>
      <Spacer width={20} />
      <DataItem strict><RenderHtml value={data.policeBustos} /></DataItem>
    </Flex>
  </>;
}

export default Emergency;
