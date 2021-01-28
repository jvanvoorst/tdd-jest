/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleWare(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
