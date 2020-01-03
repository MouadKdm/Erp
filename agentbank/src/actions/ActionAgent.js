import axios from "axios";
import { GET_ERRORS, GET_AGENTS } from "./types";

export const createAgent = (agent, history) => async dispatch => {
  try {
    const res = axios.post("", agent);
    history.push("/dashboard");
  } catch (errors) {
    dispatch({
      type: GET_ERRORS,
      payload: errors.response.data
    });
  }
};
export const getAgent = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/agent/all");
  dispatch({
    type: GET_AGENTS,
    payload: res.data
  });
};
