import { combineReducers } from "redux";
import RequirementDraftReducer from "../Modules/Recruitment/JobRequirements/Pages/ViewRequireDrafts/RequirementDraftReducer";
import requirementReducers from "../Modules/Recruitment/JobRequirements/Pages/Home/Reducers/RequirementReducer";
import usersReducers from "../Modules/Admin/Subscriptions/Pages/Home/Reducers/Reducer";
import postReducers from "../Modules/Recruitment/JobPosts/Pages/Home/Reducers/postReducers";

// Combined All Reducers

const rootReducer = combineReducers({
  // Requirement Reducers
  requirement: requirementReducers,
  draft: RequirementDraftReducer,
  // Subscription Reducers
  data: usersReducers,
  //Jobposts reducers
  jobpost: postReducers,
});

export default rootReducer;
