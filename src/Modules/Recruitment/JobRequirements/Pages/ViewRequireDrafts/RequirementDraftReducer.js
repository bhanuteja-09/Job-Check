import * as types from "./ActionType";

//defining initial state
const initialState = {
  drafts: [],
  draft: {},
  loading: false,
};

const RequirementDraftReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DRAFTS:
      return {
        ...state,
        drafts: action.payload,
        loading: false,
      };
      case types.ADD_DRAFTREQUIREMENT:
        return{
          ...state,
        loading: false,
        }

    default:
      return state;
  }
};

export default RequirementDraftReducer;
