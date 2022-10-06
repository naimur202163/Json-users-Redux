import { ALL_USER_SUCCESS } from "../constants/types";

let initialState = {
  users: [],
};



export const userReducers=(state=initialState,{type,payload})=>{
    switch(type){
        case ALL_USER_SUCCESS :
            return {
                ...state,
                user:   payload
            }
    }
}