import { combineReducers } from "redux";
import RequirementDraftReducer from "../Modules/Recruitment/JobRequirements/Pages/ViewRequireDrafts/RequirementDraftReducer";
import requirementReducers from "../Modules/Recruitment/JobRequirements/Pages/Home/Reducers/RequirementReducer";
import usersReducers from "../Modules/Admin/Subscriptions/Pages/Home/Reducers/Reducer";
import JobPostReducer from "../Modules/Recruitment/JobPosts/Pages/Redux/Reducers/JobPostReducer";
import CommonReducer from './../Components/Shared/Redux/Reducers/CommonReducer';

// Combined All Reducers

const rootReducer = combineReducers({
  //Common Reducers
  Common:CommonReducer,


  // Requirement Reducers
  requirement: requirementReducers,
  draft: RequirementDraftReducer,
  // Subscription Reducers
  data: usersReducers,

  //JobPosts reducers
  Job:JobPostReducer,
  
 
});

export default rootReducer;
