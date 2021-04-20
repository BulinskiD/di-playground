import { Router, match as Match } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory, Location } from "history";
import userEvent from "@testing-library/user-event";
import { Page1, Page1WithRouter } from "./";

const history = createMemoryHistory();
const location = {} as Location;
const match = {} as Match;

// As we are using withRouter we have to provide 2 additional objects
describe("Page1", () => {
  it("should redirect to '/page2' when sum in inputs equals 2", async () => {
    render(<Page1 history={history} location={location} match={match} />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "1");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/page2");
    });
  });

  it("should redirect to '/page3' when sum in inputs equals 3", async () => {
    render(<Page1 history={history} location={location} match={match} />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "2");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/page3");
    });
  });

  it("should display result value", async () => {
    render(<Page1 history={history} location={location} match={match} />);

    userEvent.type(screen.getByLabelText(/number 1/i), "1");
    userEvent.type(screen.getByLabelText(/number 2/i), "5");
    userEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText(/The result is 6/i)).toBeInTheDocument();
    });
  });
});

// This tests are equal to tests on branch solution-1/hooks
describe("Page1WithRouter", () => {
  it("should redirect to '/page2' when sum in inputs equals 2", async () => {
    render(<Page1WithRouter />, {
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
    render(<Page1WithRouter />, {
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
    render(<Page1WithRouter />, {
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
