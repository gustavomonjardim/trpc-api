import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./router";
import { createContext } from "./context";
import { app } from "./infra/express-api/server";

app.use(cors());

// app.use(
//   "/trpc",
//   trpcExpress.createExpressMiddleware({
//     router: appRouter,
//     createContext,
//   })
// );

app.listen(4000);
