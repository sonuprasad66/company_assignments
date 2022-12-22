import * as types from "./actionTypes";
import axios from "axios";

export const addEvent = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`https://take-live-calls.onrender.com/addevent`, payload, config)
    .then((res) => {
      // console.log(res.data);
      return dispatch({ type: types.ADD_EVENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEvent = (payload) => (dispatch) => {
  dispatch({ type: types.GET_EVENT_REQUEST });
  return axios
    .get(`https://take-live-calls.onrender.com/getevent`)
    .then((res) => {
      dispatch({ type: types.GET_EVENT_SUCCESS, payload: res.data });
      dispatch({ type: types.GET_CATEGORIES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_EVENT_FAILURE, payload: err });
    });
};

export const getSingleEvent = (payload) => (dispatch) => {
  return axios
    .get(`https://take-live-calls.onrender.com/getsingleevent/${payload}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_SINGLE_EVENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSearch = (payload) => (dispatch) => {
  dispatch({ type: types.GET_EVENT_REQUEST });
  return axios
    .get(`https://take-live-calls.onrender.com/getevent?search=${payload}`)
    .then((res) => {
      return dispatch({ type: types.GET_EVENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_EVENT_FAILURE, payload: err });
    });
};

export const getFilterByEventName = (payload) => (dispatch) => {
  dispatch({ type: types.GET_EVENT_REQUEST });
  return axios
    .get(
      `https://take-live-calls.onrender.com/getevent?filter_event=${payload}`
    )
    .then((res) => {
      return dispatch({ type: types.GET_EVENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_EVENT_FAILURE, payload: err });
    });
};
