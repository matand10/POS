import { globalSlice } from "./global.reducer";
import { globalCommonActions } from "../../../../react-components/src/store/global/global.actions"

export const globalActions = {
  ...globalCommonActions,
  ...globalSlice.actions,
};
