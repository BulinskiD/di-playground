import { counterActions, counterReducer } from "./counterSlice";

// This file is the same as in solution-2/hooks

// This is just an implementation detail and should not be tested at this level, although it is really easy to write
// such tests. But if changing implementation inside reducer / actions is not affecting component behaviour, it
// should not require changes in tests. With this test every change (e.g. change in action name) requires changes in tests.
describe("counterSlice", () => {
  it("should return 1 on increment", () => {
    expect(counterReducer(0, counterActions.increment())).toBe(1);
  });

  it("should return -1 on decrement", () => {
    expect(counterReducer(0, counterActions.decrement())).toBe(-1);
  });

  it("should return 0 on reset", () => {
    expect(counterReducer(5, counterActions.resetCounter())).toBe(0);
  });
});
