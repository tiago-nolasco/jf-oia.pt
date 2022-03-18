import { II18n } from "../../shared/services/api/model/II18n";
import { II18nState } from "../model/II18nState";
import { IStoreAction } from "../model/IStoreAction"
import { StoreActionEnum } from "../model/StoreActionEnum";

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
