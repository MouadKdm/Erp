import { GET_USER } from "./types";
import axios from "axios";

export const getAllUsers = () => async dispatch => {
  const res = await axios.get("http://localhost:8083/agent/getUsers");
  dispatch({
    type: GET_USER,
    payload: res.data
  });
};
