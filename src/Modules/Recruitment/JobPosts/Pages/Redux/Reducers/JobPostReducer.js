import * as types from "../Actions/actionType";

//defining initial state of application
const initialState = {
  JobPosts: [],
  JobPost: {},
  loading: false,
  cancel: 0,
  total: 0,
};

const JobPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_JOB_POSTS:
    case types.FILTER_JOB_POST:
    case types.SORT_JOB_POST:
      return {
        ...state,
        JobPosts: action.payload,

        loading: false,
      };

    case types.ADD_JOB_POST:
    case types.UPDATE_JOB_POST:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_JOB_POST:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.GET_TOTAL:
    
      return {
        ...state,
        total: action.payload,
      };
      case types.GET_CANCEL:
        return {
          ...state,
          cancel: action.payload,
        };

    default:
      return state;
  }
};

export default JobPostReducer;
