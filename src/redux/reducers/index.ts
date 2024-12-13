import { combineReducers } from "redux";

import settingsReducers from "./settings";
import startReducers from "./start";
import competitionReducers from "./competition";

const rootReducer = combineReducers({
  settingsReducers,
  startReducers,
  competitionReducers,
});

export default rootReducer;
