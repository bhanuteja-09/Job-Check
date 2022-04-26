import * as types from "../Actions/ActionType";

const initialState = {
    Subscriptions: [],
    Subscription: {},
    loading: true
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SUBSCRIPTION_DATA:
        case types.FILTER_SUBCRIPTION_ACTIVE:
        case types.FILTER_SUBCRIPTION_INACTIVE:
        case types.SORT_USER:

            return {
                ...state,
                Subscriptions: action.payload,
                loading: false,

            }
        case types.DELETE_USER:
        case types.ADD_SUBSCRIPTION_DATA:
        case types.UPDATE_SINGLE_SUBSCRIPTION_DATA:


            return {
                ...state,
                loading: false,
            }
        case types.GET_SINGLE_SUBSCRIPTION_DATA:
            return {
                ...state,
                Subscription: action.payload,
                loading: false,

            }

        default:
            return state;
    }
};

export default usersReducers;