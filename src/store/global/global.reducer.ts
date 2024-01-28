import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  commonGlobalSlice,
  commonGlobalInitialState,
  commonGlobalActions,
} from "../../../../react-components/src/store/global/global.reducer";
import { GlobalState } from "../../../../react-components/src/store/global/global-state";

type GlobalType = {
  showCalculator: boolean;
} & GlobalState;

const initialState = {};

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    ...commonGlobalInitialState,
    showCalculator: false,
  } as GlobalType,
  reducers: {
    setShowCalculator: (state, action: PayloadAction<boolean>) => {
      state.showCalculator = action.payload;
    },
  },
});

export const globalInitialState = initialState;
export const { actions: globalActions, reducer: globalReducer } = globalSlice;

export default globalReducer;
