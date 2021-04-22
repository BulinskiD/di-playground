import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { List } from "./";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../testApi/server";
import { rest } from "msw";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

afterEach(() => {
  queryClient.clear();
});

const renderList = () =>
  render(<List />, {
    wrapper: (props) => <QueryClientProvider client={queryClient} {...props} />,
  });

// Probably this tests are enough to make sure, that List module is working correctly. It does not
// need any mocks (except msw which can be disconnected). In the same time it does not take more than 80-100ms
// running in standard computer to complete.
describe("List", () => {
  it("should load data correctly", async () => {
    renderList();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("should display error on request fail", async () => {
    jest.spyOn(console, "error").mockImplementationOnce(() => {});
    server.use(rest.get("/list", (_, res, ctx) => res.once(ctx.status(500))));
    renderList();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText("Request failed with status code 500")
      ).toBeInTheDocument();
    });
  });
});
