import axios from "axios";
import * as types from "./ActionType";

const getUsers = (users) => ({
    type: types.GET_SUBSCRIPTION_DATA,
    payload: users,

});

const userAdded = (users) => ({
    type: types.ADD_SUBSCRIPTION_DATA,

});

const getUser = (user) => ({
    type: types.GET_SINGLE_SUBSCRIPTION_DATA,
    payload: user,

});
const userUpdated = (user) => ({
    type: types.UPDATE_SINGLE_SUBSCRIPTION_DATA,

});
const filter = (users) => ({
    type: types.FILTER_USER,
    payload: users,

});
const sort = (users) => ({
    type: types.SORT_USER,
    payload: users,

});
const userDeleted = () => ({
    type: types.DELETE_USER,

})


export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getUsers(resp.data));
        })
            .catch((error) => console.log(error));
    };
};

export function addUsers(user) {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((resp) => {
            console.log("resp", resp);
            dispatch(userAdded());
            dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    };
};

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getUser(resp.data));

        })
            .catch((error) => console.log(error));
    };
};

export const updateSingleUser = (user, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((resp) => {
            console.log("resp", resp)
            dispatch(userUpdated());
            dispatch(loadUsers());


        })
            .catch((error) => console.log(error));
    };
};

export const filterUser = (users) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}?Status=${users}`).then((resp) => {
            console.log("resp", resp)
            dispatch(filter(resp.data));

        })
            .catch((error) => console.log(error));
    };
};
export const sortUser = (users) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}?_sort=${users}&_order=asc`).then((resp) => {
            console.log("resp", resp)
            dispatch(sort(resp.data));

        })
            .catch((error) => console.log(error));
    };
};

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
            .catch((error) => console.log(error));
    };
};