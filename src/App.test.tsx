import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// This test is probably the most valuable, but also not always possible to perform
// IMO the best option is combination between App.test and Page1.test

describe("App", () => {
  it("should redirect to '/page2' when sum in inputs equals 2", async () => {
    render(<App />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "1");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/page 2/i)).toBeInTheDocument();
    });
  });

  it("should redirect to '/page3' when sum in inputs equals 3", async () => {
    render(<App />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "2");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/page 3/i)).toBeInTheDocument();
    });
  });

  it("should display result value", async () => {
    render(<App />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "5");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/The result is 6/i)).toBeInTheDocument();
    });
  });
});
