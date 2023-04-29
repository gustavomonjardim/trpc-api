import { router } from "../trpc/trpc";
import { customerRouter } from "./customer.routes";

export const appRouter = router({
  customers: customerRouter,
});

export type AppRouter = typeof appRouter;
