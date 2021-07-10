import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

const logMiddleware = (state) => (dispatch) => (action) => {
  console.log(action.type, state.getState());
  return dispatch(action);
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }
  return next(action);
}

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

export default store;