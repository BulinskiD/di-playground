import * as React from "react";

const CounterContext = React.createContext<[number, React.Dispatch<React.SetStateAction<number>>]>( [0, () => {}]);

export function useCounterContext() {
    const [counter, setCounter] = React.useContext(CounterContext);

    const increment = () => setCounter(oldCounter => oldCounter + 1);

    const decrement = () => setCounter(oldCounter => oldCounter - 1);

    return { counter, increment, decrement }
}

export function CounterContextProvider({ children }: React.PropsWithChildren<{}>) {
    const state = React.useState(0);

    return <CounterContext.Provider value={state}>{children}</CounterContext.Provider>
}