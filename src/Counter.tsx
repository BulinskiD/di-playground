import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "./store";
import { counterActions } from "./store/counterSlice";
import { Action } from "redux";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: StoreState) => state.counter);

  const withDispatch = (action: () => Action) => () => dispatch(action());

  return (
    <div>
      <button
        type="button"
        aria-label="decrement"
        onClick={withDispatch(counterActions.decrement)}
      >
        -
      </button>
      {counter}
      <button
        type="button"
        aria-label="increment"
        onClick={withDispatch(counterActions.increment)}
      >
        +
      </button>
    </div>
  );
}
