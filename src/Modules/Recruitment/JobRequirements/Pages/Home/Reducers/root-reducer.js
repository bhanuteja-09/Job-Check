import { combineReducers } from "redux";
import RequirementDraftReducer from "../../ViewRequireDrafts/RequirementDraftReducer";
import requirementReducers from "./RequirementReducer";
// import RequirementDraftReducer from "../../ViewRequireDrafts/RequirementDraftReducer";

// Combined All Reducers

const rootReducer = combineReducers({
    requirement: requirementReducers,
    draft:RequirementDraftReducer
    
});

export default rootReducer;