import React from "react";
import { H1, Hr } from "../styles/elements/elements";
import { Image } from "../styles/components/components";
import { FormattedMessage } from "react-intl";

function Address() {
  return <>
    <H1><FormattedMessage id="address" defaultMessage="Morada" /></H1>
    <Hr />
    <Image src="./assets/images/map.png" height={500} />
  </>;
}

export default Address;
