import * as types from "./actionTypes";

const initialState = {
  notification: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_NOTIFICATION_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        notification: payload,
      };

    case types.GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        notification: [],
      };

    default:
      return state;
  }
};
