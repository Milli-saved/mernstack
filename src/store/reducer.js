import { combineReducers } from "redux";
import recruitReducer from "./Recruiter/reducer";
import applicationReducer from "./Applications/reducer";

const rootReducer = combineReducers({
  recruiter: recruitReducer,
  application: applicationReducer,
});

export default rootReducer;
