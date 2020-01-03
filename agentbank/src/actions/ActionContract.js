import axios from "axios";
import { GET_ERRORS, DELETE_CONTRACT, GET_CONTRACT } from "./types";

export const createContract = (contrat, history, param) => async dispatch => {
  try {
    const res = axios.post(
      `http://localhost:8083/agent/addContract/${param}`,
      contrat
    );
    console.log("succ");
    history.push({
      pathname: "/addCompte",
      state: { users: param }
    });
  } catch (errors) {
    dispatch({
      type: GET_ERRORS,
      payload: errors.response.data
    });
    console.log("error");
  }
};

export const getContract = () => async dispatch => {
  const res = await axios.get("http://localhost:8083/agent/getContracts");
  dispatch({
    type: GET_CONTRACT,
    payload: res.data
  });
  console.log(JSON.stringify(res.data));
};

export const deleteContract = id => async dispatch => {
  await axios.delete(``);
  dispatch({
    type: DELETE_CONTRACT,
    payload: id
  });
};
