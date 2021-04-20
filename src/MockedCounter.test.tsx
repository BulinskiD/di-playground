import { useCounterContext } from "./CounterContext";

import { screen, render } from "@testing-library/react";
import { Counter } from "./Counter";

import userEvent from "@testing-library/user-event";

jest.mock("./CounterContext", () => ({ useCounterContext: jest.fn() }));

const mockedUseCounterContext = useCounterContext as jest.Mock;

const counterContextValues = {
  increment: jest.fn(),
  decrement: jest.fn(),
  counter: 0,
};

mockedUseCounterContext.mockReturnValue(counterContextValues);

// IMO this test is not valuable, as it tests only implementation detail. No one should care, about which internal method was called
// During interaction. We want to test if on user action component is behaving correctly, not if it calls correct internal method, even
// If this method is tested somewhere else.
describe("Counter", () => {
  it("should increment correctly", () => {
    render(<Counter />);

    userEvent.click(screen.getByLabelText("increment"));

    expect(counterContextValues.increment).toHaveBeenCalledTimes(1);
  });

  it("should decrement correctly", () => {
    render(<Counter />);

    userEvent.click(screen.getByLabelText("decrement"));

    expect(counterContextValues.decrement).toHaveBeenCalledTimes(1);
  });
});
