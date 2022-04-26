import axios from "axios";
import * as types from "./actionType";
import db from "../../../../../../firebase";

const getJobPosts = (JobPosts) => ({
  type: types.GET_JOB_POSTS,
  payload: JobPosts,
});

const JobPostAdded = () => ({
  type: types.ADD_JOB_POST,
});
const JobPostUpdated = () => ({
  type: types.UPDATE_JOB_POST,
});
const JobPostsFilter = (Status) => ({
  type: types.FILTER_JOB_POST,
  payload: Status,
});
const JobPostsSort = (JobPosts) => ({
  type: types.SORT_JOB_POST,
  payload: JobPosts,
});

const getJobPost = (JobPost) => ({
  type: types.GET_SINGLE_JOB_POST,
  payload: JobPost,
});

const getTotal = (total) => ({
  type: types.GET_TOTAL,
  payload: total,
});

export const getCancel = (cancel) => ({
  type: types.GET_CANCEL,
  payload: cancel,
});

// Get All JobPosts From DB
export const loadJobPosts = () => {
  return function (dispatch) {
    db.collection("Jobposts").onSnapshot((querySnapshot) => {
      const JobPost = [];
      querySnapshot.forEach((doc) => {
        JobPost.push({ ...doc.data(), id: doc.id });
      });
      console.log("JobPostAction: " + JobPost);
      const total = JobPost.length;
      dispatch(getJobPosts(JobPost));
      dispatch(getTotal(total));
    });
  };
};

// Add JobPosts Function
export const addJobPost = (JobPosts) => {
  return function (dispatch) {
    db.collection("Jobposts").doc().set(JobPosts);
    dispatch(JobPostAdded());
    dispatch(loadJobPosts());
  };
};

// Edit JobPosts Function
export const getSingleJobPost = (id) => {
  return function (dispatch) {
    db.collection("Jobposts")
      .doc(id)
      .get()
      .then((JobPosts) => {
        dispatch(getJobPost({ ...JobPosts.data() }));
      });
  };
};

// Update JobPosts Function
export const updateJobPost = (JobPost, id) => {
  return function (dispatch) {
    db.collection("Jobposts").doc(id).update(JobPost);
    dispatch(JobPostUpdated());
    dispatch(loadJobPosts());
  };
};

// Filter JobPosts Function
export const filterJobPost = (Status) => {
  return function (dispatch) {
    db.collection("Jobposts")
      .where("status", "==", { Status })
      .where("status", "==", { Status })
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          dispatch(JobPostsFilter(doc.data()));
        });
      });
  };
};

// sort JobPosts Function
export const sortJobPost = (user) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_JobPosts}?_sort=${user}&_order=asc`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(JobPostsSort(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
