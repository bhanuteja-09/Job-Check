
import * as types from "./ActionType";
import db from "../../../../../firebase"


const getDrafts =(drafts) => ({
    type: types.GET_DRAFTS,
    payload: drafts,
});
const requirementDraftAdded = () => ({
    type: types.ADD_DRAFTREQUIREMENT,
    
})


export const draftUsers = () => {
    return function (dispatch) {
        db.collection("Requirement").onSnapshot((querySnapshot)=>{
            const Requirement=[]
            querySnapshot.forEach((doc)=>{
                Requirement.push({...doc.data(),id:doc.id})
            })
            dispatch(getDrafts(Requirement))
        })
    }
}
    export const addRequirementDraft = (Requirement) =>{
        return function (dispatch){
            db.collection("Draft").doc().set(Requirement);
            dispatch(requirementDraftAdded());
        }
    
    }