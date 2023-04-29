import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./routes/router";
import { createContext } from "./trpc/context";
import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../customer/repository/sequelize/customer.model";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../../db/db.sqlite",
    logging: false,
  });
  sequelize.addModels([CustomerModel]);
  await sequelize.sync();
}
setupDb();
