import axios from "axios";
import {GET_ERRORS,DELETE_CONTRACT,GET_CONTRACT} from "./types";



export const createContract = (contrat,history) => async dispatch => {
    try{
    const res = axios.post("",contrat);
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

export const getContract = () => async dispatch => {
    const res = await axios.get(``);
    dispatch({
        type: GET_CONTRACT,
         payload: res.data,
        
    });
    };

export const deleteContract = id => async dispatch => {
    await axios.delete(``);
    dispatch({
        type: DELETE_CONTRACT,
        payload: id
      });

};


