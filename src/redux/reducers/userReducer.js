import { ALL_USER_REQUEST } from "./../constants/actionType";

export const allUser = (state = { users: {} }, action) => {
  switch (action) {
    case ALL_USER_REQUEST:
      return {
        state,
        loadsing: true,
      };
  }
};
