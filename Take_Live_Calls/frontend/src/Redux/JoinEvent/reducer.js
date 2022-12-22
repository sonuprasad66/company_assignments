import * as types from "./actionTypes";

const initialState = {
  joinevent: [],
  currentjoinEvent: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_JOIN_EVENT_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_JOIN_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        joinevent: payload,
      };

    case types.GET_JOIN_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        joinevent: [],
      };

    case types.GET_CURRENT_USER_JOIN_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        currentjoinEvent: payload,
      };

    default:
      return state;
  }
};
