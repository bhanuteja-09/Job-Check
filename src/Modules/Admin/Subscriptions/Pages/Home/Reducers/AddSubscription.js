import { GET_SUBSCRIPTION_DATA } from "../Actions/ActionType";

const initialState = {
  setNew: null,
};

const addSubscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_DATA:
      return { ...state, setNew: action.payload };
    default:
      return state;
  }
};

export default addSubscriptionReducer;
