import axios from "axios";
import {GET_ERRORS} from "./types";

export const createCompte = (compte,history) => async dispatch => {
    try{
    const res = axios.post("",compte);
    history.push("/addCarte");
    console.log("succ");
   
    }
    catch (errors){
        dispatch({
            type: GET_ERRORS,
            payload: errors.response.data
          });
          console.log("error");
    };
};



