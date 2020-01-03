import axios from "axios";
import {GET_ERRORS, GET_AGENCES} from "./types";



export const createAgence = (agence,history) => async dispatch => {
    try{
    const res = axios.post("",agence);
    history.push("/dashboard");
    dispatch({
        type: GET_ERRORS,
            payload: {}
    })
    }
    catch (errors){
        dispatch({
            type: GET_ERRORS,
            payload: errors.response.data
          });
    };
};

export const getAgence = () => async dispatch => {
    const res = await axios.get("http://localhost:8081/agent/all");
    dispatch({
        type: GET_AGENCES,
         payload: res.data,
    });
    };

