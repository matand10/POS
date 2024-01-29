import { combineReducers } from "@reduxjs/toolkit";
import commonGlobalReducer from "../../../react-components/src/store/global/global.reducer";
import globalReducer from "./global/global.reducer";

const combinedGlobalReducer = combineReducers({
  commonGlobal: commonGlobalReducer, // Common global slice
  PosGlobal: globalReducer, // Extended global slice for POS
});

const rootReducer = combineReducers({
  global: combinedGlobalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
