import * as React from "react";
import { useHistory } from "react-router-dom";

interface FormElements extends HTMLFormControlsCollection {
  number1: HTMLInputElement;
  number2: HTMLInputElement;
}
interface PageForm extends HTMLFormElement {
  readonly elements: FormElements;
}

// This is the contract between Page1 comp and useInputs. IMO it is not necessary to write it explicitly,
// except some specific situations (e.g. if this hook was a lib)
type UseInputs = () => {
  handleSubmit: (event: React.FormEvent<PageForm>) => void;
  result: string;
};

export const useInputs: UseInputs = () => {
  const history = useHistory();
  const [result, setResult] = React.useState("");

  const handleSubmit = (event: React.FormEvent<PageForm>) => {
    event.preventDefault();
    const { number1, number2 } = event.currentTarget.elements;
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

  return { handleSubmit, result };
};
