import {setupWorker} from "msw";
import {apiRoutes} from "./routes";

export const worker = setupWorker(...apiRoutes);