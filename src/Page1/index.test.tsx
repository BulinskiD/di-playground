import { Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import { Page1 } from "./";

const history = createMemoryHistory();

describe("Page1", () => {
  it("should redirect to '/page2' when sum in inputs equals 2", async () => {
    render(<Page1 />, {
      wrapper: (props) => <Router history={history} {...props} />,
    });

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "1");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/page2");
    });
  });

  it("should redirect to '/page3' when sum in inputs equals 3", async () => {
    render(<Page1 />, {
      wrapper: (props) => <Router history={history} {...props} />,
    });

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "2");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/page3");
    });
  });

  it("should display result value", async () => {
    render(<Page1 />, {
      wrapper: (props) => <Router history={history} {...props} />,
    });

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "5");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/The result is 6/i)).toBeInTheDocument();
    });
  });
});
