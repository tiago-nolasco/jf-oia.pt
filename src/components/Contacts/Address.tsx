import React from "react";
import {
  IoShareSocialSharp,
  IoLocationSharp,
  IoCall,
  IoTimeOutline,
  IoPrintSharp,
} from "react-icons/io5";
import RenderHtml from "../../shared/components/RenderHtml";
import { Spacer } from "../../styles/components/components";
import { DataItem } from "./shared/DataItem";

function Address() {

  const data = {
    coordinates: "N 40.54570, W -8.54077",
    address: "Junta de Freguesia de Oiã<br />R. Tuna Oianense, Nº 22<br />3770-059 Oiã",
    phone: "(+351) 234 721 596",
    fax: "(+351) 234 721 095",
    schedule: "2ª / 4ª / 5ª / 6ª, das 9H às 17H<br />3ª, das 14H às 20H",
  };

  return <>
    <DataItem><IoShareSocialSharp />{data.coordinates}</DataItem>
    <DataItem><IoLocationSharp /><RenderHtml value={data.address} /></DataItem>
    <Spacer />
    <DataItem><IoCall />{data.phone}</DataItem>
    <DataItem><IoPrintSharp /> {data.fax}</DataItem>
    <Spacer />
    <DataItem>
      <IoTimeOutline />
      <div>HORÁRIO DE FUNCIONAMENTO<br /><RenderHtml value={data.schedule} /></div>
    </DataItem>
  </>;
}

export default Address;
