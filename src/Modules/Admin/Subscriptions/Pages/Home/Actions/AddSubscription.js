import { GET_SUBSCRIPTION_DATA } from "./ActionType";

export const AddSubscription = (name, desc) => {
  return (dispatch) => {
    dispatch({
      type: GET_SUBSCRIPTION_DATA,
    });
    // API CALLS ARE DONE HERE
  };
};
