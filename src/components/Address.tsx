import React from "react";
import { H1, Hr } from "../styles/elements/elements";
import { Image } from "../styles/components/components";

function Address() {

  const title = "Morada";

  return <>
    <H1>{title}</H1>
    <Hr />
    <Image src="./assets/images/map.png" height={500} />
  </>;
}

export default Address;
