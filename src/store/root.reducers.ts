import { combineReducers } from "@reduxjs/toolkit";
import commonGlobalReducer from "../../../react-components/src/store/global/global.reducer";
import globalReducer from "./global/global.reducer";

const combinedGlobalReducer = combineReducers({
  commonGlobal: commonGlobalReducer, // Common modals slice
  global: globalReducer, // Extended modals slice for app1
});

const rootReducer = combineReducers({
  global: combinedGlobalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
