import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

export function Page1() {
  const history = useHistory();
  const [result, setResult] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { number1, number2 } = (event.target as unknown) as {
      number1: HTMLInputElement;
      number2: HTMLInputElement;
    };

    const result = Number(number1.value) + Number(number2.value);

    switch (result) {
      case 2:
        return history.push("/page2");
      case 3:
        return history.push("/page3");
      default:
        return setResult(`The result is ${result}`);
    }
  };

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
