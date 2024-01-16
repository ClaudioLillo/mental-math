import { combineReducers } from "redux";

import settingsReducers from "./settings";
import startReducers from "./start";

const rootReducer = combineReducers({
  settingsReducers,
  startReducers,
});

export default rootReducer;
