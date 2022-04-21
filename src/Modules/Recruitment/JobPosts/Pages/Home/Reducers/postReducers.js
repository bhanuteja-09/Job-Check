import * as types from "../Actions/actionType";

//defining initial state of application
const initialState = {
  posts: [],
  post: {},
  loading: true,
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
    case types.FILTER_POST:
    case types.SORT_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    // case types.DELETE_USER:
    case types.ADD_POST:
    case types.UPDATE_POST:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_POST1:
    case types.GET_DOUBLE_POST2:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default postReducers;
