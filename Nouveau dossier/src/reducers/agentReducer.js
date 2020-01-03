import { GET_AGENTS } from "../actions/types";

const initialState = {
    agents :[],
    
    
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_AGENTS:
        return{
        ...state,
         agents: action.payload
        };
      default:
        return state;
    }
  }