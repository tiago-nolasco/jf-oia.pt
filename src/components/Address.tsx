import React from "react";
import { H1, Hr } from "../styles/elements/elements";
import { Image } from "../styles/components/components";
import { useSelector } from "react-redux";
import { RootStateType } from "../store/model/RootStateType";

function Address() {

  const i18n = useSelector((state: RootStateType) => state.i18n);

  return <>
    <H1>{i18n.address}</H1>
    <Hr />
    <Image src="./assets/images/map.png" height={500} />
  </>;
}

export default Address;
