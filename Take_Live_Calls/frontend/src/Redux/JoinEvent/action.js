import * as types from "./actionTypes";
import axios from "axios";

export const addJoinEvent = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .patch(`https://take-live-calls.onrender.com/updateevent`, payload, config)
    .then((res) => {
      return dispatch({
        type: types.ADD_JOIN_EVENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getJoinEvent = (payload) => (dispatch) => {
  dispatch({ type: types.GET_JOIN_EVENT_REQUEST });
  return axios
    .get(`https://take-live-calls.onrender.com/getjoinuser/${payload}`)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_JOIN_EVENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_JOIN_EVENT_FAILURE, payload: err });
    });
};
