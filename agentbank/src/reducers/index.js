import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import agenceReducer from "./agenceReducer";
import agentReducer from "./agentReducer";
import securityReducer from "./securityReducer";
import compteReducer from "./compteReducer";
import userReducer from "./userReducer";
import contratReducer from "./contratReducer";

export default combineReducers({
  errors: errorReducer,
  agent: agentReducer,
  agence: agenceReducer,
  security: securityReducer,
  compte: compteReducer,
  client: userReducer,
  contrat: contratReducer
});
