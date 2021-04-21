import { render, screen } from "@testing-library/react";
import {
  CounterContextProvider,
  WithContextProps,
  withCounter,
} from "./CounterContext";
import userEvent from "@testing-library/user-event";

const TestComponent = withCounter(
  ({ increment, decrement, counter }: WithContextProps) => (
    <div>
      <button aria-label="increment" onClick={increment}>
        +
      </button>
      <button aria-label="decrement" onClick={decrement}>
        -
      </button>
      {counter}
    </div>
  )
);

describe("withCounter", () => {
  it("should increment counter", () => {
    render(<TestComponent />, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    userEvent.click(screen.getByLabelText("increment"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement counter", () => {
    render(<TestComponent />, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    userEvent.click(screen.getByLabelText("decrement"));

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
