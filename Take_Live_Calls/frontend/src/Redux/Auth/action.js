import * as types from "./actionTypes";
import axios from "axios";

export const userSignup = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(`https://take-live-calls.onrender.com/signup`, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
    });
};

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(`https://take-live-calls.onrender.com/login`, payload)
    .then((res) => {
      //   console.log(res.data.message);
      return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });
};

export const getProfile = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  return axios
    .get(`https://take-live-calls.onrender.com/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      // console.log(res.data);
      return dispatch({ type: types.USER_PROFILE_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
