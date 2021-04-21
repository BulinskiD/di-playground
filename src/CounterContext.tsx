import * as React from "react";

const CounterContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([0, () => {}]);

export interface WithContextProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

// If you compare this HOC with hook in solution-2/hook, you can see that typing is much more complicated
// than using hooks, also testing it is more complicated.
export function withCounter<ComponentProps extends {}>(
  Component: React.FC<ComponentProps & WithContextProps>
) {
  return (props: ComponentProps) => {
    const [counter, setCounter] = React.useContext(CounterContext);

    const increment = () => setCounter((oldCounter) => oldCounter + 1);

    const decrement = () => setCounter((oldCounter) => oldCounter - 1);

    return (
      <Component
        counter={counter}
        increment={increment}
        decrement={decrement}
        {...props}
      />
    );
  };
}

export function CounterContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const state = React.useState(0);

  return (
    <CounterContext.Provider value={state}>{children}</CounterContext.Provider>
  );
}
