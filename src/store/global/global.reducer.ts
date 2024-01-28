import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const globalSlice = createSlice({
  name: "global",
  initialState: {},
  reducers: {
    clearState: () => initialState,
  },
});

export const globalInitialState = initialState;
export const { actions: globalActions, reducer: globalReducer } = globalSlice;

export default globalReducer;
