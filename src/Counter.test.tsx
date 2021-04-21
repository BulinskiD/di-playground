import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter, CounterWithContext } from "./Counter";
import { CounterContextProvider } from "./CounterContext";

const props = { increment: jest.fn(), decrement: jest.fn(), counter: 0 };

// This tests are the same as in solution-2/hooks, so there is no benefit of using HOC.
// LOOK BELOW FOR SECOND COMMENT :)

describe("CounterWithContext", () => {
  it("should increment correctly", () => {
    render(<CounterWithContext />, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    userEvent.click(screen.getByLabelText("increment"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement correctly", () => {
    render(<CounterWithContext />, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    userEvent.click(screen.getByLabelText("decrement"));

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});

// IMO this tests are useless, as we only check implementation details not the actual behavior
// Probably we can call it DI but I cannot see any benefit of it.
describe("Counter", () => {
  it("should increment correctly", () => {
    render(<Counter {...props} />);

    userEvent.click(screen.getByLabelText("increment"));

    expect(props.increment).toHaveBeenCalledTimes(1);
  });

  it("should decrement correctly", () => {
    render(<Counter {...props} />);

    userEvent.click(screen.getByLabelText("decrement"));

    expect(props.decrement).toHaveBeenCalledTimes(1);
  });
});
