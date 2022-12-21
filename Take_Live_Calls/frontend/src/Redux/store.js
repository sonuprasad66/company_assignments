import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from ".././Redux/Auth/reducer";
import { reducer as EventReducer } from ".././Redux/Event/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  EventReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
