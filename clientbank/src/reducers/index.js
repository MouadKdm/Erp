import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import accountReducer from "./accountReducer";
import securityReducer from "./securityReducer";
import operationReducer from "./operationReducer";
import toggleReducer from "./toggleReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  account: accountReducer,
  security: securityReducer,
  operation: operationReducer,
  display: toggleReducer
});
