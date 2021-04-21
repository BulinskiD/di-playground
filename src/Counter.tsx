import { WithContextProps, withCounter } from "./CounterContext";

export function Counter({ increment, counter, decrement }: WithContextProps) {
  return (
    <div>
      <button aria-label="decrement" type="button" onClick={decrement}>
        -
      </button>
      {counter}
      <button aria-label="increment" type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export const CounterWithContext = withCounter(Counter);
