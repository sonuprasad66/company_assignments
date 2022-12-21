import * as types from "./actionTypes";
import axios from "axios";

export const addEvent = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`http://localhost:8080/addevent`, payload, config)
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
    .get(`http://localhost:8080/getevent`)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_EVENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_EVENT_FAILURE, payload: err });
    });
};

export const getSingleEvent = (payload) => (dispatch) => {
  return axios
    .get(`http://localhost:8080/getsingleevent/${payload}`)
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
