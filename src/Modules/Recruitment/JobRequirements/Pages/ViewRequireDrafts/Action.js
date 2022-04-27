
import * as types from "./ActionType";
import db from "../../../../../firebase"


const getDrafts =(drafts) => ({
    type: types.GET_DRAFTS,
    payload: drafts,
});
const requirementDraftAdded = () => ({
    type: types.ADD_DRAFTREQUIREMENT,
    
})

const requirementDraftDeleted = () => ({
    type: types.DELETE_DRAFT_REQUIREMENT,

})
const getDraftTotal =(Draft)=>({
    type:types.GET_TOTALREQUIREMENTS_Draft,
    payload:Draft,

})


export const draftUsers = () => {
    return function (dispatch) {
        db.collection("RequirementAsDraft").onSnapshot((querySnapshot)=>{
            const Draft=[]
            querySnapshot.forEach((doc)=>{
                Draft.push({...doc.data(),id:doc.id})
            })
            const TotalDraft = Draft.length
            dispatch(getDrafts(Draft))
            dispatch(getDraftTotal(TotalDraft))
        })
    }
}
    export const addRequirementDraft = (Draft) =>{
        return function (dispatch){
            db.collection("RequirementAsDraft").doc().set(Draft);
            dispatch(requirementDraftAdded());
        }
    
    }

    export const deleteDraftRequirement = (id) => {
        return function (dispatch) {
            db.collection("RequirementAsDraft").doc(id).delete();
            dispatch(requirementDraftDeleted());
            
    }
}