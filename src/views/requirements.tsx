import React from "react";
import { FormattedMessage } from "react-intl";
import ListFiles from "../components/ListFiles";
import apiService from "../shared/services/api/api.service";
import { H1 } from "../styles/elements/elements";

function Requirements() {
  return <>
    <H1><FormattedMessage id="menu_requirements" defaultMessage="Requerimentos" /></H1>
    <ListFiles fn={apiService.getRequirements.bind(apiService)} />
  </>;
}

export default Requirements;
