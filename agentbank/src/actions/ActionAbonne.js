import axios from "axios";
import { GET_ERRORS } from "./types";

export const createAbonne = (abonne, history, param) => async dispatch => {
  try {
    const res = axios.post("http://localhost:8083/agent/addAbonne", abonne);
    console.log("succ");
    history.push({
      pathname: "/addContract",
      state: { user: param }
    });
  } catch (errors) {
    dispatch({
      type: GET_ERRORS,
      payload: errors.response.data
    });
    console.log("error");
  }
};
