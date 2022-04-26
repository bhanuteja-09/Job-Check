import axios from "axios";
import * as types from "./ActionType";
import db from "../../../../../../firebase"

const getUsers = (Subscription) => ({
    type: types.GET_SUBSCRIPTION_DATA,
    payload: Subscription,

});

const userAdded = (Subscription) => ({
    type: types.ADD_SUBSCRIPTION_DATA,

});

const getUser = (Subscription) => ({
    type: types.GET_SINGLE_SUBSCRIPTION_DATA,
    payload: Subscription,

});
const userUpdated = (Subscription) => ({
    type: types.UPDATE_SINGLE_SUBSCRIPTION_DATA,

});
const filter = (Subscription) => ({
    type: types.FILTER_USER,
    payload: Subscription,

});
const sort = (users) => ({
    type: types.SORT_USER,
    payload: users,

});
const userDeleted = (id) => ({
    type: types.DELETE_USER,

})


export const loadUsers = () => {
    return function (dispatch) {
        // axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
        //     console.log("resp", resp);
        db.collection("Subscription").onSnapshot((querySnapshot) => {
            const Subscription = []
            querySnapshot.forEach((doc) => {
                Subscription.push({ ...doc.data(), id: doc.id })

            })
            dispatch(getUsers(Subscription))
            // 
        })
    };
};

export function addUsers(Subscription) {
    return function (dispatch) {
        // axios.post(`${process.env.REACT_APP_API}`, Subscription).then((resp) => {
        //     console.log("resp", resp);
        db.collection("Subscription").doc().set(Subscription);

        dispatch(userAdded());
        dispatch(loadUsers());

        // 
    };
};

export const getSingleUser = (id) => {
    return function (dispatch) {
        db.collection("Subscription").doc(id).get().then((Subscription) => {
            dispatch(getUser({ ...Subscription.data() }));

        })

    };
};

export const updateSingleUser = (Subscription, id) => {
    return function (dispatch) {
        db.collection("Subscription").doc(id).update(Subscription);
        dispatch(userUpdated());
        dispatch(loadUsers());


    }
    // 
};


export const filterUser = (id) => {
    return function (dispatch) {
        // axios.get(`${process.env.REACT_APP_API}?Status=${users}`).then((resp) => {
        //     console.log("resp", resp)
        //     dispatch(filter(resp.data));
        db.collection("Subscription")
            .where("Status", "=", "Active",)

        dispatch(filter());



    };
};
export const sortUser = (users) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}?_sort=${users}&_order=asc`).then((resp) => {
            console.log("resp", resp)
            dispatch(sort(resp.data));

        })

    };
};

export const deleteUser = (id) => {
    return function (dispatch) {
        db.collection("Subscription").doc(id).delete();
        dispatch(userDeleted());
        dispatch(loadUsers());

    }

};
