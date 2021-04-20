import { useCounterContext } from "./CounterContext";

export function Counter() {
  const { counter, decrement, increment } = useCounterContext();

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
