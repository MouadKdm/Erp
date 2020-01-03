import axios from "axios";
import {GET_ERRORS} from "./types";



export const createCarte = (C,history) => async dispatch => {
    try{
    const res = axios.post("",C);
    history.push("/addContract");
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

