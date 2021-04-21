import { renderHook, act } from "@testing-library/react-hooks";
import { CounterContextProvider, useCounterContext } from "./CounterContext";

// I'm not sure about it, but as this tests are duplicated with Counter.test.tsx,
// this file should probably be removed. The only reason for testing it is that this hook is reusable across whole project

describe("useCounterContext", () => {
  it("should increment counter", () => {
    const { result } = renderHook(useCounterContext, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(useCounterContext, {
      wrapper: (props) => <CounterContextProvider {...props} />,
    });

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(-1);
  });
});
