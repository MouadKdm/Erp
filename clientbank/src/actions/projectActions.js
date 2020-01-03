import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_DEMANDE, DELETE_DEMANDE } from "./types";
import { async } from "q";

export const transaction = (recharge, history) => async dispatch => {
  try {
    const res = await axios.post(
      `http://localhost:8081/compte/virement/${recharge.compte}/${recharge.numeroCompte}/${recharge.montant}`
    );
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    console.log(error.response.data);
  }
};

export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8081/demande/all");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (error) {}
};
