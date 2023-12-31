import * as types from "../Actions/actionType";

//defining initial state of application
const initialState = {
  Requirements: [],
  Requirement: {},
  total: 0,
  loading: false,
};

const requirementReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUIREMENTS:
    case types.FILTER_REQUIREMENT_ACTIVE:
    case types.FILTER_REQUIREMENT_INACTIVE:
    case types.SORT_REQUIREMENT:
      return {
        ...state,
        Requirements: action.payload,
        loading: false,
      };
    case types.DELETE_REQUIREMENT:
    case types.ADD_REQUIREMENT:
    case types.UPDATE_REQUIREMENT:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_REQUIREMENT:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.GET_TOTALREQUIREMENTS:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};

export default requirementReducers;
