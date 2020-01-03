import { SET_TOGGLE } from "../actions/types";

const initialState = {
  displaystate: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOGGLE:
      return {
        displaystate: action.payload
      };
    default:
      return state;
  }
}
