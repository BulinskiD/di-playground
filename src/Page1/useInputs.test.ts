import { renderHook } from "@testing-library/react-hooks";
import { useInputs } from "./useInputs";
import { createMemoryHistory } from "history";
import { useHistory } from "react-router-dom";
jest.mock("react-router-dom", () => ({ useHistory: jest.fn() }));

const mockedUseHistory = useHistory as jest.Mock;

const history = createMemoryHistory();
mockedUseHistory.mockReturnValue(history);

// This test is completely unnecessary for me, as it tests implementation details not the actual component behavior.
// IMO the only place where testing custom hooks is reasonable is when we are using it in many different contexts (e.g. if we create a hook library)
// Although it is pretty simple and straightforward with mocking useHistory
// Compare with useInputs2.test

describe("useInputs", () => {
  it("should redirect", () => {
    const { result } = renderHook(useInputs);

    result.current.handleSubmit({
      preventDefault: jest.fn(),
      currentTarget: {
        elements: { number1: { value: "1" }, number2: { value: "2" } },
      },
    } as any);

    expect(history.location.pathname).toBe("/page3");
  });
});
