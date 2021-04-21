import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { counterActions } from "./store/counterSlice";

const renderCounterWithStore = () =>
  render(<Counter />, {
    wrapper: (props) => <Provider store={store} {...props} />,
  });

// As we are not mocking store here, we have to reset it after each test to make it run independently
beforeEach(() => {
  store.dispatch(counterActions.resetCounter());
});

describe("Counter", () => {
  it("should increment counter", () => {
    renderCounterWithStore();

    userEvent.click(screen.getByLabelText("increment"));

    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it("should decrement counter", () => {
    renderCounterWithStore();

    userEvent.click(screen.getByLabelText("decrement"));

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
