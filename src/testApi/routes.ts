import { rest } from "msw";
import { ListItem } from "../List/ListItem";

const list = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item2" },
  { id: 3, name: "Item3" },
];

export const apiRoutes = [
  rest.get<ListItem[]>("/list", (_, res, ctx) =>
    res(ctx.delay(), ctx.status(200), ctx.json(list))
  ),
];
