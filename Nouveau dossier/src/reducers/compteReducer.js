import { ADD_COMPTE } from "../actions/types";

const initialState = {
    comptes :[],
    
    
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_COMPTE:
        return{
        ...state,
         comptes: action.payload
        };
      default:
        return state;
    }
  }