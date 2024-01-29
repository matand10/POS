import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  commonGlobalInitialState,
} from "../../../../react-components/src/store/global/global.reducer";
import { posGlobalThunkActionsBuilder } from "./global.thunk-builder";
import { commonGlobalSlice } from "../../../../react-components/src/store/global/global.reducer";
import { PosGlobalState } from "./global-state";

const initialState: PosGlobalState = {
  ...commonGlobalInitialState,
  showCalculator: false,
}

export const globalSlice = createSlice({
  ...commonGlobalSlice,
  name: "global",
  initialState,
  reducers: {
    ...commonGlobalSlice.caseReducers,
    setShowCalculator: (state, action: PayloadAction<boolean>) => {
      state.showCalculator = action.payload;
    },
  },
  extraReducers: posGlobalThunkActionsBuilder
});

export const globalInitialState = globalSlice.getInitialState();
export const { actions: globalActions, reducer: globalReducer } = globalSlice;

export default globalReducer;
