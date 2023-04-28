import { customerRoute } from "./routes/customer.routes";
import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../customer/repository/sequelize/customer.model";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/customer", customerRoute);

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
