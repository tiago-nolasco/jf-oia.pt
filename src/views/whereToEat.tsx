import React from "react";
import ListItems from "../components/ListItems";
import { Main } from "../styles/components/components";
import apiService from "../shared/services/api/api.service";
import { FormattedMessage } from "react-intl";

function WhereToEat() {
  return (
    <>
      <Main>
        <ListItems
          size={12}
          fn={apiService.getWhereToEat.bind(apiService)}
          title={
            <FormattedMessage
              id="where_to_eat"
              defaultMessage="Onde comer / dormir"
            />
          }
        />{" "}
        {/* News */}
      </Main>
    </>
  );
}

export default WhereToEat;
