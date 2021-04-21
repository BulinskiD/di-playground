import { CounterContextProvider } from "./CounterContext";
import { CounterWithContext } from "./Counter";

function App() {
  return (
    <CounterContextProvider>
      <h1>Playground :)</h1>
      <CounterWithContext />
    </CounterContextProvider>
  );
}

export default App;
