import * as types from "./actionTypes";
import axios from "axios";

export const addEvent = (payload) => (dispatch) => {
  return axios
    .post(`http://localhost:8080/addevent`, payload)
    .then((res) => {
      //   console.log(res.data);
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
