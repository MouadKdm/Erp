import { GET_PROJECTS, GET_DEMANDE } from "../actions/types";
import { fetchDemandesByNumeroCompteAndMotif } from "../actions/projectActions";

const initialState = {
  projects: [],
  demande: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_DEMANDE:
      return {
        ...state,
        demande: action.payload
      };

    default:
      return state;
  }
}
