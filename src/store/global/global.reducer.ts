import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  commonGlobalInitialState,
} from "../../../../react-components/src/store/global/global.reducer";
import { PosGlobalState } from "./global-state";

const initialState = {};

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    ...commonGlobalInitialState,
    showCalculator: false,
  } as PosGlobalState,
  reducers: {
    setShowCalculator: (state, action: PayloadAction<boolean>) => {
      state.showCalculator = action.payload;
    },
  },
});

export const globalInitialState = initialState;
export const { actions: globalActions, reducer: globalReducer } = globalSlice;

export default globalReducer;
