import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "../../shared-components/src/store/global/global.reducer";

const rootReducer = combineReducers({
  global: globalReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>;
export default rootReducer;
