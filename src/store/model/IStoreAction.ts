import { StoreActionEnum } from "./StoreActionEnum";

export interface IStoreAction {
  type: StoreActionEnum;
  value?: unknown;
}
