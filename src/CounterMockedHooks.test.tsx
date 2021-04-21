import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { counterActions } from "./store/counterSlice";
import { useSelector, useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const dispatch = jest.fn();

const mockedUseSelector = useSelector as jest.Mock;
const mockedUseDispatch = useDispatch as jest.Mock;

mockedUseSelector.mockReturnValue(0);
mockedUseDispatch.mockReturnValue(dispatch);

// This tests have the same cons as CounterMockedStore, just different implementation.

describe("Counter", () => {
  it("should increment counter", () => {
    render(<Counter />);

    userEvent.click(screen.getByLabelText("increment"));

    expect(dispatch).toHaveBeenCalledWith(counterActions.increment());
  });

  it("should decrement counter", () => {
    render(<Counter />);

    userEvent.click(screen.getByLabelText("decrement"));

    expect(dispatch).toHaveBeenCalledWith(counterActions.decrement());
  });
});
