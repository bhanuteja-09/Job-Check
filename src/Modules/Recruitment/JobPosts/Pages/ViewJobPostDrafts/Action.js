import axios from "axios";
import * as types from "./ActionType";


const getDrafts =(drafts) => ({
    type: types.GET_DRAFTS,
    payload: drafts,
});



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