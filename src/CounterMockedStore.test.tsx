import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { counterActions } from "./store/counterSlice";

const mockedStore = configureStore();

const store = mockedStore({ counter: 0 });

beforeEach(() => {
  store.clearActions();
});

const renderCounterWithStore = () =>
  render(<Counter />, {
    wrapper: (props) => <Provider store={store} {...props} />,
  });

// This tests for me are not valuable, as change in store would affect this component, but tests will not show it,
// as store is mocked here.

describe("Counter", () => {
  it("should increment counter", () => {
    renderCounterWithStore();

    userEvent.click(screen.getByLabelText("increment"));

    expect(store.getActions()).toEqual([counterActions.increment()]);
  });

  it("should decrement counter", () => {
    renderCounterWithStore();

    userEvent.click(screen.getByLabelText("decrement"));

    expect(store.getActions()).toEqual([counterActions.decrement()]);
  });
});
