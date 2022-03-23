import { Dispatch } from "react";
import { MiddlewareAPI } from "redux";
import { IStoreAction } from "../model/IStoreAction";

const getStateSnapshot = (api: MiddlewareAPI) => ({ ...api.getState() });
export const myLogger = 
  (api: MiddlewareAPI) =>
    (next: Dispatch<IStoreAction>) =>
      (action: IStoreAction) => {
        const log = {
          action,
          prevState: getStateSnapshot(api),
          newState: {},
        };

        next(action);
        log.newState = getStateSnapshot(api);

        console.log("[myLogger]", action.type, log);
  }
