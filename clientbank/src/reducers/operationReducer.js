import { GET_OPERATIONS } from "../actions/types";

const initialState = {
  operations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OPERATIONS:
      return {
        ...state,
        operations: action.payload
      };

    default:
      return state;
  }
}
