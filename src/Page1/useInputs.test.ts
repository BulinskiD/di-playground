import { renderHook } from "@testing-library/react-hooks";
import { useInputs } from "./useInputs";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

// This test, just as in solution-1/hooks is just test of implementation, and should be removed IMO.

describe("useInputs", () => {
  it("should redirect", () => {
    const { result } = renderHook(() => useInputs(history));

    result.current.handleSubmit({
      preventDefault: jest.fn(),
      currentTarget: {
        elements: { number1: { value: "1" }, number2: { value: "2" } },
      },
    } as any);

    expect(history.location.pathname).toBe("/page3");
  });
});
