import { GET_CONTRACT, DELETE_CONTRACT } from "../actions/types";

const initialState = {
  contrats: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTRACT:
      return {
        ...state,
        contrats: action.payload
      };
    case DELETE_CONTRACT:
      return {
        ...state,
        contrats: state.contrats.filter(
          contrat => contrat.abonne !== action.payload
        )
      };
    default:
      return state;
  }
}
