import * as types from "./actionTypes";
import axios from "axios";

const acceptNotification = (payload) => (dispatch) => {
  console.log(payload.id);
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .patch(
      `https://take-live-calls.onrender.com/updateevent?accept=${payload.user_id}`,
      { id: payload.id },
      config
    )
    .then((res) => {
      return dispatch({
        type: types.ACCEPT_NOTIFICATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const rejectNotification = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .patch(
      `https://take-live-calls.onrender.com/updateevent?reject=${payload.user_id}`,
      { id: payload.id },
      config
    )
    .then((res) => {
      return dispatch({
        type: types.DELETE_NOTIFICATION_FAILURE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNotification = (payload) => (dispatch) => {
  dispatch({ type: types.GET_NOTIFICATION_REQUEST });
  return axios
    .get(`https://take-live-calls.onrender.com/getnotification/${payload}`)
    .then((res) => {
      return dispatch({
        type: types.GET_NOTIFICATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_NOTIFICATION_FAILURE, payload: err });
    });
};

export default acceptNotification;
