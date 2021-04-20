import { BrowserRouter, Route } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

function App() {
  return (
    <>
      <h1>Playground :)</h1>
      <BrowserRouter>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
