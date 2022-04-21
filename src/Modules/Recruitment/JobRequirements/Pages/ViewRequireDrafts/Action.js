import axios from "axios";
import * as types from "./ActionType";


const getDrafts =(drafts) => ({
    type: types.GET_DRAFTS,
    payload: drafts,
});
const requirementDraftAdded = () => ({
    type: types.ADD_DRAFTREQUIREMENT,
    
})


export const draftUsers =(draft) => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API_drafts}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getDrafts(resp.data));
        })
        .catch((error) => console.log(error));  
    };
    };
    export const addRequirementDraft = (draft) => {
        return function (dispatch) {
            axios.post(`${process.env.REACT_APP_API_drafts}`,draft).then((resp) => {
                console.log("resp", resp)
                dispatch(requirementDraftAdded());
                dispatch(draftUsers());
            })
            .catch((error) => console.log(error));
        };
    };