import { renderHook } from "@testing-library/react-hooks";
import { useInputs } from "./useInputs";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
const history = createMemoryHistory();

// This test is still completely unnecessary, but the way it delivers dependencies is much better from my point of view
// We don't mock useHistory here, but use Router as a wrapper for hook, which is much closer to real usage than mocking.

describe("useInputs", () => {
  it("should redirect", () => {
    const { result } = renderHook(useInputs, {
      wrapper: (props) => <Router history={history} {...props} />,
    });

    // I don't create a full Event here as it is not important here. Although this is another argument for avoiding such tests
    // as it is really hard to create Event which is exactly the same as browser event.
    result.current.handleSubmit({
      preventDefault: jest.fn(),
      currentTarget: {
        elements: { number1: { value: "1" }, number2: { value: "2" } },
      },
    } as any);

    expect(history.location.pathname).toBe("/page3");
  });
});
