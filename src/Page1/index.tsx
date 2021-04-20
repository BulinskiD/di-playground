import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { useInputs } from "./useInputs";

export function Page1({ history }: RouteComponentProps) {
  const { handleSubmit, result } = useInputs(history);

  return (
    <form onSubmit={handleSubmit}>
      <div>{result}</div>
      <div>
        <label>
          Number 1
          <input type="number" name="number1" />
        </label>
      </div>
      <div>
        <label>
          Number 2
          <input type="number" name="number2" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// This pollutes the environment, as it can be confusing for devs, which component should be imported.
// HOCs also pollutes Component tree and make it harder to debug.
export const Page1WithRouter = withRouter(Page1);
