import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export type Rootstate = ReturnType<typeof rootReducer>;
export default rootReducer;
