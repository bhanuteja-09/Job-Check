import * as types from "../Actions/actionType";

//defining initial state of application
const initialState = {
  open: false,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {   
        case types.OPENING:
          return {
            ...state,
            open: action.payload,
          };

    default:
      return state;
  }
};

export default CommonReducer;
