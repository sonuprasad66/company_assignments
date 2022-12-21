import * as types from "./actionTypes";

const initialState = {
  event: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EVENT_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        event: payload,
      };

    case types.GET_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        event: [],
      };

    default:
      return state;
  }
};
