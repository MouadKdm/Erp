import axios from "axios";
import { GET_ACCOUNTS, GET_ERRORS } from "./types";
import { GET_OPERATIONS, GET_SOLDETOTAL, SET_TOGGLE, GET_USERS } from "./types";
import { async } from "q";

export const getAccounts = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/compte/all/comptes");
  dispatch({
    type: GET_ACCOUNTS,
    payload: res.data
  });
};
export const rechargeOperateur = recharge => async dispatch => {
  try {
    console.log(recharge.phoneNumber + typeof recharge.phoneNumber);
    const res = await axios.post(
      `http://localhost:8081/compte/recharge/${recharge.compte}/${recharge.montant}`,
      recharge
    );
  } catch (error) {
    let errors = {};
    errors.error = error.response.data;
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    console.log(JSON.stringify(error.response.data));
  }
};

export const toggle = param => async dispatch => {
  dispatch({
    type: SET_TOGGLE,
    payload: !param
  });
};

export const getOperations = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/compte/allTransactions");

  dispatch({
    type: GET_OPERATIONS,
    payload: res.data
  });
};

export const getSoldeTotal = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/compte/soldeTotal");

  dispatch({
    type: GET_SOLDETOTAL,
    payload: res.data
  });
};

export const getAccountsByMotif = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8081/demande/motif/${id}`);
  history.push("/dashboard");
  dispatch();
};
