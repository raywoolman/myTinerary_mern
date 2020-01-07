import * as actions from "./actionTypes";

//Return errors
export const returnErrors = (msg, status, id = null) => {
  return {
    type: actions.GET_ERRORS,
    payload: { msg, status, id }
  };
};

//Clear Errors
export const clearErrors = () => {
    return {
        type: actions.CLEAR_ERRORS
    }
}