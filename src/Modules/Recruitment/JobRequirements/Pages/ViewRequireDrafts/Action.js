
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
        db.collection("RequirementAsDraft").onSnapshot((querySnapshot)=>{
            const Draft=[]
            querySnapshot.forEach((doc)=>{
                Draft.push({...doc.data(),id:doc.id})
            })
            dispatch(getDrafts(Draft))
        })
    }
}
    export const addRequirementDraft = (Draft) =>{
        return function (dispatch){
            db.collection("RequirementAsDraft").doc().set(Draft);
            dispatch(requirementDraftAdded());
        }
    
    }