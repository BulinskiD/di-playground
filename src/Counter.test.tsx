import { screen, render } from "@testing-library/react";
import { Counter } from "./Counter";
import { CounterContextProvider } from "./CounterContext";
import userEvent from "@testing-library/user-event";

// IMO this test is the most valuable, as it places Counter component in natural environment, it tests the behaviour of component
// Instead of implementation details
describe("Counter", () => {
  it("should increment correctly", () => {
    render(<Counter />, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    userEvent.click(screen.getByLabelText("increment"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement correctly", () => {
    render(<Counter />, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    userEvent.click(screen.getByLabelText("decrement"));

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
