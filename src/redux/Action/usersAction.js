import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./../constants/actionType";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (item) => {
  return {
    type: FETCH_DATA_SUCCESS,
    item,
  };
};

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error },
  };
};
