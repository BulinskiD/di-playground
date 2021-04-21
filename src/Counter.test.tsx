import { Provider } from "react-redux";
import { store } from "./store";
import { Counter, ConnectedCounter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { counterActions } from "./store/counterSlice";

const renderCounterWithStore = () =>
  render(<ConnectedCounter />, {
    wrapper: (props) => <Provider store={store} {...props} />,
  });

beforeEach(() => {
  store.dispatch(counterActions.resetCounter());
});

// This tests are the same as in solution-3/hooks
// LOOK BELOW FOR NOT CONNECTED COMPONENT TESTS
describe("ConnectedCounter", () => {
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

// This tests are not valuable for me, as the whole logic is disconnected from component.
// Tests should not care about which action is called, as long as the behaviour is correct.
describe("Counter", () => {
  const props = { counter: 0, decrement: jest.fn(), increment: jest.fn() };

  it("should increment counter", () => {
    render(<Counter {...props} />);

    userEvent.click(screen.getByLabelText("increment"));

    expect(props.increment).toHaveBeenCalledTimes(1);
  });

  it("should decrement counter", () => {
    render(<Counter {...props} />);

    userEvent.click(screen.getByLabelText("decrement"));

    expect(props.decrement).toHaveBeenCalledTimes(1);
  });
});
