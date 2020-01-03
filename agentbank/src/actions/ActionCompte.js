import axios from "axios";
import { GET_ERRORS, GET_USERS } from "./types";

export const createCompte = (compte, history, param) => async dispatch => {
  try {
    const res = axios.post(
      `http://localhost:8083/agent/addCompte/${param}`,
      compte
    );
    history.push("/dashboard");
    console.log("succ" + `http://localhost:8083/agent/addCompte/${param}`);
    history.push({
      pathname: "/addContract",
      state: { username: param }
    });
  } catch (errors) {
    dispatch({
      type: GET_ERRORS,
      payload: errors.response.data
    });
    console.log(errors.response.data);
  }
};

export const getUsers = () => async dispatch => {
  try {
    console.log("get users !!!!");
    const res = axios.get("http://localhost:8083/agent/getUsers");
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
    console.log(res.response.data);
  } catch (error) {}
};
