
import axios from "axios";
import * as types from "./actionType";
import db from "../../../../../../firebase"

const getJobPosts = (Requirment) => ({
    type: types.GET_JOB_POSTS,
    payload: Requirment,
});



const JobPostAdded = () => ({
    type: types.ADD_JOB_POST,

})
const JobPostUpdated = () => ({
    type: types.UPDATE_JOB_POST,

})
const JobPostsFilter = (Status) => ({
    type: types.FILTER_JOB_POST,
    payload: Status,

})
const JobPostsSort = (JobPosts) => ({
    type: types.SORT_JOB_POST,
    payload: JobPosts,

})



const getJobPost = (JobPost) => ({
    type: types.GET_SINGLE_JOB_POST,
    payload: JobPost,

})

const getTotal = (JobPosts) => ({
    type: types.GET_TOTAL,
    payload: JobPosts,
})

export const getCancel = (cancel) => ({
    type: types.GET_CANCEL,
    payload: cancel,
})

export const opening = (open) => ({
    type: types.OPENING,
    payload: open,
})


// Get All Requirements From DB
export const loadJobPosts = (start, end) => {
    return function (dispatch) {
        db.collection("Requirment").onSnapshot((querySnapshot) => {
            const Requirment = []
            querySnapshot.forEach((doc) => {
                Requirment.push({ ...doc.data(), id: doc.id })


            })
            dispatch(getJobPosts(Requirment));
        });
    };
}




// Add Requirement Function
export const addJobPost = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API_JobPosts}`, user).then((resp) => {
            console.log("resp", resp)
            dispatch(JobPostAdded());
            dispatch(loadJobPosts());
        })
            .catch((error) => console.log(error));
    };
};

// Edit Requirement Function
export const getSingleJobPost = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_JobPosts}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getJobPost(resp.data));

        })
            .catch((error) => console.log(error));
    };
};


// Update Requirements Function
export const updateJobPost = (user, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API_JobPosts}/${id}`, user).then((resp) => {
            console.log("resp", resp)
            dispatch(JobPostUpdated());
            dispatch(loadJobPosts());

        })
            .catch((error) => console.log(error));
    };
};

// Filter Requiremets Function
export const filterJobPost = (Status) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_JobPosts}?status=${Status}`).then((resp) => {
            console.log("resp", resp)
            dispatch(JobPostsFilter(resp.data));

        })
            .catch((error) => console.log(error));
    };
};

// sort Requirements Function 
export const sortJobPost = (user) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API_JobPosts}?_sort=${user}&_order=asc`).then((resp) => {
            console.log("resp", resp)
            dispatch(JobPostsSort(resp.data));

        })
            .catch((error) => console.log(error));
    };
}



