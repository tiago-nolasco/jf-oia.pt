import React from "react";
import RenderHtml from "../../shared/components/RenderHtml";
import { Flex, Spacer } from "../../styles/components/components";
import { DataItem } from "./shared/DataItem";

function Health() {

  const data = {
    oBairro: "<b>Centro de Saúde de Oliveira do Bairro</b><br />*234 730 430",
    oia: "<b>Ext. Centro de Saúde de Oiã</b><br />*234 729 410",
    palhaca: "<b>E. C. S. Palhaça</b><br />*234 751 614",
    troviscal: "<b>E. C. S. Troviscal</b><br />*234 751 902",
    bustos: "<b>E. C. S. Bustos</b><br />*234 752 160",
    mamarrosa: "<b>E. C. S. Mamarrosa</b><br />*234 751 488",
  };

  return <>
    <Flex>
      <DataItem strict><RenderHtml value={data.oBairro} /></DataItem>
      <Spacer width={20} />
      <DataItem strict><RenderHtml value={data.oia} /></DataItem>
    </Flex>
    <Spacer />
    <Flex>
      <DataItem strict><RenderHtml value={data.palhaca} /></DataItem>
      <Spacer width={20} />
      <DataItem strict><RenderHtml value={data.troviscal} /></DataItem>
      <Spacer width={20} />
      <DataItem strict><RenderHtml value={data.bustos} /></DataItem>
      <Spacer width={20} />
      <DataItem strict><RenderHtml value={data.mamarrosa} /></DataItem>
    </Flex>
  </>;
}

export default Health;
