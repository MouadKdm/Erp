import { GET_ABONNE } from "../actions/types";

const initialState = {
    abonnes: [],
    
  
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ABONNE:
        return{
        ...state,
         abonnes: action.payload
        };
      default:
        return state;
    }
  }