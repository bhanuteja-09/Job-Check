import { combineReducers } from "redux";
import requirementReducers from "./reducer";

const rootReducer = combineReducers({
    requirement: requirementReducers
    
});

export default rootReducer;