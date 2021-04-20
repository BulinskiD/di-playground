import { useCounterContext } from "./CounterContext";

export function Counter() {
  const { counter, decrement, increment } = useCounterContext();

  return (
    <div>
      <button type="button" onClick={decrement}>
        -
      </button>
      {counter}
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}
