import { GET_ACCOUNTS, GET_SOLDETOTAL } from "../actions/types";

const initialState = {
  accounts: [],
  soldeTotal: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      };
    case GET_SOLDETOTAL:
      return {
        ...state,
        soldeTotal: action.payload
      };
    default:
      return state;
  }
}
