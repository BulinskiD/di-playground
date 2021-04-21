import { connect } from "react-redux";
import { StoreState } from "./store";
import { counterActions } from "./store/counterSlice";

interface CounterProps {
  counter: number;
  decrement: () => void;
  increment: () => void;
}

export function Counter({ counter, decrement, increment }: CounterProps) {
  return (
    <div>
      <button type="button" aria-label="decrement" onClick={() => decrement()}>
        -
      </button>
      {counter}
      <button type="button" aria-label="increment" onClick={() => increment()}>
        +
      </button>
    </div>
  );
}

export const ConnectedCounter = connect(
  (state: StoreState) => ({ counter: state.counter }),
  { decrement: counterActions.decrement, increment: counterActions.increment }
)(Counter);
