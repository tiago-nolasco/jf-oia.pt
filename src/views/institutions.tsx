import React from "react";
import ListItems from "../components/ListItems";
import { Main } from "../styles/components/components";
import apiService from "../shared/services/api/api.service";
import { FormattedMessage } from "react-intl";

function Institutions() {
  return (
    <>
      <Main>
        <ListItems
          size={12}
          fn={apiService.getInstitutions.bind(apiService)}
          title={
            <FormattedMessage
              id="institutions"
              defaultMessage="Instituições"
            />
          }
        />{" "}
        {/* News */}
      </Main>
    </>
  );
}

export default Institutions;
