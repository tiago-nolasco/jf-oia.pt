import { II18nState } from "../model/II18nState";
import { IStoreAction } from "../model/IStoreAction";
import { StoreActionEnum } from "../model/StoreActionEnum";

const i18nReducer = (state: II18nState = {}, action: IStoreAction) => {
  switch (action.type) {
    case StoreActionEnum.SET_I18N:
      return state = { ...action.value as II18nState };
    default:
      return state;
  }
}

export default i18nReducer;
