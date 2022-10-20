import React from "react";
import { FormattedMessage } from "react-intl";
import ListFiles from "../components/ListFiles";
import apiService from "../shared/services/api/api.service";
import { H1 } from "../styles/elements/elements";

function Documents() {
  return <>
    <H1><FormattedMessage id="menu_documents" defaultMessage="Documentos" /></H1>
    <ListFiles fn={apiService.getDocuments.bind(apiService)} />
  </>;
}

export default Documents;
