import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// This test is the same as in solution-1/hooks, it for sure is not testing implementation details,
// So it will be the most resistant to changes in logic (as long as the behavior of component is not changing)

describe("App", () => {
  it("should redirect to '/page3' when sum in inputs equals 3", async () => {
    render(<App />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "2");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/page 3/i)).toBeInTheDocument();
    });
  });
});
