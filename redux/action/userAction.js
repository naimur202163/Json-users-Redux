import { ALL_USER_SUCCESS } from "./../constants/types";

export const setUser = (users) => {
  return {
    type: ALL_USER_SUCCESS,
    payload: users,
  };
};
