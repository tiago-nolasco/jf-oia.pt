import { createSelector } from "@reduxjs/toolkit";
import { AppStateType } from "../model/AppStateType";
import { II18nState } from "../model/II18nState";

const i18nState = (state: AppStateType): II18nState => state.i18n;

const data = createSelector(i18nState, (i18n: II18nState) => i18n);
const hasData = createSelector(i18nState, (i18n: II18nState) => Object.keys(i18n).length > 0);

export const i18nSelector = {
  data,
  hasData,
};
