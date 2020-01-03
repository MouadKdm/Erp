import { ADD_CARTE } from "../actions/types";

const initialState = {
    cartes :[],
    
    
};

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_CARTE:
        return{
        ...state,
         cartes: action.payload
        };
      default:
        return state;
    }
  }