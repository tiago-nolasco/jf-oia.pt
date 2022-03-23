import apiService from "../../shared/services/api/api.service";
import { II18n } from "../../shared/services/api/model/II18n";
import { AppDispatch } from "../model/AppDispatchType";
import { II18nState } from "../model/II18nState";
import { IStoreAction } from "../model/IStoreAction"
import { StoreActionEnum } from "../model/StoreActionEnum";
import { AppGetStateType } from "../model/AppGetStateType";

export const setI18n = (payload: II18n[]): IStoreAction => {

  const value = payload.reduce((acc: II18nState, obj: II18n) => {
    acc[obj.tag] = obj.description;
    return acc;
  }, {});

  return {
    type: StoreActionEnum.SET_I18N,
    value,
  };
}

export const loadI18n = (): any => {
  return async (dispatch: AppDispatch/* , getState: AppGetStateType */) => {
    const i18n: II18n[] = await apiService.getI18n();
    dispatch(setI18n(i18n));
  };
}

