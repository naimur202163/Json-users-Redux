import axios from "axios";
import { ALL_USER_FAILD, ALL_USER_SUCCESS } from "../constants/actionType";

const getUser = async (dispatch) => {
  try {
    dispatch({ type: "ALL_USER_REQUEST" });
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/`);

    dispatch({
      type: ALL_USER_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_FAILD,
      payload: error.respone.data.message,
    });
  }
};
