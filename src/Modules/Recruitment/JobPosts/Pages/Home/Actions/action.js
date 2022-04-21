import axios from "axios";
import * as types from "../Actions/actionType";

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

// const userDeleted = (users) => ({
//     type: types.DELETE_USER,
//     payload: users,
// })
const postAdded = (posts) => ({
  type: types.ADD_POST,
});
const postUpdated = (posts) => ({
  type: types.UPDATE_POST,
});
const filter1 = (Status) => ({
  type: types.FILTER_POST,
  payload: Status,
});
const sort1 = (posts) => ({
  type: types.SORT_POST,
  payload: posts,
});

const getPost1 = (post1) => ({
  type: types.GET_SINGLE_POST1,
  payload: post1,
});
const getPost2 = (post2) => ({
  type: types.GET_DOUBLE_POST2,
  payload: post2,
});

export const loadPosts = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_Jobpost}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getPosts(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

// export const deleteUser = (id) => {
//     return function (dispatch) {
//         axios.delete(`${process.env.REACT_APP_API_Jobpost}/${id}`).then((resp) => {
//             console.log("resp", resp)
//             dispatch(userDeleted());
//             dispatch(loadUsers());
//         })
//         .catch((error) => console.log(error));
//     };

export const addPost = (post) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API_Jobpost}`, post)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(postAdded());
        dispatch(loadPosts());
      })
      .catch((error) => console.log(error));
  };
};
export const getSinglePost1 = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_Jobpost}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getPost1(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getDoublePost2 = (currentPage) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5001/user?_page=${currentPage}&_limit=5`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getPost2(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updatePost = (post, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API_Jobpost}/${id}`, post)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(postUpdated());
      })
      .catch((error) => console.log(error));
  };
};
export const filterPost = (Status) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_Jobpost}?Status=${Status}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(filter1(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
export const sortPost = (post) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_Jobpost}?_sort=${post}&_order=asc`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(sort1(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
