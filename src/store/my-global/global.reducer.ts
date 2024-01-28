import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import { POSGlobalState } from "./global-state";
import { commonGlobalInitialState } from "../../../shared-components/src/store/global/global.reducer";

const initialState: POSGlobalState = {
  ...commonGlobalInitialState,
  showCalculator: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setShowCalculator: (state, action: PayloadAction<boolean>) => {
      state.showCalculator = action.payload;
    },
    clearState: () => initialState,
  },
});

export const globalInitialState = initialState;

const globalReducer: Reducer<POSGlobalState> = globalSlice.reducer;
export default globalReducer;
