import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  commonGlobalInitialState,
} from "../../../../react-components/src/store/global/global.reducer";
import { commonGlobalSlice } from "../../../../react-components/src/store/global/global.reducer";
import { PosGlobalState } from "./global-state";

const initialState: PosGlobalState = {
  ...commonGlobalInitialState,
  showCalculator: false,
}

console.log('commonGlobalSlice', commonGlobalSlice)

export const globalSlice = createSlice({
  ...commonGlobalSlice,
  initialState,
  reducers: {
    ...commonGlobalSlice.caseReducers,
    setShowCalculator: (state, action: PayloadAction<boolean>) => {
      state.showCalculator = action.payload;
    },
  },
});

export const globalInitialState = globalSlice.getInitialState();
export const { actions: globalActions, reducer: globalReducer } = globalSlice;

export default globalReducer;
