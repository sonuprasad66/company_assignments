import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from ".././Redux/Auth/reducer";
import { reducer as EventReducer } from ".././Redux/Event/reducer";
import { reducer as JoinEventReducer } from ".././Redux/JoinEvent/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  EventReducer,
  JoinEventReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
