import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("it renders the component w/o error", () => {});
    test("it renders the input box", () => {});
    test("it renders the submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("it does not render the input box", () => {});
    test("it does not render the submit button", () => {});
  });
});

describe("update state", () => {});
