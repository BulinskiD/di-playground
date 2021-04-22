import {setupServer} from "msw/node";
import {apiRoutes} from "./routes";

export const server = setupServer(...apiRoutes);