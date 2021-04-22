import { QueryClientProvider, QueryClient } from "react-query";
import { List } from "./List";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Playground :)</h1>
      <List />
    </QueryClientProvider>
  );
}

export default App;
