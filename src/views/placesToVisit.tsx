import React from "react";
import ListItems from "../components/ListItems";
import { Main } from "../styles/components/components";
import apiService from "../shared/services/api/api.service";
import { FormattedMessage } from "react-intl";

function PlacesToVisit() {
  return (
    <>
      <Main>
        <ListItems
          size={12}
          fn={apiService.getPlacesToVisit.bind(apiService)}
          title={
            <FormattedMessage
              id="places_to_visit"
              defaultMessage="Locais a Visitar"
            />
          }
        />{" "}
        {/* News */}
      </Main>
    </>
  );
}

export default PlacesToVisit;
