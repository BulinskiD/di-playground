import { useInputs } from "./useInputs";

export function Page1() {
  const { result, handleSubmit } = useInputs();

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
