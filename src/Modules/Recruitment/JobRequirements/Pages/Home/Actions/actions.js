
import axios from "axios";
import * as types from "./actionType";

const getRequirements = (Requirements) => ({
    type: types.GET_REQUIREMENTS,
    payload: Requirements,
});


// const userDeleted = (users) => ({
//     type: types.DELETE_USER,
//     payload: users,
// })
const requirementAdded = () => ({
    type: types.ADD_REQUIREMENT,
    
})
const requirementUpdated = () => ({
    type: types.UPDATE_REQUIREMENT,
    
})
const filter = (Status) => ({
    type: types.FILTER_REQUIREMENT,
    payload:Status,
    
})
const sort = (Requirements) => ({
    type: types.SORT_REQUIREMENT,
    payload:Requirements,
    
})



const getRequirement = (Requirement) => ({
    type: types.GET_SINGLE_REQUIREMENT,
    payload:Requirement,
    
})



export const loadRequirements = (start,end) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_Requirements}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getRequirements(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};


// export const deleteUser = (id) => {
//     return function (dispatch) {
//         axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
//             console.log("resp", resp)
//             dispatch(userDeleted());
//             dispatch(loadUsers());
//         })
//         .catch((error) => console.log(error));
//     };

export const addRequirement = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API_Requirements}`,user).then((resp) => {
            console.log("resp", resp)
            dispatch(requirementAdded());
            dispatch(loadRequirements());
        })
        .catch((error) => console.log(error));
    };
};
export const getSingleRequirement = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_Requirements}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getRequirement(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};
export const updateRequirement = (user,id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API_Requirements}/${id}`,user).then((resp) => {
            console.log("resp", resp)
            dispatch(requirementUpdated());
            dispatch(loadRequirements());
          
        })
        .catch((error) => console.log(error));
    };
};
export const filterRequirement = (Status) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_Requirements}?status=${Status}`).then((resp) => {
            console.log("resp", resp)
            dispatch(filter(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};
export const sortRequirement = (user) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_Requirements}?_sort=${user}&_order=asc`).then((resp) => {
            console.log("resp", resp)
            dispatch(sort(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
}



