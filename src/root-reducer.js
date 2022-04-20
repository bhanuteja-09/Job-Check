import { combineReducers } from "redux";
import RequirementDraftReducer from "./Modules/Recruitment/JobRequirements/Pages/ViewRequireDrafts/RequirementDraftReducer";
import requirementReducers from "./Modules/Recruitment/JobRequirements/Pages/Home/Reducers/RequirementReducer";
import usersReducers from "./Modules/Admin/Subscriptions/Pages/Home/Reducers/Reducer";
// import RequirementDraftReducer from "../../ViewRequireDrafts/RequirementDraftReducer";

// Combined All Reducers

const rootReducer = combineReducers({
    requirement: requirementReducers,
    draft:RequirementDraftReducer,
    data: usersReducers
    
});

export default rootReducer;