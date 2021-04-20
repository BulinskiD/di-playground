import { CounterContextProvider } from "./CounterContext";
import { Counter } from "./Counter";

function App() {
  return (
    <CounterContextProvider>
      <h1>Playground :)</h1>
      <Counter />
    </CounterContextProvider>
  );
}

export default App;
