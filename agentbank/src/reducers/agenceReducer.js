import { GET_AGENCES } from "../actions/types";

const initialState = {
    agences: [],
    
  
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_AGENCES:
        return{
        ...state,
         agences: action.payload
        };
      default:
        return state;
    }
  }