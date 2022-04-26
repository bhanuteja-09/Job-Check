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
const filterActive = (Subscription) => ({
    type: types.FILTER_SUBCRIPTION_ACTIVE,
    payload: Subscription,

});
const filterInActive = (Subscription) => ({
    type: types.FILTER_SUBCRIPTION_INACTIVE,
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


// Filter Requiremets Function
export const filterSubcriptionActive = (Status) => {
    return function (dispatch) {
        db
            .collection("Subscription")
            .where('Status', '==', "Active")
            .get()
            .then(querySnapshot => {
                const Subscription = []
                querySnapshot.forEach((doc) => {
                    Subscription.push({ ...doc.data(), id: doc.id })
                });
                dispatch(filterActive(Subscription))
            }).catch((error) => console.log(error));
    }
}
export const filterSubscriptionInActive = (Status) => {
    return function (dispatch) {
        db
            .collection("Subscription")
            .where('Status', '==', "In Active")
            .get()
            .then(querySnapshot => {
                const Subscription = []
                querySnapshot.forEach((doc) => {
                    Subscription.push({ ...doc.data(), id: doc.id })
                });
                dispatch(filterInActive(Subscription))
            }).catch((error) => console.log(error));
    }
}


// sort Requirements Function 
export const sortSubscption = (Subscription) => {
    return function (dispatch) {
        db.collection("Subscription")
            .orderBy("Subscription", "asc").get()
            .then(querySnapshot => {
                const Subscription = []
                querySnapshot.forEach((doc) => {
                    Subscription.push({ ...doc.data(), id: doc.id })
                });
                dispatch(sort(Subscription))

            });
    }
}
export const deleteUser = (id) => {
    return function (dispatch) {
        db.collection("Subscription").doc(id).delete();
        dispatch(userDeleted());
        dispatch(loadUsers());

    }

};
