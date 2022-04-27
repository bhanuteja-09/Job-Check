import * as types from "./ActionType";

//defining initial state
const initialState = {
  drafts: [],
  draft: {},
  totalDraft:0,
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
        case types.GET_TOTALREQUIREMENTS_Draft:
        return{
          ...state,
          totalDraft:action.payload,
        }

    default:
      return state;
  }
};

export default RequirementDraftReducer;
